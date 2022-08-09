import { useRef } from "react";
import { ABI, CONTRACT_ADX } from "../utils/contractData";
import { useWeb3Contract } from "react-moralis";

export default function ChangeNum() {
  const updatedData = useRef(false);

  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: ABI,
      contractAddress: CONTRACT_ADX,
      functionName: "setNumber",
      params: {
        _myFavNum: 777,
      },
    });

  const runAndUpdate = async () => {
    updatedData.current = false;
    await runContractFunction();
    updatedData.current = true;
  };

  return (
    <>
      {error && <p>{error.toString()}</p>}
      <button onClick={runAndUpdate} disabled={isFetching}>
        Change to 7
      </button>
    </>
  );
}
