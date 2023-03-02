import { useState } from "react";
import { ethers } from "ethers";
import Campaign_contract from "../../../../backend/artifacts/contracts/Lock.sol/Campaign_contract";
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
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(address, MainAbi, signer);

            const transaction = await contract.createRequest(
                description,
                value,
                recipient,
                { gasLimit: 30000000 }
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
