import { useState } from "react";
import trophyLogo from "../assets/trophy.svg";
import ranking from "<div styleName={} />
<data value="" />
<ranking-data className="t"></ranking-data>s";

type Apostador = {
  id: number;
  usuario: string;
  estrelas: number;
};

function Ranking() {
  const [maxEstrelas] = useState(5); // Define o número máximo de estrelas
  const rankingList = ranking.map((apostador: Apostador) => {
    const estrelasArray = new Array(maxEstrelas).fill(0).map((_, index) => {
      if (index < apostador.estrelas) {
        return (
          <span className="text-secondary-500" key={index}>
            &#9733;
          </span>
        ); // Estrela preenchida
      } else {
        return <span key={index}>&#9734;</span>; // Estrela vazia
      }
    });

    return (
      <li className="border-b-2 border-black px-12" key={apostador.id}>
        <p>
          <b>{apostador.usuario}</b> {estrelasArray}
        </p>
      </li>
    );
  });

  return (
    <div className="bg-primary-100 text-white ">
      <div className="flex items-center justify-center">
        <img src={trophyLogo} className="pl-2" alt="Star trophy logo" />
        <p className="text-2xl px-5">Ranking</p>
        <img src={trophyLogo} className="pl-2" alt="Star trophy logo" />
      </div>
      <ul className="border-t-2 border-black">{rankingList}</ul>
    </div>
  );
}

export default Ranking;
