import { Cabecalho } from "../assets/Components/Cabecalho";
import { NavBar } from "../assets/Components/NavBar";
import { Conteudo } from "../assets/Components/Conteudo";
import { Outlet } from "react-router-dom";

export function Inicial() {
  return (
    <>
      <Cabecalho />
      <NavBar />
      <Outlet />
    </>
  );
}
