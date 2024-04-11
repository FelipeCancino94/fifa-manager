import React from "react";
import "./Home.css";
import LogoMilan from "../../snippets/LogoMilan.tsx";

function Home() {
  return (
    <div className="home">
      <h1 className="text-3xl px-5">Home</h1>
      <p className="text-white px-5">This is the home page :D</p>
      <LogoMilan />
    </div>
  );
}

export default Home;