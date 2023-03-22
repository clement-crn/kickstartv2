import { ethers } from "ethers";
import { FactoryAbi } from "../backend/abis/index";

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();

const factory_instance = new ethers.Contract(
    "0x9090946a39F6a042c5578560DC5F1678Ee8a4d44", //addresse du deploiement
    FactoryAbi,
    signer
);

export default factory_instance;
