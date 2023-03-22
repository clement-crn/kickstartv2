import { useState, useEffect } from "react";
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
    const [managerAddress, setManagerAddress] = useState("");
    const [provider, setProvider] = useState(null);
    const [contractInstance, setContractInstance] = useState(null);
    const router = useRouter();
    const { address } = router.query;

    useEffect(() => {
        if (!provider && window.ethereum) {
            setProvider(new ethers.providers.Web3Provider(window.ethereum));
        }
    }, [provider]);

    useEffect(() => {
        const fetchAddresses = async () => {
            if (provider) {
                const accounts = await provider.listAccounts();
                setManagerAddress(accounts[0]);
            }
        };
        fetchAddresses();
    }, [provider]);

    useEffect(() => {
        if (address && provider && contractInstance === null) {
            const contract = new ethers.Contract(address, MainAbi, provider);
            setContractInstance(contract);
        }
    }, [address, provider, contractInstance]);

    async function handleCreateRequest(event) {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            if (!window.ethereum || !window.ethereum.selectedAddress) {
                throw new Error("Please connect your wallet");
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
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

            setLoading(false);
            router.push("/");
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

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
                {errorMessage && (
                    <div
                        className="ui error message"
                        style={{ marginBottom: "10px" }}
                    >
                        <div className="header">Erreur</div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <Button
                    primary
                    type="submit"
                    loading={loading}
                    disabled={loading}
                >
                    Créer une demande
                </Button>
                <p>
                    Exemple de recipient :
                    0xdD2FD4581271e230360230F9337D5c0430Bf44C0
                </p>
            </Form>
        </Layout>
    );
}

export default CampaignForm;
