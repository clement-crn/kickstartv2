import { Button, Table } from "semantic-ui-react";
import { ethers } from "ethers";
import { MainAbi } from "@/../backend/abis";

const RequestRow = ({
    id,
    request,
    address,
    approversCount,
    campaign,
    children,
}) => {
    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    const onApprove = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, MainAbi, signer);
        await contract.approveRequest(id);
    };

    const onFinalize = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, MainAbi, signer);
        await contract.finalizeRequest(id);
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
                    <Button color="teal" basic onClick={onFinalize}>
                        Finalize
                    </Button>
                )}
            </Cell>
        </Row>
    );
};

export default RequestRow;
