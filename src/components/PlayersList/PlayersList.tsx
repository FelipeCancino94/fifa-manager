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
      localStorage.setItem('playerList', JSON.stringify(data));
      // console.log(data);
    };
    getPlayers();
  }, []);

  return (
    <div className="px-5 mx-auto text-white">
      <h1 className="text-white text-5xl mb-8">Plantilla</h1>
      <div className="players-list grid">
        <div className="grid grid-cols-12 py-2">
          <p className="col-span-4 text-left pl-8">Nombre</p>
          <p className="text-center">Edad</p>
          <p className="col-span-2 text-center">Posicion</p>
          <p className="text-center">
            <span className="material-symbols-outlined">sports_soccer</span>
          </p>
          <p className="text-center">
            <span className="material-symbols-outlined">pan_tool</span>
          </p>
          <p className="text-center">
            <span className="material-symbols-outlined">sports_handball</span>
          </p>
          <p className="col-span-2 text-right pr-8">
            Valor de mercado
          </p>
        </div>
        {
          players.map((player:any) => (
            <div key={ player.id } className="grid grid-cols-12 py-2 player-item">
              <p className="col-span-4 text-2xl leading-none"><span className="text-base pl-8">{ player.name }</span> { player.last_name }</p>
              <p className="text-center">{ player.age }</p>
              <p className="col-span-2 text-center">{ player.position }</p>
              <p className="text-center">{ player.goals }</p>
              <p className="text-center">{ player.assists }</p>
              <p className="text-center">{ player.clean_goals }</p>
              <p className="col-span-2 text-right pr-8">{ toCurrency(player.market_value) }</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PlayersList;