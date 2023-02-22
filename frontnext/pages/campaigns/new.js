import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { FactoryAbi } from "../../../backend/abis";
import { ethers } from "ethers";

const DEPLOYED_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const new_contract = new ethers.Contract(
    DEPLOYED_CONTRACT_ADDRESS,
    FactoryAbi,
    signer
);

const CampaignNew = () => {
    const [minimumContribution, setMinimumContribution] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage("");
        setLoading(true);

        try {
            // METAMASK const provider = new ethers.providers.Web3Provider(window.ethereum);
            const provider = new ethers.providers.JsonRpcProvider();
            const signer = provider.getSigner();
            const new_contract = new ethers.Contract(
                DEPLOYED_CONTRACT_ADDRESS,
                FactoryAbi,
                signer
            );

            await new_contract.createCampaign(minimumContribution);
            setMinimumContribution("");
            router.push("/");
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <h3>Create a Campaign</h3>

            <Form onSubmit={onSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input
                        label="wei"
                        labelPosition="right"
                        value={minimumContribution}
                        onChange={(event) =>
                            setMinimumContribution(event.target.value)
                        }
                    />
                </Form.Field>

                <Message error header="Oops!" content={errorMessage} />
                <Button loading={loading} primary>
                    Créer
                </Button>
            </Form>
        </Layout>
    );
};

export default CampaignNew;
