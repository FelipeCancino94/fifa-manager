import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../connections/index.js";
import './AddPlayer.css';


function AddPlayer() {
  function showForm() {
    document.querySelector('.add-player-content')?.classList.toggle('show-form');
  }

  const playerCollectionRef = collection(db, 'players');

  const createPlayer = async () => {
    const data = {
      age: Number(document.getElementById('age')?.value),
      assists: 0,
      clean_goals: 0,
      goals: 0,
      last_name: document.getElementById('last-name')?.value,
      last_team: document.getElementById('last-team')?.value,
      market_value: Number(document.getElementById('market-amount')?.value),
      name: document.getElementById('name')?.value,
      player_on_change: document.getElementById('player-change')?.value,
      position: document.getElementById('position')?.value,
      transfer_amount: Number(document.getElementById('transfer-amount')?.value),
    };
    try {
      await addDoc(playerCollectionRef, data);
      window.location.reload();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="fixed bottom-2 left-2 add-player-content">
      <div className="grid form-add-player gap-2 p-2 opacity-0 invisible">
        <input type="text" placeholder="Nombre" id="name" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="text" placeholder="Apellido" id="last-name" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="text" placeholder="Posicion" id="position" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="number" placeholder="Edad" id="age" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="text" placeholder="Ultimo equipo" id="last-team" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="text" placeholder="Jugador de cambio" id="player-change" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="number" placeholder="Valor de mercado" id="market-amount" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <input type="number" placeholder="Monto de transferencia" id="transfer-amount" className="text-white placeholder-white bg-indigo-950 py-2 px-3 rounded-lg" />
        <button className="add-player bg-white rounded-full py-2" onClick={ () => createPlayer() }>Añadir jugador</button>
      </div>
      <button className="border bg-white rounded-full btn-show-form" onClick={ () => showForm() }><span className="text-3xl">+</span></button>
    </div>
  );
}

export default AddPlayer;