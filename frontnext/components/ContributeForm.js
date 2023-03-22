import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { ethers } from "ethers";
import { MainAbi } from "../../backend/abis";

const ContributeForm = ({ address, contractInstance }) => {
    const [contribution, setContribution] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const value = ethers.utils.parseEther(contribution);
        try {
            const transaction = await contractInstance.contribute({
                value,
                from: window.ethereum.selectedAddress,
            });
            const receipt = await transaction.wait();
            console.log("Transaction receipt: ", receipt);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <div>
            <h4>Faire une contribution</h4>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>Montant en ether:</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={contribution}
                        onChange={(event) =>
                            setContribution(event.target.value)
                        }
                    />
                </Form.Field>
                <Button loading={loading} primary>
                    Contribuer!
                </Button>
            </Form>
        </div>
    );
};

export default ContributeForm;
