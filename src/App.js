import PlayersList from './components/PlayersList/PlayersList.tsx';
import AddPlayer from './components/AddPlayer/AddPlayer.tsx';
import './App.css';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#0E1E5B] to-[#091442] h-screen">
      <PlayersList />
      <AddPlayer />
    </div>
  );
}

export default App;
