import React from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../../utils/constants";
import Faucet from "./faucet";

const Login: React.FC = () => {
  const account = useActiveAccount();
  return (
    <div>
      <div
        style={{
          position: "relative",
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
            <Faucet />
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
    </div>
  );
};

export default Login;
