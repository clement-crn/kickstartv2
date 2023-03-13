import { ethers } from "ethers";
import { FactoryAbi } from "../backend/abis/index";

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();

const factory_instance = new ethers.Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3", //addresse du deploiement
    FactoryAbi,
    signer
);

export default factory_instance;
