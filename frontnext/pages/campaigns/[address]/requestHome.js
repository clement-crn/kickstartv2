import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Header, Table } from "semantic-ui-react";
import Layout from "@/components/Layout";
import RequestRow from "@/components/RequestRow";
import { ethers } from "ethers";
import { MainAbi } from "../../../../backend/abis";

const RequestIndex = ({ address }) => {
    const router = useRouter();
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

            const requests = await Promise.all(
                Array(parseInt(count))
                    .fill()
                    .map((element, index) => {
                        return campaign.requests(index);
                    })
            );
            setRequests(requests);
        }

        if (address) {
            fetchData();
        }
    }, [address]);

    const renderRows = () => {
        return requests.map((request, index) => {
            return (
                <RequestRow
                    key={index}
                    id={index}
                    request={{
                        ...request,
                        value: request.value.toString(),
                        approvalCount: request.approvalCount.toString(),
                        complete: request.complete.toString(),
                    }}
                    address={address}
                    approversCount={approversCount}
                    campaign={campaign}
                />
            );
        });
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
                        <Table.HeaderCell>Finalize</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{renderRows()}</Table.Body>
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
