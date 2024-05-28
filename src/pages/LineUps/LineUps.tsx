import React from "react";
import "./LineUps.css";

function LineUps() {

  let lineUpList:Array<any> = [];
  let selectedPosition:String = '';

  function getDataList() {
    const data:any = localStorage.getItem('playerList');
    console.log(JSON.parse(data));
    lineUpList = JSON.parse(data);
    return JSON.parse(data);
  }

  function setPosition(position, event) {
    selectedPosition = position;
    event.target.classList.add('selected');
  }

  function setPlayer(id) {
    const selectedPlayer = lineUpList.find(key => key.id === id);

    if (selectedPosition !== '') {
      selectedPlayer.team_position = selectedPosition;
      /* create <p> in formation */
      const elementP = document.createElement('p');
      elementP.setAttribute('id', selectedPlayer.id);
      elementP.innerText = `${selectedPlayer.name} ${selectedPlayer.last_name}`;
      /* assign text in selected div */
      document.querySelector(`.${ selectedPlayer.team_position }`)?.appendChild(elementP);
      /* hide element player list */
      document.querySelector(`#player--${selectedPlayer.id}`)?.classList.add('hide-element');
      /* reset selected position */
      selectedPosition = '';
      document.querySelectorAll('.canvas .selected').forEach((element) => {
        element.classList.remove('selected')
      });
    }

    console.log(selectedPlayer);
  }

  return (
    <div className="lineups container mx-auto">
      <h1 className="text-3xl text-left text-white px-5 flex items-center mb-8">Alineacion</h1>
      <div className="content flex flex-row">
        <div className="canvas basis-3/4 border-2 p-8">
          <div className="pos por" onClick={ (event) => setPosition('por', event) }></div>
          <div className="pos lti" onClick={ (event) => setPosition('lti', event) }></div>
          <div className="pos dfci" onClick={ (event) => setPosition('dfci', event) }></div>
          <div className="pos dfcd" onClick={ (event) => setPosition('dfcd', event) }></div>
          <div className="pos ltd" onClick={ (event) => setPosition('ltd', event) }></div>
          <div className="pos mi" onClick={ (event) => setPosition('mi', event) }></div>
          <div className="pos mco" onClick={ (event) => setPosition('mco', event) }></div>
          <div className="pos md" onClick={ (event) => setPosition('md', event) }></div>
          <div className="pos ei" onClick={ (event) => setPosition('ei', event) }></div>
          <div className="pos dc" onClick={ (event) => setPosition('dc', event) }></div>
          <div className="pos ed" onClick={ (event) => setPosition('ed', event) }></div>
        </div>
        <div className="list_of_players basis-1/4 p-8">
        {
          getDataList().map((player:any) => (
            <p key={ player.id } id={ `player--${player.id}` } onClick={() => setPlayer(player.id) }>{ player.name } { player.last_name }</p>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default LineUps;