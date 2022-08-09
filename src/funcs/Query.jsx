import React from "react";
import { Moralis } from "moralis";
import { ABI, CONTRACT_ADX } from "../utils/contractData";
import { useWeb3Contract } from "react-moralis";

export default function Query() {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: ABI,
      contractAddress: CONTRACT_ADX,
      functionName: "getMyNum",
    });

  return (
    <>
      {error && <p>{error.toString()}</p>}
      <button onClick={runContractFunction} disabled={isFetching}>
        {" "}
        Get number
      </button>
      {data && <pre>{JSON.stringify(data)}</pre> /*Just looks cooler*/}
    </>
  );
}
