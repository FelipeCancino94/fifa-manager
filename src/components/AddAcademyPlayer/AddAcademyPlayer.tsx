import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../connections/index.js";
import '../Modal/Modal.css';
import './AddAcademyPlayer.css';


function AddAcademyPlayer() {


  const academyPlayerCollectionRef = collection(db, 'academy');

  const createAcademyPlayer = async () => {
    const data = {
      age: Number(document.getElementById('age')?.value),
      general: Number(document.getElementById('general')?.value),
      last_name: document.getElementById('last_name')?.value,
      name: document.getElementById('name')?.value,
      potential: document.getElementById('potential')?.value,
      seasons: [
        {
          assists: 0,
          general: Number(document.getElementById('general')?.value),
          goals: 0,
          market_value: Number(document.getElementById('market_value')?.value),
          season: document.getElementById('season')?.value,
          year: 1
        }
      ]
    };
    try {
      await addDoc(academyPlayerCollectionRef, data);
      window.location.reload();
    } catch(e) {
      console.error('Error adding document: ', e);
    }
  };

  const showModal = () => {
    document.querySelector('.add_academy_player_modal')?.classList.add('show');
    setTimeout(() => {
      document.querySelector('.container-modal')?.classList.add('animate');
    }, 200);
  }

  return (
    <>
      <button className="border bg-white p-5 w-full mt-5">
        <span className="text-3xl text-[#091442]" onClick={ () => showModal() }>Add academy player</span>
      </button>
      <div className="modal add_academy_player_modal">
        <div className="container-modal">
          <div className="content-modal">
            <div className="form">
              <h3 className="text-black text-4xl text-center">Añadir Jugador</h3>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="number" id="age" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Edad" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="text" id="name" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Nombre" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="text" id="last_name" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Apellido" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="number" id="general" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="General" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="text" id="potential" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Potencial" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="text" id="season" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Temporada" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="number" id="market_value" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Valor de mercado" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-modal">
            <button className="confirm-btn bg-blue-800 py-3 px-5 rounded-lg mt-5" onClick={ () => { createAcademyPlayer() } }>Guardar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAcademyPlayer;