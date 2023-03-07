import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Header, Table } from "semantic-ui-react";
import Layout from "@/components/Layout";
import { MainAbi } from "@/../backend/abis";
import { ethers } from "ethers";
import CampaignShow from "../[address]";

export default function RequestIndex() {
    const [campaign, setCampaign] = useState(null);
    const [requests, setRequests] = useState([]);
    const [requestCount, setRequestCount] = useState(0);
    const [approversCount, setApproversCount] = useState(0);

    const router = useRouter();
    const { address } = router.query;

    useEffect(() => {
        if (address) {
            //pour eviter address undefined
            console.log("address dans useEffect", address);
        }
    }, [address]);

    async function instance() {
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, MainAbi, signer);
        const count = await contract.getRequestsCount();

        console.log("nombre de requetes", count);
    }
    instance();

    const renderRows = () => {
        return requests.map((request, index) => {
            return (
                <RequestRow
                    key={index}
                    id={index}
                    request={request}
                    address={address}
                    approversCount={approversCount}
                    campaign={campaign}
                />
            );
        });
    };

    return (
        <Layout>
            <Header as="h3">Requests</Header>
            {address && ( // check if address is defined
                <Button
                    primary
                    floated="right"
                    style={{ marginBottom: 10 }}
                    href={`/campaigns/${address}/requests/new`}
                >
                    Add Request
                </Button>
            )}
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
}
