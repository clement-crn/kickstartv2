import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  networks: {
    hardhat: {
      accounts: [
        {
          //0xB87dB4275a427cC9786D0D1aB42bd8a32aE4ae22
          privateKey: '0xa4114d4d173a5fb47437afb2aec390ec58b6c2d9c135f8517f382e6b0cab7654',
          balance: '1000000000000000000000' // 1000 ETH
        },
        {
          //0x18Ce891b8871DC30dA4Af190aeAA76e08A4F0ec1
          privateKey: '0x3ade819f30a8dba2598616981983fc737c82425a2fbf50862ce1c6d1f6cce45f',
          balance: '1000000000000000000000' // 1000 ETH
        },
        {
          //"0xc0219A1849D24529114E3d0b55E4F1D70d71C050"
          privateKey: '0x9bac3cd3913970eb9c4010a146038a7a17b6ec245cc97e20be9cfd747a7b9049',
          balance: '1000000000000000000000' // 1000 ETH
        }
      ]
    }

    
  }
};

export default config;
