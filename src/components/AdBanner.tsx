import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const AdBanner = () => {
  return (
    <div className="py-12 text-white flex items-center justify-between bg-primary-300 text-3xl">
      <button className="px-1">
        <ChevronLeftIcon className="h-14 w-14 text-secondary-500" />
      </button>
      <p>
        Anúncios/chamadas que podem ser <br /> trocados pelos funcionários
      </p>
      <button className="px-1">
        <ChevronRightIcon className="h-14 w-14 text-secondary-500" />
      </button>
    </div>
  );
};

export default AdBanner;
