import { WalletIcon } from "@heroicons/react/16/solid";
import ibetLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="bg-primary-500 flex justify-between mb-3 text-white pb-0.5 text-xl">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ibetLogo} className="pl-2" alt="Vite logo" />
        </a>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center pr-6">
          <button className="px-1">
            <WalletIcon className="h-9 w-9 text-secondary-500" />
          </button>
          <button>00,00</button>
        </div>

        <button className="h-full pl-2 ml-8 pr-2 bg-primary-500 hover:bg-primary-700 active:bg-primary-700 active:border-b-4 active:border-secondary-500 focus:border-b-4 focus:border-secondary-500 focus:bg-primary-700">
          Meus Dados
        </button>
      </div>
    </div>
  );
}

export default Navbar;
