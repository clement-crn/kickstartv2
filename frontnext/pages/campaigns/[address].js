import React, { useState, useEffect } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { MainAbi } from "../../../backend/abis";
import ContributeForm from "@/components/ContributeForm";

const CampaignShow = () => {
    const router = useRouter();
    const { address } = router.query;
    console.log("ContributeForm address dans address:", address);
    const [minimumContribution, setMinimumContribution] = useState("");
    const [balance, setBalance] = useState("");
    const [requestsCount, setRequestsCount] = useState("");
    const [approversCount, setApproversCount] = useState("");
    const [manager, setManager] = useState("");
    const [contractInstance, setContractInstance] = useState(null);

    useEffect(() => {
        console.log("address in useEffect", address);
        if (address && contractInstance === null) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, MainAbi, signer);
            setContractInstance(contract);
        }
    }, [address, contractInstance]);

    useEffect(() => {
        if (contractInstance) {
            const fetchData = async () => {
                const [
                    minimumContribution,
                    balance,
                    requestsCount,
                    approversCount,
                    manager,
                ] = await contractInstance.getSummary();

                setMinimumContribution(minimumContribution.toString());
                setBalance(balance.toString());
                setRequestsCount(requestsCount.toString());
                setApproversCount(approversCount.toString());
                setManager(manager);
            };
            fetchData();
        }
    }, [contractInstance]);

    const renderCards = () => {
        const items = [
            {
                header: manager,
                meta: "Address of Manager",
                description:
                    "The manager created this campaign and can create requests to withdraw money",
                style: { overflowWrap: "break-word" },
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description:
                    "You must contribute at least this much wei to become an approver",
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description:
                    "A request tries to withdraw money from the contract. Requests must be approved by approvers",
            },
            {
                header: approversCount,
                meta: "Number of Approvers",
                description:
                    "Number of people who have already donated to this campaign",
            },
            {
                header: balance,
                meta: "Campaign Balance (ether)",
                description:
                    "The balance is how much money this campaign has left to spend.",
            },
        ];

        return <Card.Group items={items} />;
    };

    return (
        <Layout>
            <h3>Campaign Show</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>{renderCards()}</Grid.Column>

                    <Grid.Column width={6}>
                        <ContributeForm address={address} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Link href={`/campaigns/${address}/requests`}>
                            <Button primary>View Requests</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    );
};

export default CampaignShow;

