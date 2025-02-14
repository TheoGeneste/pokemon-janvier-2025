import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokemonDetails from "./Pages/PokemonDetails";
import NavBar from "./Components/NavBar";
import PokemonByType from "./Pages/PokemonByType";
import PokemonByGeneration from "./Pages/PokemonByGeneration";
import PokemonByVersion from "./Pages/PokemonByVersion";

function App() {
  return <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          {/* Crée la route /type/params */}
          <Route path="/type/:type" element={<PokemonByType />} />
          <Route path="/generation/:generation" element={<PokemonByGeneration />} />
          <Route path="/version/:version" element={<PokemonByVersion />} />

        </Routes>
      </BrowserRouter>
    </>;
}

export default App
