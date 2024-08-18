import React from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../utils/constants";
import Counter from "./counter";

const Login: React.FC = () => {
  const account = useActiveAccount();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "600px",
      }}
    >
      {account ? (
        <div style={{ textAlign: "center" }}>
          <ConnectButton
            client={client}
            chain={chain}
            connectModal={{ showThirdwebBranding: false, size: "compact" }}
            theme={"light"}
          />
          <Counter />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <ConnectButton
            client={client}
            chain={chain}
            connectModal={{ showThirdwebBranding: false, size: "compact" }}
            theme={"light"}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
