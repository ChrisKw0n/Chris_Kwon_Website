import { TransactionButton, useReadContract } from "thirdweb/react";
import { CONTRACT } from "../../utils/constants";
import { prepareContractCall } from "thirdweb";

const Counter: React.FC = () => {
  const {
    data: count,
    isLoading: loadingCount,
    refetch,
  } = useReadContract({
    contract: CONTRACT,
    method: "getCount",
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Counter</h1>
      {loadingCount ? <h2>...</h2> : <h2>{count?.toString()}</h2>}
      <TransactionButton
        transaction={() =>
          prepareContractCall({ contract: CONTRACT, method: "decrement" })
        }
        onTransactionConfirmed={() => refetch()}
      >
        -
      </TransactionButton>
      <TransactionButton
        className="demo-button"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "50px",
        }}
        transaction={() =>
          prepareContractCall({ contract: CONTRACT, method: "reset" })
        }
        onTransactionConfirmed={() => refetch()}
      >
        Reset
      </TransactionButton>
      <TransactionButton
        className="demo-button"
        transaction={() =>
          prepareContractCall({ contract: CONTRACT, method: "increment" })
        }
        onTransactionConfirmed={() => refetch()}
      >
        +
      </TransactionButton>
    </div>
  );
};

export default Counter;
