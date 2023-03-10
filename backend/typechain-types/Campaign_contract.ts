/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface Campaign_contractInterface extends utils.Interface {
  functions: {
    "approveRequest(uint256)": FunctionFragment;
    "approvers(address)": FunctionFragment;
    "approversCount()": FunctionFragment;
    "contribute()": FunctionFragment;
    "createRequest(string,uint256,address)": FunctionFragment;
    "finalizeRequest(uint256)": FunctionFragment;
    "getRequestsCount()": FunctionFragment;
    "getSummary()": FunctionFragment;
    "manager()": FunctionFragment;
    "minimumContribution()": FunctionFragment;
    "requests(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveRequest"
      | "approvers"
      | "approversCount"
      | "contribute"
      | "createRequest"
      | "finalizeRequest"
      | "getRequestsCount"
      | "getSummary"
      | "manager"
      | "minimumContribution"
      | "requests"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "approvers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approversCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSummary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minimumContribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approvers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approversCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSummary", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;

  events: {};
}

export interface Campaign_contract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Campaign_contractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approvers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    approversCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createRequest(
      description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRequestsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSummary(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, string]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    minimumContribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        description: string;
        value: BigNumber;
        recipient: string;
        complete: boolean;
        approvalCount: BigNumber;
      }
    >;
  };

  approveRequest(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approvers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  approversCount(overrides?: CallOverrides): Promise<BigNumber>;

  contribute(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createRequest(
    description: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeRequest(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

  getSummary(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, string]>;

  manager(overrides?: CallOverrides): Promise<string>;

  minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

  requests(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      description: string;
      value: BigNumber;
      recipient: string;
      complete: boolean;
      approvalCount: BigNumber;
    }
  >;

  callStatic: {
    approveRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    approvers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approversCount(overrides?: CallOverrides): Promise<BigNumber>;

    contribute(overrides?: CallOverrides): Promise<void>;

    createRequest(
      description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getSummary(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, string]>;

    manager(overrides?: CallOverrides): Promise<string>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        description: string;
        value: BigNumber;
        recipient: string;
        complete: boolean;
        approvalCount: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    approveRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approvers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approversCount(overrides?: CallOverrides): Promise<BigNumber>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createRequest(
      description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    getSummary(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approvers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approversCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createRequest(
      description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeRequest(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRequestsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSummary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumContribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
