import estilo from "./Conteudo.module.css";
import img from "../images/capa-livro.jpg";

export function Conteudo() {
  return (
    <main className={estilo.container}>
      <section className={estilo.box}>
        <img className={estilo.img} src={img} alt="Capa do livro Nevermore" />
        <div className={estilo.topico}>
          <h1>Sobre o livro</h1>

          <article className={estilo.sinopse}>
            <h2>Sinopse</h2>
            <p>
              Uma líder de torcida e um garoto gótico são forçados a fazer um
              trabalho escolar juntos. Aos poucos, ela descobre que ele criou um
              mundo de pesadelos baseado nas obras de Edgar Allan Poe. Quando
              esse mundo sombrio começa a invadir a realidade, ela precisa
              salvá-lo antes que suas próprias criações o consumam para sempre.
            </p>
          </article>

          <article className={estilo.autor}>
            <h2>Autor</h2>
            <p>Kelly Creagh</p>
          </article>

          <article className={estilo.data}>
            <h2>Data da Publicação</h2>
            <p>1 de Janeiro de 2012</p>
          </article>

          <article className={estilo.paginas}>
            <h2>Número de Páginas</h2>
            <p>448 páginas</p>
          </article>
        </div>
      </section>
    </main>
  );
}
