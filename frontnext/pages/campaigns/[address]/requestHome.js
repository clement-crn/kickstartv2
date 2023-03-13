import { useState, useEffect } from "react";
import { Button, Header, Table } from "semantic-ui-react";
import Layout from "@/components/Layout";
import RequestRow from "@/components/RequestRow";
import { ethers } from "ethers";
import { MainAbi } from "../../../../backend/abis";

const RequestIndex = ({ address }) => {
    const [requestCount, setRequestCount] = useState(0);
    const [approversCount, setApproversCount] = useState(0);
    const [requests, setRequests] = useState([]);
    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const provider = new ethers.providers.JsonRpcProvider();
            const signer = provider.getSigner();
            const campaign = new ethers.Contract(address, MainAbi, signer);
            setCampaign(campaign);

            const count = await campaign.getRequestsCount();
            setRequestCount(parseInt(count));

            const approverCount = await campaign.approversCount();
            setApproversCount(parseInt(approverCount));

            const requests = [];
            for (let i = 0; i < count; i++) {
                const request = await campaign.requests(i);
                requests.push({
                    ...request,
                    value: ethers.utils.formatEther(request.value),
                    approvalCount: parseInt(request.approvalCount),
                    complete: request.complete,
                });
            }
            setRequests(requests);
        }

        if (address) {
            fetchData();
        }
    }, [address]);

    const onApprove = async (id) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, MainAbi, signer);
        await contract.approveRequest(id);

        console.log("test");
    };

    const onFinalize = async (id) => {
        const signer = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const campaignWithSigner = campaign.connect(signer);
        await campaignWithSigner.finalizeRequest(id);
    };

    const createRequest = async () => {
        router.push(`/campaigns/${address}/requests/new`);
    };

    return (
        <Layout>
            <Header as="h3">Requests</Header>
            <Button
                primary
                floated="right"
                style={{ marginBottom: 10 }}
                onClick={createRequest}
            >
                Add Request
            </Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Recipient</Table.HeaderCell>
                        <Table.HeaderCell>Approval Count</Table.HeaderCell>
                        <Table.HeaderCell>Approve</Table.HeaderCell>

                        <Table.HeaderCell>Finaliser</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {requests.map((request, index) => (
                        <RequestRow
                            key={index}
                            id={index}
                            request={request}
                            approversCount={approversCount}
                            campaign={campaign}
                        >
                            <Table.Cell>
                                {request.complete ? null : (
                                    <Button
                                        color="green"
                                        basic
                                        onClick={() => onApprove(index)}
                                    >
                                        Approve
                                    </Button>
                                )}
                            </Table.Cell>
                        </RequestRow>
                    ))}
                </Table.Body>
            </Table>
            <div>Found {requestCount} requests.</div>
        </Layout>
    );
};

export async function getServerSideProps(props) {
    const { address } = props.query;

    return {
        props: {
            address,
        },
    };
}

export default RequestIndex;
