import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Assinatura from "./pages/Assinatura";
import Chamados from "./pages/Chamados";
import Dashboards from "./pages/Dashboards";
import EspacoVp from "./pages/EspacoVp";
import Home from "./pages/Home";
import PlaynoDia from "./pages/PlaynoDia";
import Shopping from "./pages/Shopping";
import UniVp from "./pages/UniVp";

function App() {
         
  return (
    
    <div className="main-content">
    <BrowserRouter>
    <Header />

    <div className="paginas">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/playnodia" element={<PlaynoDia />}/>
      <Route  path="/univp" element={<UniVp />}/>
      <Route  path="/espacovp" element={<EspacoVp />}/>
      <Route  path="/shopping" element={<Shopping />}/>
      <Route  path="/chamados" element={<Chamados />}/>
      <Route  path="/dashboards" element={<Dashboards />}/>
      <Route  path="/assinatura" element={<Assinatura />}/>
    </Routes>
    </div>

    
    </BrowserRouter>

      </div>

    
  );
}

export default App;
