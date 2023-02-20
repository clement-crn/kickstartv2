import { FactoryAbi } from "../backend/abis";
const { ethers } = require("ethers");
const DEPLOYED_CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();

const factory = new ethers.Contract(
    DEPLOYED_CONTRACT_ADDRESS,
    FactoryAbi,
    signer
);

export default factory;
