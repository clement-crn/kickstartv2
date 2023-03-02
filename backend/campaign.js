import { ethers } from "ethers";
import CampaignJson from "../backend/artifacts/contracts/Lock.sol/Campaign_contract.json";

const Campaign = (address) => {
    const provider = new ethers.providers.JsonRpcProvider(
        "http://localhost:8545"
    );
    const signer = provider.getSigner();
    return new ethers.Contract(address, CampaignJson.abi, signer);
};

export default Campaign;
