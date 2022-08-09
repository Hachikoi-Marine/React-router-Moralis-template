import { useMoralis, useChain } from "react-moralis";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ChangeNum from "../funcs/ChangeNum";
import Query from "../funcs/Query";

const Home = () => {
  const pageLoaded = useRef(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();

  const connectAndCheck = async () => {
    await enableWeb3();
    if (chainId !== "0x5") {
      //change to goerli
      console.log("Wrong network, sending request to Goerli");
      switchNetwork("0x5");
    }
  };

  useEffect(() => {
    if (!pageLoaded) {
      pageLoaded.current = true;
      if (typeof window.ethereum !== "undefined") {
        setHasMetamask(true);
      } else {
        // Do something about it, send to metamask page or something
      }
    }
  });

  return (
    <div className="home">
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/profile">
          <div>Profile</div>
        </Link>

        <Link to="/settings">
          <div>Settings</div>
        </Link>
      </nav>
      <h1>Welcome to my dapp</h1>
      {/* --- */}
      <div className="container">
        {isWeb3Enabled ? (
          "Connected!"
        ) : (
          <button onClick={connectAndCheck}>Connect wallet</button>
        )}
        <ChangeNum />
        <Query />
      </div>
    </div>
  );
};

export default Home;
