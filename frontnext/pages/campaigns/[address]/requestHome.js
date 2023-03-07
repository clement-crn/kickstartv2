import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Header, Table } from "semantic-ui-react";
import Layout from "@/components/Layout";
import { MainAbi } from "@/../backend/abis";
import { ethers } from "ethers";

export default function RequestIndex() {
    const [campaign, setCampaign] = useState(null);
    const [requests, setRequests] = useState([]);
    const [requestsCount, setRequestsCount] = useState(0);
    const [approversCount, setApproversCount] = useState(0);
    const [contractInstance, setContractInstance] = useState(null);

    const router = useRouter();
    const { address } = router.query;

    /*
    //voir instance contrat pour la suite
    const [balance, setBalance] = useState(0); // initialize balance to 0
    console.log(address);
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, MainAbi, signer);
    setContractInstance(contract);
    //
    */

    useEffect(() => {
        if (address) {
            //pour eviter address undefined
            console.log("address dans useEffect", address);
            const provider = new ethers.providers.JsonRpcProvider();
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, MainAbi, signer);
            setContractInstance(contract);
        }
    }, [address]);

    useEffect(() => {
        if (contractInstance) {
            const fetchData = async () => {
                const requestsCount = await contractInstance.getRequestsCount();
                setRequestsCount(requestsCount.toString());
                console.log("REQUESTSCOUNT:", requestsCount);

                const approversCount = await contractInstance.approversCount();
                setApproversCount(approversCount.toString());
                console.log("APPROVERSCOUNT:", requestsCount);
            };
            fetchData();
        }
    }, [contractInstance]);

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
            <Button
                primary
                floated="right"
                style={{ marginBottom: 10 }}
                href={`/campaigns/${address}/requests/new`}
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
            <div>Found {requestsCount} requests.</div>
        </Layout>
    );
}
