import { useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { MainAbi } from "../../../../backend/abis";
import { Form, Button } from "semantic-ui-react";
import Layout from "@/components/Layout";

export default function CampaignForm() {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [recipient, setRecipient] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const { address } = router.query;

    const handleCreateRequest = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, MainAbi, signer);

            // get the manager address
            const managerAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

            // create a new contract instance with the manager as the caller
            const managerContract = contract.connect(
                signer.connectUnchecked(managerAddress)
            );

            // call the createRequest function as the manager and send payment to the external recipient
            const transaction = await managerContract.createRequest(
                description,
                value,
                recipient,
                { gasLimit: 30000000, value: 0 }
            );

            await transaction.wait();

            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    return (
        <Layout>
            <h3>Nouvelle requete</h3>
            <Form onSubmit={handleCreateRequest}>
                <Form.Field>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value:</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient:</label>
                    <input
                        type="text"
                        value={recipient}
                        onChange={(event) => setRecipient(event.target.value)}
                    />
                </Form.Field>
                <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </Button>
                {errorMessage && <p>{errorMessage}</p>}
            </Form>
        </Layout>
    );
}
