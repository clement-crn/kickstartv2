import { useState, useEffect } from "react";
import { Button, Header, Table } from "semantic-ui-react";
import Layout from "@/components/Layout";
import RequestRow from "@/components/RequestRow";
import { ethers } from "ethers";
import { MainAbi } from "../../../../backend/abis";
import { useRouter } from "next/router";

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
        //const provider = new ethers.providers.JsonRpcProvider();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const campaign = new ethers.Contract(address, MainAbi, signer);

        const account = await signer.getAddress();
        const isApprover = await campaign.approvers(account);
        if (!isApprover) {
            console.error("You must be an approver to approve a request.");
            return;
        }

        const gasLimit = await campaign.estimateGas.approveRequest(id);
        const transaction = await campaign.approveRequest(id, { gasLimit });
        await transaction.wait();
        router.push(`/campaigns/${address}/requestHome`);
    };

    const onFinalize = async (id) => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const signer = provider.getSigner();
            const campaign = new ethers.Contract(address, MainAbi, signer);

            const account = await signer.getAddress();
            const isApprover = await campaign.approvers(account);
            if (!isApprover) {
                console.error("You must be an approver to finalize a request.");
                return;
            }

            const gasLimit = await campaign.estimateGas.finalizeRequest(id);
            const transaction = await campaign.finalizeRequest(id, {
                gasLimit,
            });
            await transaction.wait();
            router.push(`/campaigns/${address}/requestHome`);
        } catch (error) {
            console.error(error);
        }
    };

    const createRequest = async () => {
        router.push(`/campaigns/${address}/requests/newreq`);
    };
    return (
        <Layout>
            <Header as="h3">Requêtes</Header>
            <Button
                primary
                floated="right"
                style={{ marginBottom: 10 }}
                onClick={createRequest}
            >
                Ajouter une requête
            </Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Montant</Table.HeaderCell>
                        <Table.HeaderCell>Receveur</Table.HeaderCell>
                        <Table.HeaderCell>Votes pour</Table.HeaderCell>
                        <Table.HeaderCell>Approuver</Table.HeaderCell>

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
                            address={address}
                        >
                            <Table.Cell>
                                {request.complete ? null : (
                                    <Button
                                        color="green"
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
            <div>{requestCount} requêtes trouvées.</div>
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
