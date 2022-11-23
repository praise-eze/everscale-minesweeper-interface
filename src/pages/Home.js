import React from "react";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { useNavigate } from "react-router-dom";
import { MINESWEEPER_ADDRESS, MINESWEEPER_ABI, SWEEPER_CODE } from "../Extras";

export const Home = () => {
  const navigate = useNavigate();
  const ever = new ProviderRpcClient();
  async function CreateBoard() {
    const sweeper_address = new Address(MINESWEEPER_ADDRESS);
    const minesweeperinstance = new ever.Contract(
      MINESWEEPER_ABI,
      sweeper_address
    );
    console.log("called1");
    const providerState = await ever.getProviderState();
    const publicKey = providerState.permissions.accountInteraction.publicKey;
    const permissions = providerState.permissions;
    const account = permissions.accountInteraction;
    try {
      console.log("called2");

      const response = await minesweeperinstance.methods
        .createBoard({
          sweepercode: SWEEPER_CODE,
        })
        .send({
          from: account.address.toString(),
          amount: "1",
          bounce: true,
        });
      /* .sendExternal({
          publicKey,
          withoutSignature: true,
        });*/
      console.log(response);
      console.log("https://everscan.io/transactions/" + response.id.hash);
      const trx = response.transaction;
      console.log(trx);
      console.log("called3");
      console.log(account.address.toString());
      /* const latestboard = await minesweeperinstance.methods
        .lastestBoardWithoutMsg({ _addr: account.address.toString() })
        .call(); */

      const latestboard = await minesweeperinstance.methods
        .lastestBoardWithMsg({})
        .call();
      console.log(latestboard);

      const gameAddress = 1;
      navigate(`/mineboard/${gameAddress}`);
      console.log("called4");
    } catch (e) {
      console.log(e);
      console.log("callee");
    }
  }

  return (
    <div>
      <button onClick={() => CreateBoard()}>Create Board</button>
    </div>
  );
};
