import { ArrowLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function SearchBar() {
  return (
    <div className="flex justify-between bg-primary-300 border-2 border-solid border-black text-lg">
      <div className="mr-10 ml-2 flex justify-between border-2 border-white">
        <input defaultValue="Buscar Partidas" />
        <button className="bg-white px-1">
          <MagnifyingGlassIcon className="h-9 w-9 text-black" />
        </button>
      </div>
      <div className="flex text-white bg-primary-700 px-4">
        <div className="flex justify-between items-center mr-3">
          <button className="flex justify-between items-center">
            <span className="w-4 h-4 mr-1 bg-red-700 inline-block rounded-xl"></span>
            <p>Ao vivo</p>
          </button>
        </div>
        <button className="ml-3">Próximas</button>
      </div>
      <button className="flex justify-between items-center pr-3 bg-secondary-500">
        <ArrowLeftIcon className="h-9 w-9 text-black" />
        <p>Minhas Apostas</p>
      </button>
    </div>
  );
}

export default SearchBar;
