import React from "react";
import "./Home.css";
import LogoMilan from "../../snippets/LogoMilan.tsx";

function Home() {
  return (
    <div className="home px-5">
      <h1 className="text-white text-5xl mb-8">Resumen</h1>
      <div className="summary-container grid gap-8">
        <div className="image-team justify-self-end">
          <LogoMilan />
        </div>
        <div className="summary-content text-white grid gap-4">
          <div className="total-seasons w-full h-full">
            <p>Temporadas</p>
            <p className="text-5xl barlow-bold">3</p>
          </div>
          <div className="local-league">
            <p>Serie A</p>
            <p className="text-5xl barlow-bold">1</p>
          </div>
          <div className="local-cup">
            <p>Copa Italia</p>
            <p className="text-5xl barlow-bold">0</p>
          </div>
          <div className="champions-league">
            <p>UEFA Champions League</p>
            <p className="text-5xl barlow-bold">7</p>
          </div>
          <div className="uefa-super-cup">
            <p>Copa UEFA</p>
            <p className="text-5xl barlow-bold">0</p>
          </div>
          <div className="friendly-cups">
            <p>Copa de pretemporada</p>
            <p className="text-5xl barlow-bold">0</p>
          </div>
          <div className="acronym-team">
            <p className="text-5xl barlow-bold">ACM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;