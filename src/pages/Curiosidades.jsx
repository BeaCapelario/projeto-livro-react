import estilo from "../assets/Components/Conteudo.module.css";

export function Curiosidades() {
  return (
    <main className={estilo.container2}>
      <section className={estilo.curiosidadesHeader}>
        <h1>Curiosidades</h1>
      </section>
      <div className={estilo.cardsContainer}>
        <article className={estilo.card}>
          <div className={estilo.cardNumber}>1</div>
          <h3>A Influência Profunda de Edgar Allan Poe</h3>
          <p>
            Não é apenas inspiração: A autora não apenas cita Poe, mas tece a
            essência de sua vida e obra na trama. Varen estuda Poe
            intensamente, e elementos de poemas como "O Corvo" ("The Raven") e
            contos como "A Queda da Casa de Usher" tornam-se literalmente
            reais no mundo da história.
          </p>
          <p>
            O "Mundo dos Sonhos" (Netherworld) é construído a partir das
            imagens e temas sombrios da obra de Poe.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>2</div>
          <h3>Personagens Baseados em Figuras Reais</h3>
          <p>
            <strong>Varen Nethers:</strong> Seu nome e personalidade são uma
            homenagem a Edward S. T. Varen, um personagem que Poe criou em seu
            conto "Metzengerstein".
          </p>
          <p>
            <strong>Reynolds:</strong> O misterioso e antagonista Reynolds é
            inspirado em um personagem real que perseguiu Poe — um homem
            chamado Reynolds que aparece em vários de seus escritos como uma
            figura sinistra.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>3</div>
          <h3>O Título Original Tem Dupla Interpretação</h3>
          <p>
            "Nevermore" não é apenas uma referência ao famoso verso de "O
            Corvo". No livro, também representa:
          </p>
          <p>
            <strong>"Nunca Mais"</strong> — a ideia de que a vida de Isobel
            nunca mais será a mesma após conhecer Varen.
          </p>
          <p>
            <strong>"Nunca Morra"</strong> — uma referência às entidades
            imortais e forças sobrenaturais que ameaçam a realidade.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>4</div>
          <h3>A Metamorfose de Isobel é Refletida Nas Cores</h3>
          <p>
            Paleta de cores como símbolo: A autora usa cores para mostrar a
            transformação de Isobel:
          </p>
          <p>
            <strong>No início:</strong> rosa, dourado (cheerleader típica,
            vida perfeita)
          </p>
          <p>
            <strong>No decorrer:</strong> preto, prata, vermelho (conforme ela
            adentra o mundo sombrio de Varen)
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>5</div>
          <h3>O "Grimório" de Varen é Baseado em Arte Real</h3>
          <p>
            Kelly Creagh colaborou com artistas para criar as páginas
            visualmente complexas do caderno de Varen que aparecem no livro.
            Elas são repletas de colagens, desenhos e textos que misturam a
            obra de Poe com a mitologia original da autora.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>6</div>
          <h3>A Trilogia Quase Teve 4 Livros</h3>
          <p>
            Inicialmente, a história seria uma trilogia, mas o terceiro livro
            ("Oblivion") tornou-se tão grande que a autora considerou
            dividi-lo em dois. No final, optou por manter os três volumes, mas
            o último é bem mais extenso.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>7</div>
          <h3>Referências Escondidas a Poe</h3>
          <p>Além das óbvias, há referências sutis:</p>
          <p>
            <strong>"Ligeia":</strong> O nome da irmã de Varen vem de um conto
            de Poe.
          </p>
          <p>
            <strong>"Morella":</strong> Outro personagem com nome de conto de
            Poe.
          </p>
          <p>
            Números e datas que correspondem a eventos da vida real de Poe.
          </p>
        </article>

        <article className={estilo.card}>
          <div className={estilo.cardNumber}>8</div>
          <h3>O Corvo Simbólico</h3>
          <p>
            O corvo que aparece não é apenas uma referência — na história, ele
            representa uma entidade observadora que atravessa os mundos,
            ligando a realidade ao mundo dos sonhos.
          </p>
        </article>
      </div>
    </main>
  );
}