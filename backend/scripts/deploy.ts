// essayer deploy avec infuria + gorli => ajouter compte sur metamask poru declancher tr







import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract factory with the account:", deployer.address);

    const factory = await ethers.getContractFactory("Factory");
        
    const contract = await factory.deploy();

    console.log("Contract deployed to address:", contract.address);


    console.log("Deploying contract campaign with the account:", deployer.address);

    const campaign = await ethers.getContractFactory("Campaign_contract");
    const campaignContract = await campaign.deploy(0, "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");

    console.log("Contract deployed to address:", campaignContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
