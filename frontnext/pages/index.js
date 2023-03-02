import { useState, useEffect } from "react";
import { FactoryAbi } from "../../backend/abis";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function App() {
    const [myList, setMyList] = useState([]);

    const getListAdresses = async () => {
        const { ethers } = require("ethers");
        const DEPLOYED_CONTRACT_ADDRESS =
            "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();

        const new_contract = new ethers.Contract(
            DEPLOYED_CONTRACT_ADDRESS,
            FactoryAbi,
            signer
        );
        const list_campaigns = await new_contract.getCampaigns();
        console.log(list_campaigns);
        setMyList(list_campaigns);
    };

    const createCampaign = async () => {
        const { ethers } = require("ethers");
        const DEPLOYED_CONTRACT_ADDRESS =
            "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        //const provider = new ethers.providers.JsonRpcProvider();
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const new_contract = new ethers.Contract(
            DEPLOYED_CONTRACT_ADDRESS,
            FactoryAbi,
            signer
        );
        await new_contract.createCampaign(0);
        await getListAdresses();
    };

    useEffect(() => {
        getListAdresses();
    }, []);

    return (
        <Layout>
            <div className="index-container">
                <div className="index-left">
                    <h3>Campagnes ouvertes:</h3>
                    <Card.Group>
                        {myList.map((address) => (
                            <Card key={address}>
                                <Card.Content>
                                    <Card.Header>
                                        <Link
                                            as={`/campaigns/${address}`}
                                            href={{
                                                pathname: `/campaigns/show/`,
                                                query: { address },
                                            }}
                                        >
                                            Voir la campagne
                                        </Link>
                                    </Card.Header>
                                    <Card.Description
                                        style={{
                                            overflowWrap: "break-word",
                                            wordWrap: "break-word",
                                            color: "black",
                                            fontSize: "1.2em",
                                        }}
                                    >
                                        {address}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                </div>
                <div className="index-right">
                    {/*<button onClick={createCampaign}>Créer une campagne</button> */}
                </div>
            </div>
        </Layout>
    );
}
