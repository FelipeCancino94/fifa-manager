import React from "react";

interface Competences {
  competence: string;
  goals: number;
  goals_conceded: number;
  position: string;
  winner: boolean;
}

interface Season {
  id: string;
  season: string;
  competences: Array<Competences>;
}

function SeasonAccordion(season:Season) {

  function toggleAccordion(element) {
    element.target.closest('.season').classList.toggle('open');
  };

  return (
    <>
      <div className="season mb-3 p-5" onClick={ (element) => toggleAccordion(element) }>
          <div className="season__heading flex items-center justify-between">
            <h2>Temporada { season.season }</h2>
            <span className="material-symbols-outlined text-4xl">expand_more</span>
          </div>
          <div className="season__content">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Competencia</th>
                  <th>Posicion</th>
                  <th>G</th>
                  <th>GR</th>
                  <th>Dif</th>
                </tr>
              </thead>
              <tbody>
                {
                  season.competences.map((competence:Competences, index:number) => (
                    <tr key={ index }>
                      <td className="barlow-bold">
                        { competence.winner && <span className="material-symbols-outlined">trophy</span> }
                        { competence.competence }
                      </td>
                      <td className="barlow-bold">{ competence.position }</td>
                      <td className="barlow-bold">{ competence.goals }</td>
                      <td className="barlow-bold">{ competence.goals_conceded }</td>
                      <td className="barlow-bold">{ competence.goals - competence.goals_conceded }</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default SeasonAccordion;