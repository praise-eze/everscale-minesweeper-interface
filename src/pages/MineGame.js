import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { MINESWEEPERGAME_ABI } from "../Extras";
import "./MineGame.css";

export const MineGame = () => {
  const { game_address } = useParams();
  const ever = new ProviderRpcClient();
  const [Iswon, setIsWon] = useState(true);
  const [Islost, setIsLost] = useState(true);
  async function Move(value) {
    console.log("clicked " + value);
    if (game_address.length < 42) return;
    const gameaddress = new Address(game_address);
    const MinesContract = new ever.Contract(MINESWEEPERGAME_ABI, gameaddress);

    const providerState = await ever.getProviderState();
    const publicKey = providerState.permissions.accountInteraction.publicKey;
    const permissions = providerState.permissions;
    const account = permissions.accountInteraction;
    try {
      const response = await MinesContract.methods.move({ _id: value }).send({
        from: account.address.toString(),
        amount: "1",
        bounce: true,
      });
      /*.sendExternal({
          publicKey,
          withoutSignature: true,
        }); */
      console.log(response);
      const trx = response.transaction;
      console.log(trx);
    } catch (e) {
      console.log(e);
    }
  }

  async function checkIsMoved(num) {
    if (game_address.length < 42) return false;
    const gameaddress = new Address(game_address);
    const MinesContract = new ever.Contract(MINESWEEPERGAME_ABI, gameaddress);
    try {
      const movedArea = await MinesContract.methods
        .checkAreaMoved({ _num: num })
        .call();
      console.log(movedArea);
      return movedArea;
    } catch (e) {
      console.log(e);
    }
  }
  async function check() {
    const lol = await isWon();

    const nah = await isLost();
    setIsLost(nah);
    console.log(lol, nah);
  }
  useEffect(() => {
    check();
    console.log(Islost);
  });
  async function isWon() {
    if (game_address.length < 42) return false;
    const gameaddress = new Address(game_address);
    const MinesContract = new ever.Contract(MINESWEEPERGAME_ABI, gameaddress);
    try {
      const iswon = await MinesContract.methods.checkIsWon({}).call();
      console.log(iswon);
      setIsWon(iswon);
      return iswon;
    } catch (e) {
      console.log(e);
    }
  }
  async function isLost() {
    if (game_address.length < 42) return false;
    const gameaddress = new Address(game_address);
    const MinesContract = new ever.Contract(MINESWEEPERGAME_ABI, gameaddress);
    try {
      const islost = await MinesContract.methods.checkIsLost({}).call();
      console.log(islost);
      setIsLost(islost);
      return islost;
    } catch (e) {
      console.log(e);
    }
  }

  function lol(_num) {
    if (_num === 1 || _num === 2 || _num === 6) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div>
      MineGame {game_address}
      <div>
        Stats
        <div>
          <div>
            Is Won : <span>{Iswon}</span>
          </div>
          <div>
            Is Lost : <span>{Islost}</span>
          </div>
        </div>
      </div>
      <div className="grid-area">
        <div
          style={{ width: "35em", height: "30em" }}
          className="grid-container"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (value, index) => {
              return (
                <div
                  onClick={() => Move(index + 1)}
                  style={{
                    backgroundColor: lol(index + 1) ? "green" : "white",
                  }}
                  key={index}
                  className="grid-item"
                ></div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
