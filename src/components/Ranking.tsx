import { useState } from "react";
import trophyLogo from "../assets/trophy.svg";

interface RankingItem {
  id: number;
  usuario: string;
  estrelas: number;
}

type Apostador = {
  id: number;
  usuario: string;
  estrelas: number;
};

const ranking: RankingItem[] = [
  { id: 0, usuario: "MarquinhosDaXJ", estrelas: 5 },
  { id: 1, usuario: "JoaoApostador", estrelas: 4.5 },
  { id: 2, usuario: "MariaApostadora", estrelas: 4 },
  { id: 3, usuario: "PedroAposta", estrelas: 3 },
  { id: 4, usuario: "AnaApostadora", estrelas: 2.5 },
  { id: 5, usuario: "CarlosApostador", estrelas: 4.8 },
];

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
