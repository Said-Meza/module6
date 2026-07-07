// import { ListaCompras } from "./ListasCompras"
// import { Tarjeta } from "./Tarjeta"

// import { Game } from "./components/Game"
// import { CounterGame } from "./CounterGames"

// import { ContadorTareas } from "./ContadorTareas"
// import { ExploradorEspacial } from "./ExploradorEspacial"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { CitasDetalle } from './pages/CitasDetalle';
import { Citas } from './pages/Citas';
import { NotFound } from './pages/NotFound';
NotFound
function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link><br>
        </br>
        <Link to="/citas">Ver Citas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/citas/:id" element={<CitasDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    //    <div>
    //   {/* <h1>Tarjeta de Presentación</h1> */}
    //   {/* Renderizamos el componente Tarjeta */}
    //   {/* <Tarjeta /> */}
    //   {/* <ListaCompras /> */}
    //   {/* <ContadorTareas></ContadorTareas> */}
    //   {/* <ExploradorEspacial></ExploradorEspacial> */}
    //   {/* <Game></Game> */}
    //   <CounterGame></CounterGame>
    // </div>

  )
}

export default App
