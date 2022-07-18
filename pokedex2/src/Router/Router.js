import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import DetailsPoke from '../Pages/DetailsPoke/DetailsPoke'
import Pokedex from "../Pages/Pokedex/Pokedex";
import Header from "../Components/Header/Header";

export const Router = () => {
    <BrowserRouter>
      <Header />
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route path="/DetailsPoke" element={<DetailsPoke />} />
        </Routes>
    </BrowserRouter>
}