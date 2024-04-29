import React from "react";
import './YouthQuarry.css';

function YouthQuarry() {

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
        <div className="youth-card grid">
          <div className="youth-name flex justify-center flex-col items-center">
            <span className="material-symbols-outlined text-5xl">
              face
            </span>
            <p className="text-3xl">Name</p>
          </div>
          <div className="youth-gen flex justify-center flex-col items-center">
            <p className="text-3xl">GENERAL</p>
            <p className="text-5xl barlow-bold">45</p>
          </div>
          <div className="youth-pot flex justify-center flex-col items-center">
            <p className="text-3xl">POTENCIAL</p>
            <p className="text-5xl barlow-bold">89 - 94</p>
          </div>
          <div className="youth-seassons flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl" data-youth="1" onClick={(e) => { toggleInfo(e) }}>
              info
            </span>
            <div className="youth-seassons-info p-3 index-youth--1">
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
                  <tr className="text-right barlow-bold">
                    <td>1</td>
                    <td>2023-2024</td>
                    <td>45</td>
                    <td>2</td>
                    <td>1</td>
                    <td>$ 500.000</td>
                  </tr>
                  <tr className="text-right barlow-bold">
                    <td>2</td>
                    <td>2024-2025</td>
                    <td>50</td>
                    <td>2</td>
                    <td>1</td>
                    <td>$ 800.000</td>
                  </tr>
                  <tr className="text-right barlow-bold">
                    <td>3</td>
                    <td>2025-2026</td>
                    <td>60</td>
                    <td>5</td>
                    <td>1</td>
                    <td>$ 1.100.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthQuarry;