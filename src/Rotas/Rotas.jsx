import { Routes, Route } from "react-router-dom";
import { Inicial } from "../pages/Inicial";
import { Autor } from "../pages/Autor";
import { Curiosidades } from "../pages/Curiosidades";
import { Conteudo } from "../assets/Components/Conteudo";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Inicial />}>
        <Route index element={<Conteudo />} />
        <Route path="autor" element={<Autor />} />
        <Route path="curiosidade" element={<Curiosidades />} />
      </Route>
    </Routes>
  );
}
