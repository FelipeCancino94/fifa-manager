import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Seasons from "./pages/Seasons/Seasons.tsx";
import Team from "./pages/Team/Team.tsx";
import Transfers from "./pages/Transfers/Transfers.tsx";
import YouthQuarry from "./pages/YouthQuarry/YouthQuarry.tsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="seasons" element={<Seasons />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="youths" element={<YouthQuarry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
