import React from "react";
import PlayersList from '../../components/PlayersList/PlayersList.tsx';
import AddPlayer from '../../components/AddPlayer/AddPlayer.tsx';

function Team() {
  return (
    <div className="team">
      <PlayersList />
      <AddPlayer />
    </div>
  );
}

export default Team;