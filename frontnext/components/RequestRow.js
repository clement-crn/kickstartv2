/*import { Table, Button } from "semantic-ui-react";
import { MainAbi } from "@/../backend/abis";
import { useRouter } from "next/router";

export default function RequestRow() {
    const router = useRouter();
    const { address } = router.query;

    const onApprove = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, MainAbi, signer);
        const approve = await contract.approveRequest(id)
    };

    return (
        <Layout>
            <Table.Row
                disabled={request.complete}
                positive={readyToFinalize && !request.complete}
            >
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{request.description}</Table.Cell>
                <Table.Cell>
                    {ethers.utils.formatEther(request.value)}
                </Table.Cell>
                <Table.Cell>{request.recipient}</Table.Cell>
                <Table.Cell>
                    {request.approvalCount}/{approversCount}
                </Table.Cell>
                <Table.Cell>
                    {request.complete ? null : (
                        <Button
                            color="green"
                            basic
                            loading={loading}
                            onClick={onApprove}
                        >
                            Approve
                        </Button>
                    )}
                </Table.Cell>
                <Table.Cell>
                    {request.complete ? null : (
                        <Button
                            color="teal"
                            basic
                            loading={loading}
                            onClick={onFinalize}
                        >
                            Finalize
                        </Button>
                    )}
                </Table.Cell>
            </Table.Row>
        </Layout>
    );
}

*/
