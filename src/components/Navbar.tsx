import { WalletIcon } from "@heroicons/react/16/solid";
import ibetLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="bg-primary-500 flex justify-between text-white pb-1 text-xl border-b-2 border-black">
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

        <button className="h-full px-5 ml-8 bg-primary-500 hover:bg-primary-700 active:bg-primary-700 active:border-b-4 active:border-secondary-500 focus:border-b-4 focus:border-secondary-500 focus:bg-primary-700">
          Meus Dados
        </button>
      </div>
    </div>
  );
}

export default Navbar;
