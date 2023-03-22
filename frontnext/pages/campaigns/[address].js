import React, { useState, useEffect } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { MainAbi } from "../../../backend/abis";
import ContributeForm from "@/components/ContributeForm";
import factory_instance from "@/../backend/factory";

const CampaignShow = () => {
    const router = useRouter();
    const { address } = router.query;
    const [minimumContribution, setMinimumContribution] = useState("");
    const [balance, setBalance] = useState("");
    const [requestsCount, setRequestsCount] = useState("");
    const [approversCount, setApproversCount] = useState("");
    const [manager, setManager] = useState("");
    const [contractInstance, setContractInstance] = useState(null);
    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        if (address && contractInstance === null) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, MainAbi, signer);
            setContractInstance(contract);

            window.ethereum
                .request({ method: "eth_accounts" })
                .then((accounts) => {
                    setCurrentAccount(accounts[0]);
                });
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
                setBalance(ethers.utils.formatEther(balance));
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
                description: "Manager du contrat",
                style: { overflowWrap: "break-word" },
            },
            {
                header: minimumContribution,
                meta: "Contribution minimum (wei)",
                description: "Contribution minimum (wei) pour participer",
            },
            {
                header: requestsCount,
                meta: "Nombre de requetes",
                description:
                    "Requete = lorsque le manager veut retirer des fonds de la campagne. Les donnateurs peuvent donc voter pour accepter ou non",
            },
            {
                header: approversCount,
                meta: "Numbre de donateurs (approvers)",
                description: "Nombre de donateurs",
            },
            {
                header: balance,
                meta: "Campaign Balance (ether)",
                description: "Solde de la campagne",
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
                        <ContributeForm
                            address={address}
                            contractInstance={contractInstance}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link href={`/campaigns/${address}/requestHome`}>
                            <Button primary>Voir les requests</Button>
                        </Link>
                        <Link href={`/campaigns/${address}/newreq`}>
                            <Button primary>Retirer des fonds du projet</Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    );
};

export default CampaignShow;
