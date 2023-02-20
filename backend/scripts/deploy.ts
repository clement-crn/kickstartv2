import { ethers } from "hardhat";

async function main() {
  const hre = require("hardhat");
  const Factory_contract = await hre.ethers.getContractFactory("Factory");
  const factory_contract = await Factory_contract.deploy();

  await factory_contract.deployed();

  //a verifier

  const factory_contract_address = factory_contract.address;

  console.log(
    "contrat factory déployé avec l'adresse:",
    factory_contract_address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

export default main;
