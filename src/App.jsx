import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokemonDetails from "./Pages/PokemonDetails";
import NavBar from "./Components/NavBar";
import PokemonByType from "./Pages/PokemonByType";

function App() {
  return <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          {/* Crée la route /type/params */}
          <Route path="/type/:type" element={<PokemonByType />} />
        </Routes>
      </BrowserRouter>
    </>;
}

export default App
