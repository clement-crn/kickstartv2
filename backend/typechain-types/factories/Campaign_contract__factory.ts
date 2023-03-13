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
    name: "getRequestsCount",
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
    name: "getSummary",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
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
      {
        internalType: "bool",
        name: "complete",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "approvalCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011513803806200115183398181016040528101906200003791906200012c565b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600381905550505062000173565b600080fd5b6000819050919050565b620000a1816200008c565b8114620000ad57600080fd5b50565b600081519050620000c18162000096565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f482620000c7565b9050919050565b6200010681620000e7565b81146200011257600080fd5b50565b6000815190506200012681620000fb565b92915050565b6000806040838503121562000146576200014562000087565b5b60006200015685828601620000b0565b9250506020620001698582860162000115565b9150509250929050565b610fce80620001836000396000f3fe60806040526004361061009c5760003560e01c806381d12c581161006457806381d12c581461018c57806382fde093146101cd5780638a9cfd55146101f8578063937e09b114610221578063d7bb99ba1461024c578063d7d1bbdb146102565761009c565b806303441006146100a15780630a144391146100ca5780633410452a146101075780634051ddac14610132578063481c6a7514610161575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c391906107fd565b61027f565b005b3480156100d657600080fd5b506100f160048036038101906100ec9190610888565b610360565b6040516100fe91906108d0565b60405180910390f35b34801561011357600080fd5b5061011c610380565b60405161012991906108fa565b60405180910390f35b34801561013e57600080fd5b50610147610389565b604051610158959493929190610924565b60405180910390f35b34801561016d57600080fd5b506101766103cf565b6040516101839190610977565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae91906107fd565b6103f5565b6040516101c4959493929190610a4c565b60405180910390f35b3480156101d957600080fd5b506101e26104e0565b6040516101ef91906108fa565b60405180910390f35b34801561020457600080fd5b5061021f600480360381019061021a9190610b37565b6104e6565b005b34801561022d57600080fd5b506102366105f9565b60405161024391906108fa565b60405180910390f35b6102546105ff565b005b34801561026257600080fd5b5061027d600480360381019061027891906107fd565b61067f565b005b600060016000838152602001908152602001600020905060026004546102a59190610c09565b8160030154116102b457600080fd5b8060020160149054906101000a900460ff16156102d057600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f1935050505015801561033e573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60056020528060005260406000206000915054906101000a900460ff1681565b60008054905090565b600080600080600060035447600054600454600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160205280600052604060002060009150905080600001805461041890610c69565b80601f016020809104026020016040519081016040528092919081815260200182805461044490610c69565b80156104915780601f1061046657610100808354040283529160200191610491565b820191906000526020600020905b81548152906001019060200180831161047457829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60045481565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661053c57600080fd5b6000600160008054815260200190815260200160002090508484826000019182610567929190610e80565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff021916908315150217905550600081600301819055506000808154809291906105ed90610f50565b91905055505050505050565b60035481565b600354341161060d57600080fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506004600081548092919061067890610f50565b9190505550565b6000600160008381526020019081526020016000209050600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166106ec57600080fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561074557600080fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060030160008154809291906107b490610f50565b91905055505050565b600080fd5b600080fd5b6000819050919050565b6107da816107c7565b81146107e557600080fd5b50565b6000813590506107f7816107d1565b92915050565b600060208284031215610813576108126107bd565b5b6000610821848285016107e8565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108558261082a565b9050919050565b6108658161084a565b811461087057600080fd5b50565b6000813590506108828161085c565b92915050565b60006020828403121561089e5761089d6107bd565b5b60006108ac84828501610873565b91505092915050565b60008115159050919050565b6108ca816108b5565b82525050565b60006020820190506108e560008301846108c1565b92915050565b6108f4816107c7565b82525050565b600060208201905061090f60008301846108eb565b92915050565b61091e8161084a565b82525050565b600060a08201905061093960008301886108eb565b61094660208301876108eb565b61095360408301866108eb565b61096060608301856108eb565b61096d6080830184610915565b9695505050505050565b600060208201905061098c6000830184610915565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109cc5780820151818401526020810190506109b1565b838111156109db576000848401525b50505050565b6000601f19601f8301169050919050565b60006109fd82610992565b610a07818561099d565b9350610a178185602086016109ae565b610a20816109e1565b840191505092915050565b6000610a368261082a565b9050919050565b610a4681610a2b565b82525050565b600060a0820190508181036000830152610a6681886109f2565b9050610a7560208301876108eb565b610a826040830186610a3d565b610a8f60608301856108c1565b610a9c60808301846108eb565b9695505050505050565b600080fd5b600080fd5b600080fd5b60008083601f840112610acb57610aca610aa6565b5b8235905067ffffffffffffffff811115610ae857610ae7610aab565b5b602083019150836001820283011115610b0457610b03610ab0565b5b9250929050565b610b1481610a2b565b8114610b1f57600080fd5b50565b600081359050610b3181610b0b565b92915050565b60008060008060608587031215610b5157610b506107bd565b5b600085013567ffffffffffffffff811115610b6f57610b6e6107c2565b5b610b7b87828801610ab5565b94509450506020610b8e878288016107e8565b9250506040610b9f87828801610b22565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c14826107c7565b9150610c1f836107c7565b925082610c2f57610c2e610bab565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c8157607f821691505b602082108103610c9457610c93610c3a565b5b50919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d367fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610cf9565b610d408683610cf9565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d7d610d78610d73846107c7565b610d58565b6107c7565b9050919050565b6000819050919050565b610d9783610d62565b610dab610da382610d84565b848454610d06565b825550505050565b600090565b610dc0610db3565b610dcb818484610d8e565b505050565b5b81811015610def57610de4600082610db8565b600181019050610dd1565b5050565b601f821115610e3457610e0581610cd4565b610e0e84610ce9565b81016020851015610e1d578190505b610e31610e2985610ce9565b830182610dd0565b50505b505050565b600082821c905092915050565b6000610e5760001984600802610e39565b1980831691505092915050565b6000610e708383610e46565b9150826002028217905092915050565b610e8a8383610c9a565b67ffffffffffffffff811115610ea357610ea2610ca5565b5b610ead8254610c69565b610eb8828285610df3565b6000601f831160018114610ee75760008415610ed5578287013590505b610edf8582610e64565b865550610f47565b601f198416610ef586610cd4565b60005b82811015610f1d57848901358255600182019150602085019450602081019050610ef8565b86831015610f3a5784890135610f36601f891682610e46565b8355505b6001600288020188555050505b50505050505050565b6000610f5b826107c7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f8d57610f8c610bda565b5b60018201905091905056fea2646970667358221220a42fff2b2a2ac0dea334a7fdf116592d52f979fb07fae0137e9ea4480e58260c64736f6c634300080f0033";

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
