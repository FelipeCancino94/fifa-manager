import React from "react";
import "./Home.css";
import LogoMilan from "../../snippets/LogoMilan.tsx";

function Home() {
  return (
    <div className="home">
      <h1 className="text-3xl">Home</h1>
      <p className="text-white">This is the home page</p>
      <LogoMilan />
    </div>
  );
}

export default Home;