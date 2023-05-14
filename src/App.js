import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from "react-router-dom";
import DetailTrack from "./components/DetailTrack";
import Favorites from "./components/Favorites";
import ListMusic from "./components/ListMusic.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListMusic/>}></Route>
        <Route path="/favo" element={<Favorites/>}></Route>
        <Route path="/detail/:id" element={<DetailTrack/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
