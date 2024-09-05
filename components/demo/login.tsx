import React from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../../utils/constants";
import Counter from "./counter";
import Styles from "./demo.module.scss";

const Login: React.FC = () => {
  const account = useActiveAccount();
  return (
    <div className={Styles.loginComponents}>
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
    </div>
  );
};

export default Login;
