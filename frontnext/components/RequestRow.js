import { Button, Table } from "semantic-ui-react";
import { ethers } from "ethers";
import { MainAbi } from "@/../backend/abis";
import { useRouter } from "next/router";

const RequestRow = ({
    id,
    request,
    address,
    approversCount,
    campaign,
    children,
}) => {
    const router = useRouter();
    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    const onFinalize = async () => {
        try {
            //onst provider = new ethers.providers.JsonRpcProvider();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // MetaMask requires requesting permission to connect users accounts
            await provider.send("eth_requestAccounts", []);

            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, MainAbi, signer);
            await contract.finalizeRequest(id, {
                gasLimit: 500000,
            });
            router.push(`/campaigns/${address}/requestHome`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Row
            disabled={request.complete}
            positive={readyToFinalize && !request.complete}
        >
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{request.value}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>
                {request.approvalCount}/{approversCount}
            </Cell>
            {children}
            <Cell>
                {request.complete ? null : (
                    <Button color="teal" onClick={onFinalize}>
                        Finalize
                    </Button>
                )}
            </Cell>
        </Row>
    );
};

export default RequestRow;
