import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../connections/index.js";
import { getDocs, collection } from 'firebase/firestore';
import './PlayersList.css';

function PlayersList() {
  const [players, setPlayers] = useState([]);

  const playersRef = collection(db, 'players');

  function toCurrency(value:number):string {
    return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  useEffect(() => {
    const getPlayers = async () => {
      const notCleanData:any = await getDocs(playersRef);
      const data:any = notCleanData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPlayers(data);
      console.log(data);
    };
    getPlayers();
  }, []);

  return (
    <div className="px-2 mx-auto text-white">
      <h1 className="text-3xl">Plantilla</h1>
      <div className="players-list grid">
        {players.map((player:any) => (
          <div key={player.id} className="justify-between p-2 my-2 rounded-md border shadow shadow-white drop-shadow-2xl">
            <div>
              <h2 className="text-l"><span>{player.name}</span><span className="text-2xl"> {player.last_name}</span></h2>
              <p className="text-sm mb-2">{player.position}</p>
            </div>
            <div className="flex flex-row justify-around border-y mb-2">
              <p>G: {player.goals}</p>
              <p>A: {player.assists}</p>
              <p>PI: {player.clean_goals}</p>
            </div>
            <div>
              <p className="text-3xl text-center">{ toCurrency(player.market_value) }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;