import React from "react";
import './Seasons.css';

function Seasons() {

  function toggleAccordion(element) {
    element.target.closest('.season').classList.toggle('open');
  };

  return (
    <div className="seasons container mx-auto">
      <div className="total_seasons px-5">
        <h1 className="text-3xl text-center">Temporadas</h1>
        <p className="text-8xl text-center">3</p>
      </div>
      <div className="seasons_list px-5">
        <div className="season mb-3 p-5" onClick={ (element) => toggleAccordion(element) }>
          <div className="season__heading flex items-center justify-between">
            <h2>Temporada 2024 - 2025</h2>
            <span className="material-symbols-outlined text-4xl">expand_more</span>
          </div>
          <div className="season__content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio culpa. Cumque, molestiae perspiciatis. Itaque labore repellendus nisi quibusdam similique? Natus voluptatum debitis excepturi sint dignissimos deleniti repellat blanditiis amet.</p>
          </div>
        </div>

        <div className="season mb-3 p-5" onClick={ (element) => toggleAccordion(element) }>
          <div className="season__heading flex items-center justify-between">
            <h2>Temporada 2024 - 2025</h2>
            <span className="material-symbols-outlined text-4xl">expand_more</span>
          </div>
          <div className="season__content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio culpa. Cumque, molestiae perspiciatis. Itaque labore repellendus nisi quibusdam similique? Natus voluptatum debitis excepturi sint dignissimos deleniti repellat blanditiis amet.</p>
          </div>
        </div>

        <div className="season mb-3 p-5" onClick={ (element) => toggleAccordion(element) }>
          <div className="season__heading flex items-center justify-between">
            <h2>Temporada 2024 - 2025</h2>
            <span className="material-symbols-outlined text-4xl">expand_more</span>
          </div>
          <div className="season__content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio culpa. Cumque, molestiae perspiciatis. Itaque labore repellendus nisi quibusdam similique? Natus voluptatum debitis excepturi sint dignissimos deleniti repellat blanditiis amet.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Seasons;