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
            "0x9090946a39F6a042c5578560DC5F1678Ee8a4d44";
        //"contrqt déployé à l'addresse ..."
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
