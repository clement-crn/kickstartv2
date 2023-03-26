/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Factory,
  FactoryInterface,
} from "../../FactoryContract.sol/Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "contract CampaignContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCampaigns",
    outputs: [
      {
        internalType: "contract CampaignContract[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506119d1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063141961bc14610046578063a3303a7514610076578063a6b0363314610092575b600080fd5b610060600480360381019061005b9190610266565b6100b0565b60405161006d9190610312565b60405180910390f35b610090600480360381019061008b9190610266565b6100ef565b005b61009a610190565b6040516100a791906103eb565b60405180910390f35b600081815481106100c057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081336040516100ff9061021e565b61010a92919061043d565b604051809103906000f080158015610126573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6060600080548060200260200160405190810160405280929190818152602001828054801561021457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101ca575b5050505050905090565b6115358061046783390190565b600080fd5b6000819050919050565b61024381610230565b811461024e57600080fd5b50565b6000813590506102608161023a565b92915050565b60006020828403121561027c5761027b61022b565b5b600061028a84828501610251565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006102d86102d36102ce84610293565b6102b3565b610293565b9050919050565b60006102ea826102bd565b9050919050565b60006102fc826102df565b9050919050565b61030c816102f1565b82525050565b60006020820190506103276000830184610303565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610362816102f1565b82525050565b60006103748383610359565b60208301905092915050565b6000602082019050919050565b60006103988261032d565b6103a28185610338565b93506103ad83610349565b8060005b838110156103de5781516103c58882610368565b97506103d083610380565b9250506001810190506103b1565b5085935050505092915050565b60006020820190508181036000830152610405818461038d565b905092915050565b61041681610230565b82525050565b600061042782610293565b9050919050565b6104378161041c565b82525050565b6000604082019050610452600083018561040d565b61045f602083018461042e565b939250505056fe60806040523480156200001157600080fd5b50604051620015353803806200153583398181016040528101906200003791906200012c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600381905550505062000173565b600080fd5b6000819050919050565b620000a1816200008c565b8114620000ad57600080fd5b50565b600081519050620000c18162000096565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f482620000c7565b9050919050565b6200010681620000e7565b81146200011257600080fd5b50565b6000815190506200012681620000fb565b92915050565b6000806040838503121562000146576200014562000087565b5b60006200015685828601620000b0565b9250506020620001698582860162000115565b9150509250929050565b6113b280620001836000396000f3fe60806040526004361061009c5760003560e01c806381d12c581161006457806381d12c581461018c57806382fde093146101cd5780638a9cfd55146101f8578063937e09b114610221578063d7bb99ba1461024c578063d7d1bbdb146102565761009c565b806303441006146100a15780630a144391146100ca5780633410452a146101075780634051ddac14610132578063481c6a7514610161575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c391906109bf565b61027f565b005b3480156100d657600080fd5b506100f160048036038101906100ec9190610a4a565b6103f0565b6040516100fe9190610a92565b60405180910390f35b34801561011357600080fd5b5061011c610410565b6040516101299190610abc565b60405180910390f35b34801561013e57600080fd5b50610147610419565b604051610158959493929190610ae6565b60405180910390f35b34801561016d57600080fd5b5061017661045f565b6040516101839190610b39565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae91906109bf565b610485565b6040516101c4959493929190610c0e565b60405180910390f35b3480156101d957600080fd5b506101e2610570565b6040516101ef9190610abc565b60405180910390f35b34801561020457600080fd5b5061021f600480360381019061021a9190610cf9565b610576565b005b34801561022d57600080fd5b50610236610719565b6040516102439190610abc565b60405180910390f35b61025461071f565b005b34801561026257600080fd5b5061027d600480360381019061027891906109bf565b6107d5565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030690610ddf565b60405180910390fd5b600060016000838152602001908152602001600020905060026004546103359190610e5d565b81600301541161034457600080fd5b8060020160149054906101000a900460ff161561036057600080fd5b60018160020160146101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f193505050501580156103eb573d6000803e3d6000fd5b505050565b60056020528060005260406000206000915054906101000a900460ff1681565b60008054905090565b600080600080600060035447600054600454600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16945094509450945094509091929394565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090508060000180546104a890610ebd565b80601f01602080910402602001604051908101604052809291908181526020018280546104d490610ebd565b80156105215780601f106104f657610100808354040283529160200191610521565b820191906000526020600020905b81548152906001019060200180831161050457829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90610ddf565b60405180910390fd5b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661065c57600080fd5b60006001600080548152602001908152602001600020905084848260000191826106879291906110d4565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff0219169083151502179055506000816003018190555060008081548092919061070d906111a4565b91905055505050505050565b60035481565b6003543411610763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075a9061125e565b60405180910390fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008154809291906107ce906111a4565b9190505550565b6000600160008381526020019081526020016000209050600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610878576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086f906112f0565b60405180910390fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe9061135c565b60405180910390fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550806003016000815480929190610976906111a4565b91905055505050565b600080fd5b600080fd5b6000819050919050565b61099c81610989565b81146109a757600080fd5b50565b6000813590506109b981610993565b92915050565b6000602082840312156109d5576109d461097f565b5b60006109e3848285016109aa565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a17826109ec565b9050919050565b610a2781610a0c565b8114610a3257600080fd5b50565b600081359050610a4481610a1e565b92915050565b600060208284031215610a6057610a5f61097f565b5b6000610a6e84828501610a35565b91505092915050565b60008115159050919050565b610a8c81610a77565b82525050565b6000602082019050610aa76000830184610a83565b92915050565b610ab681610989565b82525050565b6000602082019050610ad16000830184610aad565b92915050565b610ae081610a0c565b82525050565b600060a082019050610afb6000830188610aad565b610b086020830187610aad565b610b156040830186610aad565b610b226060830185610aad565b610b2f6080830184610ad7565b9695505050505050565b6000602082019050610b4e6000830184610ad7565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b8e578082015181840152602081019050610b73565b83811115610b9d576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bbf82610b54565b610bc98185610b5f565b9350610bd9818560208601610b70565b610be281610ba3565b840191505092915050565b6000610bf8826109ec565b9050919050565b610c0881610bed565b82525050565b600060a0820190508181036000830152610c288188610bb4565b9050610c376020830187610aad565b610c446040830186610bff565b610c516060830185610a83565b610c5e6080830184610aad565b9695505050505050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c8d57610c8c610c68565b5b8235905067ffffffffffffffff811115610caa57610ca9610c6d565b5b602083019150836001820283011115610cc657610cc5610c72565b5b9250929050565b610cd681610bed565b8114610ce157600080fd5b50565b600081359050610cf381610ccd565b92915050565b60008060008060608587031215610d1357610d1261097f565b5b600085013567ffffffffffffffff811115610d3157610d30610984565b5b610d3d87828801610c77565b94509450506020610d50878288016109aa565b9250506040610d6187828801610ce4565b91505092959194509250565b7f417474656e74696f6e2c206c65206d736773656e646572206e2765737420706160008201527f73206c65206d616e616765720000000000000000000000000000000000000000602082015250565b6000610dc9602c83610b5f565b9150610dd482610d6d565b604082019050919050565b60006020820190508181036000830152610df881610dbc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e6882610989565b9150610e7383610989565b925082610e8357610e82610dff565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ed557607f821691505b602082108103610ee857610ee7610e8e565b5b50919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610f8a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610f4d565b610f948683610f4d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610fd1610fcc610fc784610989565b610fac565b610989565b9050919050565b6000819050919050565b610feb83610fb6565b610fff610ff782610fd8565b848454610f5a565b825550505050565b600090565b611014611007565b61101f818484610fe2565b505050565b5b818110156110435761103860008261100c565b600181019050611025565b5050565b601f8211156110885761105981610f28565b61106284610f3d565b81016020851015611071578190505b61108561107d85610f3d565b830182611024565b50505b505050565b600082821c905092915050565b60006110ab6000198460080261108d565b1980831691505092915050565b60006110c4838361109a565b9150826002028217905092915050565b6110de8383610eee565b67ffffffffffffffff8111156110f7576110f6610ef9565b5b6111018254610ebd565b61110c828285611047565b6000601f83116001811461113b5760008415611129578287013590505b61113385826110b8565b86555061119b565b601f19841661114986610f28565b60005b828110156111715784890135825560018201915060208501945060208101905061114c565b8683101561118e578489013561118a601f89168261109a565b8355505b6001600288020188555050505b50505050505050565b60006111af82610989565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036111e1576111e0610e2e565b5b600182019050919050565b7f417474656e74696f6e2c206c6120636f6e747269627574696f6e206e2765737460008201527f2070617320737566666973616e74650000000000000000000000000000000000602082015250565b6000611248602f83610b5f565b9150611253826111ec565b604082019050919050565b600060208201905081810360008301526112778161123b565b9050919050565b7f417474656e74696f6e2c20766f7573206e276574657320706173206c65206d6160008201527f6e61676572000000000000000000000000000000000000000000000000000000602082015250565b60006112da602583610b5f565b91506112e58261127e565b604082019050919050565b60006020820190508181036000830152611309816112cd565b9050919050565b7f566f7573206176657a2070726f6261626c656d656e742064656a6120766f7465600082015250565b6000611346602083610b5f565b915061135182611310565b602082019050919050565b6000602082019050818103600083015261137581611339565b905091905056fea26469706673582212200a2f5dcea9548a228f2005416b5b6c64cf2bb373f657db427d99f9c0a83d1bcf64736f6c634300080f0033a26469706673582212201a784a81a52d6367a5bd70c9d055726f48e66f79973ce36208e098b9f1c979e364736f6c634300080f0033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  override connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}
