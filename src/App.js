import "./App.css";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MineGame } from "./pages/MineGame";
import { MINESWEEPER_ABI, MINESWEEPER_ADDRESS, shortenText } from "./Extras";
import { Home } from "./pages/Home";

function App() {
  const [account, setAccount] = useState();
  const [isConnected, setIsConnected] = useState();
  const [address, setAddress] = useState();
  const ever = new ProviderRpcClient();
  async function loadEver() {
    const providerState = await ever.getProviderState();
    const permissions = providerState.permissions;
    const account = permissions.accountInteraction;
    setAccount(account);
    console.log(account);
  }
  useEffect(() => {
    loadEver();
  }, [isConnected]);

  async function requestPermissions() {
    await ever.requestPermissions({
      permissions: ["basic", "accountInteraction"],
    });
    setIsConnected(true);
  }

  async function disconnectAction() {
    console.log("disconnectAction");
    setIsConnected(false);
    await ever.disconnect();
  }

  async function connect() {
    await ever.requestPermissions({
      permissions: ["basic", "accountInteraction"],
    });
  }
  const createboard = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 style={{ margin: "0.4em 0em 0em 0em" }}>Everscale MineSweeper</h1>
        </div>
        <div
          style={{
            margin: "0.5em 0em 1em 0em",
            display: "flex",
            alignItems: "center",
            gap: "2em",
          }}
        >
          <div>
            <button onClick={requestPermissions}>Connect Wallet</button>
            <button onClick={disconnectAction}>Disconnect</button>
          </div>
          <div>
            <h4 style={{ margin: "0em" }}>
              address :{" "}
              <span>
                {account && shortenText(account.address.toString(), 7, 5)}
              </span>
            </h4>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/mineboard/:game_address" element={<MineGame />} />
      </Routes>
    </div>
  );
}

export default App;
