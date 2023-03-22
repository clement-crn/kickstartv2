import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import instance_factory from "../../../backend/factory";

import { ethers } from "ethers";
import { useRouter } from "next/router";
import { FactoryAbi } from "@/../backend/abis";
import factory_instance from "../../../backend/factory";

const CampaignNew = () => {
    const router = useRouter();
    const [minimumContribution, setMinimumContribution] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {
            const tx = await factory_instance.createCampaign(
                minimumContribution
            );

            await tx.wait();

            router.push("/");
        } catch (err) {
            setErrorMessage(err.message);
        }

        setLoading(false);
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
                    Create!
                </Button>
            </Form>
        </Layout>
    );
};

export default CampaignNew;
