import { useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { MainAbi } from "../../../../backend/abis";
import { Form, Button } from "semantic-ui-react";
import Layout from "@/components/Layout";

function CampaignForm() {
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

            const gasLimit = 1000000;
            const transaction = await contract.createRequest(
                description,
                value,
                recipient,
                { gasLimit }
            );

            const receipt = await transaction.wait();
            console.log("Transaction receipt: ", receipt);

            setLoading(false);
            router.push("/");
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    console.log("address:", address);
    console.log("descripion:", address);
    console.log("value:", value);
    console.log("recipient:", recipient);

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
export default CampaignForm;
