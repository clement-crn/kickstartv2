import { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "./ERC20abi.json";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

export default function App() {
    const DEPLOYED_CONTRACT_ADDRESS =
        "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const abi = [
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "campaigns",
            outputs: [
                {
                    internalType: "contract Campaign_contract",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "minimum",
                    type: "uint256",
                },
            ],
            name: "createCampaign",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "getCampaigns",
            outputs: [
                {
                    internalType: "contract Campaign_contract[]",
                    name: "",
                    type: "address[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ];

    const [myList, setMyList] = useState([]);

    const getListAdresses = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const new_contract = new ethers.Contract(
            DEPLOYED_CONTRACT_ADDRESS,
            abi,
            signer
        );
        const signer = provider.getSigner();
        
        const ListAdresses = await new_contract.getCampaigns();

        setMyList({ ListAdresses });
    };

    return <div>{ListAdresses}</div>;
}
