import { useState } from "react";
import { searchForShows, searchForActors } from "../utils/tvmaze";
import ActorsGrid from "../Components/actors/ActorsGrid";
import SearchForm from "../Components/SearchForm";
import ShowGrid from "../Components/shows/ShowGrid";

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result;

      if (searchOption === "shows") {
        result = await searchForShows(q);
      } else if (searchOption === "actors") {
        result = await searchForActors(q);
      }

      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occurred: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No results</div>;
    } else if (apiData && apiData[0]) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
