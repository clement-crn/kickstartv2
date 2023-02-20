import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "TR2UvvxpEoPfXmW1lYa-4Stxv1f6DVTN";


const config: HardhatUserConfig = {
    solidity: "0.8.15",
    networks: {
        hardhat: {
        },
    },
};

export default config;
