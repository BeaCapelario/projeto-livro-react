import { Cabecalho } from "../assets/Components/Cabecalho";
import { NavBar } from "../assets/Components/NavBar";
import { Conteudo } from "../assets/Components/Conteudo";
import { Footer } from "../assets/Components/Footer";
import { Outlet } from "react-router-dom";

export function Inicial() {
  return (
    <>
      <Cabecalho />
      <NavBar />
      <Outlet />
      <Footer />
    </>

    
  );
}


