/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  Campaign_contract,
  Campaign_contractInterface,
} from "../Campaign_contract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "approveRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "approvers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approversCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "finalizeRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumContribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000eb738038062000eb783398181016040528101906200003791906200012c565b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600381905550505062000173565b600080fd5b6000819050919050565b620000a1816200008c565b8114620000ad57600080fd5b50565b600081519050620000c18162000096565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f482620000c7565b9050919050565b6200010681620000e7565b81146200011257600080fd5b50565b6000815190506200012681620000fb565b92915050565b6000806040838503121562000146576200014562000087565b5b60006200015685828601620000b0565b9250506020620001698582860162000115565b9150509250929050565b610d3480620001836000396000f3fe60806040526004361061007b5760003560e01c80638a9cfd551161004e5780638a9cfd551461013c578063937e09b114610165578063d7bb99ba14610190578063d7d1bbdb1461019a5761007b565b806303441006146100805780630a144391146100a9578063481c6a75146100e657806382fde09314610111575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906106b8565b6101c3565b005b3480156100b557600080fd5b506100d060048036038101906100cb9190610743565b6102fe565b6040516100dd919061078b565b60405180910390f35b3480156100f257600080fd5b506100fb61031e565b60405161010891906107b5565b60405180910390f35b34801561011d57600080fd5b50610126610344565b60405161013391906107df565b60405180910390f35b34801561014857600080fd5b50610163600480360381019061015e919061089d565b61034a565b005b34801561017157600080fd5b5061017a6104b4565b60405161018791906107df565b60405180910390f35b6101986104ba565b005b3480156101a657600080fd5b506101c160048036038101906101bc91906106b8565b61053a565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461021d57600080fd5b60006001600083815260200190815260200160002090506002600454610243919061096f565b81600301541161025257600080fd5b8060020160149054906101000a900460ff161561026e57600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f193505050501580156102dc573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60056020528060005260406000206000915054906101000a900460ff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a457600080fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103fa57600080fd5b600060016000806000815480929190610412906109a0565b91905055815260200190815260200160002090508484826000019182610439929190610c2e565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff021916908315150217905550600081600301819055505050505050565b60035481565b60035434116104c857600080fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060046000815480929190610533906109a0565b9190505550565b6000600160008381526020019081526020016000209050600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105a757600080fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561060057600080fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600301600081548092919061066f906109a0565b91905055505050565b600080fd5b600080fd5b6000819050919050565b61069581610682565b81146106a057600080fd5b50565b6000813590506106b28161068c565b92915050565b6000602082840312156106ce576106cd610678565b5b60006106dc848285016106a3565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610710826106e5565b9050919050565b61072081610705565b811461072b57600080fd5b50565b60008135905061073d81610717565b92915050565b60006020828403121561075957610758610678565b5b60006107678482850161072e565b91505092915050565b60008115159050919050565b61078581610770565b82525050565b60006020820190506107a0600083018461077c565b92915050565b6107af81610705565b82525050565b60006020820190506107ca60008301846107a6565b92915050565b6107d981610682565b82525050565b60006020820190506107f460008301846107d0565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261081f5761081e6107fa565b5b8235905067ffffffffffffffff81111561083c5761083b6107ff565b5b60208301915083600182028301111561085857610857610804565b5b9250929050565b600061086a826106e5565b9050919050565b61087a8161085f565b811461088557600080fd5b50565b60008135905061089781610871565b92915050565b600080600080606085870312156108b7576108b6610678565b5b600085013567ffffffffffffffff8111156108d5576108d461067d565b5b6108e187828801610809565b945094505060206108f4878288016106a3565b925050604061090587828801610888565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061097a82610682565b915061098583610682565b92508261099557610994610911565b5b828204905092915050565b60006109ab82610682565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036109dd576109dc610940565b5b600182019050919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a6957607f821691505b602082108103610a7c57610a7b610a22565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ae47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610aa7565b610aee8683610aa7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610b2b610b26610b2184610682565b610b06565b610682565b9050919050565b6000819050919050565b610b4583610b10565b610b59610b5182610b32565b848454610ab4565b825550505050565b600090565b610b6e610b61565b610b79818484610b3c565b505050565b5b81811015610b9d57610b92600082610b66565b600181019050610b7f565b5050565b601f821115610be257610bb381610a82565b610bbc84610a97565b81016020851015610bcb578190505b610bdf610bd785610a97565b830182610b7e565b50505b505050565b600082821c905092915050565b6000610c0560001984600802610be7565b1980831691505092915050565b6000610c1e8383610bf4565b9150826002028217905092915050565b610c3883836109e8565b67ffffffffffffffff811115610c5157610c506109f3565b5b610c5b8254610a51565b610c66828285610ba1565b6000601f831160018114610c955760008415610c83578287013590505b610c8d8582610c12565b865550610cf5565b601f198416610ca386610a82565b60005b82811015610ccb57848901358255600182019150602085019450602081019050610ca6565b86831015610ce85784890135610ce4601f891682610bf4565b8355505b6001600288020188555050505b5050505050505056fea264697066735822122091c1ba2b540a44cd23f2e67d620fb83513d9dbd26a319924cfee98434589de7864736f6c634300080f0033";

type Campaign_contractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Campaign_contractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Campaign_contract__factory extends ContractFactory {
  constructor(...args: Campaign_contractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minimum: PromiseOrValue<BigNumberish>,
    creator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Campaign_contract> {
    return super.deploy(
      minimum,
      creator,
      overrides || {}
    ) as Promise<Campaign_contract>;
  }
  override getDeployTransaction(
    minimum: PromiseOrValue<BigNumberish>,
    creator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minimum, creator, overrides || {});
  }
  override attach(address: string): Campaign_contract {
    return super.attach(address) as Campaign_contract;
  }
  override connect(signer: Signer): Campaign_contract__factory {
    return super.connect(signer) as Campaign_contract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Campaign_contractInterface {
    return new utils.Interface(_abi) as Campaign_contractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Campaign_contract {
    return new Contract(address, _abi, signerOrProvider) as Campaign_contract;
  }
}
