import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../connections/index.js";
import { getDocs, collection } from 'firebase/firestore';
import TransfersForm from "../../components/TransfersForm/TransfersForm.tsx";
import './Transfers.css';

function Transfers() {
  const [transfersList, setTransfersList] = useState([]);

  const transfersListRef = collection(db, 'players');

  function toCurrency(value:number):string {
    return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  }

  useEffect(() => {
    const getTransfers = async () => {
      const originData:any = await getDocs(transfersListRef);
      const data:any = originData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const filteredData = [];
      data.forEach((item:any) => {
        if (item.transfer_type !== undefined) {
          if (item.transfer_type !== '') {
            console.log(item.transfer_type);
            filteredData.push(item);
          }
        }
      });
      setTransfersList(filteredData);
      localStorage.setItem('transfersList', JSON.stringify(filteredData));
      console.log(filteredData);
    };
    getTransfers();
  }, []);

  return (
    <div className="transfers container mx-auto">
      <h1 className="text-3xl text-left text-white px-5 flex items-center mb-8">
        Transferencias
        <span className="material-symbols-outlined pl-5 text-5xl">
          sync_alt
        </span>
      </h1>
      <div className="transfers_list">
        {
          transfersList.map((player:any) => (
            <div key={ player.id } className="transfer_card text-white">
              <div className="transfer_card__user flex justify-center flex-col items-center">
                <span className="material-symbols-outlined text-8xl">
                  face
                </span>
                <p>{ player.name } <strong>{ player.last_name.toUpperCase() }</strong></p>
              </div>
              <div className="transfer_card__price flex justify-center flex-col items-center">
                <span className={`material-symbols-outlined text-8xl transfer-type--${ player.transfer_type }`}>
                  { player.transfer_type === 'cesion'
                    || player.transfer_type === 'cesion-buy'
                    || player.transfer_type === 'cesion-sale'
                    ? 'history' : 'arrow_cool_down' }
                </span>
                <p className="transfer_type">{ player.transfer_type }</p>
                <p className="transfer_amount text-2xl barlow-bold">{ toCurrency(player.transfer_amount) }</p>
              </div>
              <div className="transfer_card__destiny flex justify-center flex-col items-center">
                <span className="material-symbols-outlined text-8xl">
                  public
                </span>
                <p>{ player.last_team }</p>
              </div>
            </div>
          ))
        }
      </div>
      <TransfersForm />
    </div>
  );
}

export default Transfers;