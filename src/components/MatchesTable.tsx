import { ChevronDownIcon } from "@heroicons/react/16/solid";
import matchs from "../data/matchs-data.js";

type Partida = {
  id: number;
  timeDaCasa: string;
  timeVisitante: string;
  campeonato: string;
};

function MatchesTable() {
  const matchList = matchs.map((partida: Partida) => (
    <li key={partida.id}>
      <button className="w-full border-2 border-black flex items-center justify-between">
        <button className="rounded-xl px-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          {partida.campeonato}
        </button>
        <div className="flex items-center ">
          <button className="px-8 rounded-2xl bg-secondary-500 text-white">
            {partida.timeDaCasa}
          </button>
          <span className="place-self-center text-white h-8 w-14 rounded-2xl inline-block mx-8 bg-primary-700">
            VS
          </span>
          <button className="px-8 rounded-2xl bg-secondary-500 text-white">
            {partida.timeVisitante}
          </button>
        </div>
        <ChevronDownIcon className="h-7 w-7 text-black" />
      </button>
    </li>
  ));
  return <ul>{matchList}</ul>;
}

export default MatchesTable;
