import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { ethers } from "ethers";
import { MainAbi } from "../../backend/abis";

const ContributeForm = ({ address }) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    console.log("ContributeForm address:", address);

    const onSubmit = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.JsonRpcProvider();

        const signer = provider.getSigner();
        const campaign = new ethers.Contract(address, MainAbi, signer);

        setLoading(true);
        setErrorMessage("");

        try {
            const accounts = await provider.listAccounts();
            await campaign.contribute({
                value: ethers.utils.parseEther(value),
            });
            window.location.reload();
        } catch (err) {
            setErrorMessage(err.message);
        }

        setLoading(false);
        setValue("");
    };

    console.log("ContributeForm address:", address);

    return (
        <Form onSubmit={onSubmit} error={!!errorMessage}>
            <Form.Field>
                <label>Montant à déposer</label>
                <Input
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    label="ether"
                    labelPosition="right"
                />
            </Form.Field>

            <Message error header="Oops!" content={errorMessage} />
            <Button primary loading={loading}>
                Contribuer!
            </Button>
        </Form>
    );
};

export default ContributeForm;
