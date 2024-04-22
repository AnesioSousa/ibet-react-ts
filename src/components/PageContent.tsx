import AdBanner from "./AdBanner";
import MatchesTable from "./MatchesTable";
import Ranking from "./Ranking";
import SearchBar from "./SearchBar";

function PageContent() {
  return (
    <>
      <AdBanner />
      <SearchBar />
      <Ranking />
      <MatchesTable />
    </>
  );
}

export default PageContent;
