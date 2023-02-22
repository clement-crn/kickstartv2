import { ethers } from "hardhat";

async function main() {
  const hre = require("hardhat");

  //const Factory_contract = await hre.ethers.getContractFactory("Campaign_contract");
  //const factory_contract = await Factory_contract.deploy(0,"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
  
  //deploie Factory
  const Factory_contract = await hre.ethers.getContractFactory("Factory");
  const factory_contract = await Factory_contract.deploy();
  await factory_contract.deployed();
  const factory_contract_address = factory_contract.address;
  console.log(
    "contrat Factory déployé avec l'adresse: ",
    factory_contract_address
  );

  //deploie Campaign_contract
  const Campaign_contract = await hre.ethers.getContractFactory("Campaign_contract");
  const campaign_contract = await Campaign_contract.deploy(0,"0xa0Ee7A142d267C1f36714E4a8F75612F20a79720");
  await campaign_contract.deployed();
  const campaign_contract_address = campaign_contract.address;
  console.log(
    "contrat Campaign_Contract déployé avec l'adresse:",
    campaign_contract_address
  );



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

export default main;
