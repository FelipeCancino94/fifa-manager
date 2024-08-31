import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../connections/index.js";
import SeasonAccordion from "../../components/SeasonAccordion/SeasonAccordion.tsx";
import './Seasons.css';

function Seasons() {
  const [seasons, setSeasons] = useState<Array<Season> | null>([]);

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

  useEffect(() => {
    const getSeasons = async () => {
      const seasonsRef = collection(db, 'seasons');
      const query = await getDocs(seasonsRef);
      const data:Array<object> = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setSeasons(data);
      console.log(data);
    }
    getSeasons();
  }, []);

  return (
    <div className="seasons container mx-auto">
      <div className="total_seasons px-5">
        <h1 className="text-3xl text-center">Temporadas</h1>
        <p className="text-8xl text-center">{ seasons?.length }</p>
      </div>
      <div className="seasons_list px-5">
        {
          seasons?.map((season) => (
            <SeasonAccordion
              key={ season.id }
              id={ season.id }
              season={ season.season }
              competences={ season.competences } />
          ))
        }
      </div>
    </div>
  );
}

export default Seasons;