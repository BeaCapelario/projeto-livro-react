import estilo from "../assets/Components/Conteudo.module.css";
import imagem from "../assets/images/kelly.jpg";
import imagem2 from "../assets/images/divider.png";

export function Autor() {
  return (
    <main className={estilo.container}>
      <section className={estilo.box2}>
        <img
          className={estilo.imagem}
          src={imagem}
          alt="Foto da autora Kelly Creagh"
        />
        <div className={estilo.biografia}>
          <h1>Sobre a Autora</h1>
          <article className={estilo.whois}>
            <h2>Quem é?</h2>
            <p>
              Kelly Creagh se graduou em 2008 na Spalding University em Escrita
              Criativa. Quando não está escrevendo, assombrando livrarias ou
              estudando Poe obsessivamente, as paixões de Kelly incluem a antiga
              arte da dança do ventre. Ela vive com sua terrier Annabel no
              coração da antiga Loiusville na maior e mais assombrada vizinhaça
              de Kentucky.
            </p>
            <p>
              Além de ser escritora, Kelly Creagh é uma dançarina e instrutora
              profissional de dança do ventre. De acordo com sua família
              amorosa, ela também é uma vilã obscura, uma característica que
              considera muito útil para escrever sobre Poe, mundos de sonhos
              traiçoeiros e outras coisas que fazem barulho na noite.
            </p>
          </article>

          <article className={estilo.biblio}>
            <h2>Bibliografia</h2>
            <ul>
              <li>Nevermore, 2010</li>
              <li>Enshadowed, 2012</li>
              <li>Oblivion, 2015</li>
              <li>Nickolas Claus: Ghosts of Christmas Past, 2018</li>
              <li>Phantom Heart, 2021</li>
              <li>Strange Unearthly Things, 2023</li>
              <li>Strange unearthly things. Strane cose non terrene, 2024</li>
            </ul>
          </article>
           <img
          src={imagem2}
          alt="Foto da autora Kelly Creagh"></img>
        </div>
      </section>
    </main>
  );
}
