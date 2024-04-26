import React from "react";
import './Transfers.css';

function Transfers() {
  return (
    <div className="transfers container mx-auto">
      <h1 className="text-3xl text-left text-white px-5">
        Transferencias
        <span className="material-symbols-outlined">
          sync_alt
        </span>
      </h1>
      <div className="transfers_list">
        <div className="transfer_card text-white">
          <div className="transfer_card__user">
            <span className="material-symbols-outlined text-8xl">
              face
            </span>
            <p>Jugador</p>
          </div>
          <div className="transfer_card__price">
            <span className="material-symbols-outlined text-8xl">
              arrow_cool_down
            </span>
            <p className="transfer_type">Venta</p>
          </div>
          <div className="transfer_card__destiny">
            <span className="material-symbols-outlined text-8xl">
              public
            </span>
            <p>Otro club</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfers;