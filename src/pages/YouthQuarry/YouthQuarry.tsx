import React from "react";

import { useState, useEffect } from "react";
import { db } from "../../connections/index.js";
import { getDocs, collection } from 'firebase/firestore';

import AddAcademyPlayer from "../../components/AddAcademyPlayer/AddAcademyPlayer.tsx";

import './YouthQuarry.css';

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
      console.log(data);
    };
    getAcademyPlayers();
  }, []);

  function toggleInfo(e:any) {
    const target = e.target.getAttribute('data-youth');
    document.querySelector(`.index-youth--${ target }`)?.classList.toggle('open');
  }

  return (
    <div className="youth-quarry text-white container mx-auto">
      <h1 className="text-3xl text-left text-white px-5 flex items-center mb-8">
        Cantera de Juveniles
      </h1>
      <div className="youth-list">
        {
          academyPlayers.map((player:any) => (
            <div key={ player.id } className="youth-card grid">
              <div className="youth-name flex justify-center flex-col items-center">
                <span className="material-symbols-outlined text-5xl">
                  face
                </span>
                <p className="text-3xl">{ player.name } { player.last_name }</p>
              </div>
              <div className="youth-gen flex justify-center flex-col items-center">
                <p className="text-3xl">GENERAL</p>
                <p className="text-5xl barlow-bold">{ player.general }</p>
              </div>
              <div className="youth-pot flex justify-center flex-col items-center">
                <p className="text-3xl">POTENCIAL</p>
                <p className="text-5xl barlow-bold">{ player.potential }</p>
              </div>
              <div className="youth-seassons flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl" data-youth={ player.id } onClick={(e) => { toggleInfo(e) }}>
                  info
                </span>
                <div className={ `youth-seassons-info p-3 index-youth--${ player.id }` }>
                  <table className="w-full">
                    <thead>
                      <tr className="text-right">
                        <th>Año</th>
                        <th>Temporada</th>
                        <th>General</th>
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
    </div>
  );
};

export default YouthQuarry;