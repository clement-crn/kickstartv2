import { Button, Table } from "semantic-ui-react";
import { ethers } from "ethers";
import { MainAbi } from "@/../backend/abis";

const RequestRow = ({ id, request, address, approversCount }) => {
    const onApprove = async () => {
        const contract = new ethers.Contract(
            address,
            MainAbi,
            ethers.providers.JsonRpcProvider()
        );
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const tx = await contract
            .approveRequest(id)
            .connect(ethers.provider.getSigner());
        await tx.wait();
    };

    const onFinalize = async () => {
        const contract = new ethers.Contract(
            address,
            MainAbi,
            ethers.providers.JsonRpcProvider()
        );
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const tx = await contract
            .finalizeRequest(id)
            .connect(ethers.provider.getSigner());
        await tx.wait();
    };

    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
        <Row
            disabled={request.complete}
            positive={readyToFinalize && !request.complete}
        >
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{ethers.utils.formatEther(request.value)}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>
                {request.approvalCount}/{approversCount}
            </Cell>
            <Cell>
                {request.complete ? null : (
                    <Button color="green" basic onClick={onApprove}>
                        Approve
                    </Button>
                )}
            </Cell>
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
