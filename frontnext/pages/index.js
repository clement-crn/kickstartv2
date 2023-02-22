import { useState, useEffect } from "react";
import { FactoryAbi } from "../../backend/abis";

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
        const provider = new ethers.providers.JsonRpcProvider();
        const signer = provider.getSigner();
        const new_contract = new ethers.Contract(
            DEPLOYED_CONTRACT_ADDRESS,
            FactoryAbi,
            signer
        );
        await new_contract.createCampaign(0);
        await getListAdresses();
    };

    return (
        <Layout>
            <div className="index-container">
                <div className="index-left">
                    <button onClick={getListAdresses}>
                        Afficher les campagnes
                    </button>
                    <h3>Campagnes ouvertes:</h3>
                    <ul>
                        {myList.map((address) => (
                            <li className="index-ul" key={address}>
                                <Link
                                    as={`/campaigns/${address}`}
                                    href={{
                                        pathname: `/campaigns/show/`,
                                        query: { address },
                                    }}
                                >
                                    Voir la campagne<br></br>
                                    {address}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="index-right">
                    <button onClick={createCampaign}>Créer une campagne</button>
                </div>
            </div>
        </Layout>
    );
}
