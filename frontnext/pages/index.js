import { useState, useEffect } from "react";
import { FactoryAbi } from "../../backend/abis";
import { Card } from "semantic-ui-react";
import Link from "next/link";

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
        <div className="index-container">
            <button onClick={getListAdresses}>Afficher les campagnes</button>
            <ul>
                {myList.map((address) => (
                    <li className="index-ul" key={address}>
                        <Link href={`/campaign/${address}`}>
                            {address}
                            <br></br>Voir la campagne
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={createCampaign}>Creer une campagne</button>
        </div>
    );
}
