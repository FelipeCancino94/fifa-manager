import React from "react";

import { useState, useEffect } from "react";
import { db } from "../../connections/index.js";
import { getDocs, collection, getDoc, doc, writeBatch } from 'firebase/firestore';

import AddAcademyPlayer from "../../components/AddAcademyPlayer/AddAcademyPlayer.tsx";

import './YouthQuarry.css';
import '../../components/Modal/Modal.css';

function YouthQuarry() {

  const [academyPlayers, setAcademyPlayers] = useState([]);
  const academyPlayersRef = collection(db, 'academy');

  function toCurrency(value:number):string {
    return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  useEffect(() => {
    const getAcademyPlayers = async () => {
      const notCleanData:any = await getDocs(academyPlayersRef);
      const data:any = notCleanData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setAcademyPlayers(data);
      localStorage.setItem('academyPlayersList', JSON.stringify(data));
      //console.log(data);
    };
    getAcademyPlayers();
  }, []);

  function toggleInfo(e:any) {
    const target = e.target.getAttribute('data-youth');
    document.querySelector(`.index-youth--${ target }`)?.classList.toggle('open');
  }

  function showModal(id:String) {
    document.querySelector('.stats-form-modal')?.classList.add('show');
    setTimeout(() => {
      document.querySelector('.stats-form-modal .container-modal')?.classList.add('animate');
    }, 200);
    document.getElementById('id_player').value = id;
  }

  const addSeasonToAcademyPlayer = async () => {
    //console.log(document.getElementById('id_player').value)
    let seasonsArray;
    const dataSeason = {
      year: Number(document.getElementById('season_year')?.value),
      season: document.getElementById('season_season')?.value,
      general: Number(document.getElementById('season_general')?.value),
      games: Number(document.getElementById('season_games')?.value),
      goals: Number(document.getElementById('season_goals')?.value),
      assists: Number(document.getElementById('season_assists')?.value),
      market_value: Number(document.getElementById('season_market_value')?.value)
    };
    try {
      const idPlayer = document.getElementById('id_player').value;
      const docRef = doc(db, 'academy', idPlayer);
      // Get document (object) by ID
      
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        seasonsArray = docSnap.data().seasons;
        seasonsArray.push(dataSeason);
        console.log(seasonsArray);
        // Modify seasons array of data to update object
        // Get a new write batch
        const batch = writeBatch(db);

        batch.update(docRef, {'seasons': seasonsArray});

        // Commit the batch
        await batch.commit();

        
      } else {
        console.log("No such document!");
      }
    } catch(e) {
      console.error('Error adding document: ', e);
    } finally {
      window.location.reload();
    }
  }

  const getRecentGeneral = (seasons) => {
    return Math.max(...seasons.map(o => o.general));
  }

  const showModalSellPlayer = (id:string) => {
    document.querySelector('.sell-player-modal')?.classList.add('show');
    setTimeout(() => {
      document.querySelector('.sell-player-modal .container-modal')?.classList.add('animate');
    }, 200);
    document.getElementById('sell_player_id_player').value = id;
  }

  const closeModal = (idModal:string) => {
    document.querySelector(`${ idModal } .container-modal`)?.classList.remove('animate');
    document.querySelector(idModal)?.classList.remove('show');
  }

  const sellPlayer = async () => {
    const idPlayer = document.getElementById('sell_player_id_player').value;
    const batch = writeBatch(db);
    const playerRef = doc(db, 'academy', idPlayer);
    try {
      batch.update(playerRef, {"player_status": 'sold'});
      await batch.commit();
    } catch (error) {
      console.error('No es posible vender al jugador: ', error);
    } finally {
      window.location.reload();
    }
  }

  return (
    <div className="youth-quarry text-white container mx-auto">
      <h1 className="text-3xl text-left text-white px-5 flex items-center mb-8">
        Cantera de Juveniles
      </h1>
      <div className="youth-list">
        {
          academyPlayers.map((player:any) => (
            <div key={ player.id } className={`youth-card grid py-5 ${ player.player_status == 'sold' ? 'player-sold' : '' }`} id={ player.id }>
              <div className="youth-name flex justify-center flex-col items-center">
                <span className="material-symbols-outlined text-5xl">
                  face
                </span>
                <p className="text-3xl">{ player.name } { player.last_name }</p>
              </div>
              <div className="youth-gen flex justify-center flex-col items-center">
                <p className="text-3xl">GENERAL</p>
                <p className="text-5xl barlow-bold">{ getRecentGeneral(player.seasons) }</p>
              </div>
              <div className="youth-pot flex justify-center flex-col items-center">
                <p className="text-3xl">POTENCIAL</p>
                <p className="text-5xl barlow-bold">{ player.potential }</p>
              </div>
              <div className="youth-seassons flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl" data-youth={ player.id } onClick={(e) => { toggleInfo(e) }}>
                  info
                </span>
                <span className="material-symbols-outlined text-5xl ml-5" onClick={ () => { showModal(player.id) } }>
                  data_saver_on
                </span>
                <span className="material-symbols-outlined text-5xl ml-5" onClick={ () => { showModalSellPlayer(player.id) } }>
                  sell
                </span>
                <div className={ `youth-seassons-info p-3 index-youth--${ player.id }` }>
                  <table className="w-full">
                    <thead>
                      <tr className="text-right">
                        <th>Año</th>
                        <th>Temporada</th>
                        <th>General</th>
                        <th>Partidos</th>
                        <th>Goles</th>
                        <th>Asistencias</th>
                        <th>Valor de mercado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        player.seasons.map((season:any) => (
                          <tr key={ season.year } className="text-right barlow-bold">
                            <td>{ season.year }</td>
                            <td>{ season.season }</td>
                            <td>{ season.general }</td>
                            <td>{ season.games }</td>
                            <td>{ season.goals }</td>
                            <td>{ season.assists }</td>
                            <td>{ toCurrency(season.market_value) }</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <AddAcademyPlayer />
      <div className="modal stats-form-modal">
        <div className="container-modal">
          <div className="content-modal">
            <div className="form">
              <h3 className="text-black text-4xl text-center">Añadir estadistica de Jugador</h3>
              <div className="row flex justify-between">
                <input type="hidden" id="id_player" value="" />
                <div className="form-group flex-initial w-50">
                  <input type="number" id="season_year" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Año" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="text" id="season_season" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Temporada" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="number" id="season_general" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="General" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="text" id="season_games" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Partidos" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="number" id="season_goals" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Goles" />
                </div>
                <div className="form-group flex-initial w-50">
                  <input type="text" id="season_assists" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Asistencias" />
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="form-group flex-initial w-50">
                  <input type="number" id="season_market_value" className="border-2 border-x-0 border-b-[#091442] text-black border-t-0 py-3 px-2" placeholder="Valor de mercado" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-modal">
          <button className="confirm-btn bg-blue-800 py-3 px-5 rounded-lg mt-5" onClick={ () => addSeasonToAcademyPlayer() }>Guardar</button>
          </div>
        </div>
      </div>
      <div className="modal sell-player-modal">
        <div className="container-modal">
          <div className="content-modal text-center">
            <h3 className="text-black text-4xl text-center mb-5">Seguro quieres vender este jugador ?</h3>
            <input type="hidden" id="sell_player_id_player" />
            <button className="text-5xl text-center px-5 py-3 rounded-lg bg-blue-800 mr-5" onClick={ () => { sellPlayer() } }>Vender</button>
            <button className="text-5xl text-center px-5 py-3 rounded-lg bg-gray-300" onClick={ () => { closeModal('.sell-player-modal') } }>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthQuarry;