import { useState } from "react";
import { searchForShows, searchForActors } from "../utils/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ActorsGrid from "../Components/actors/ActorsGrid";
import SearchForm from "../Components/SearchForm";
import ShowGrid from "../Components/shows/ShowGrid";

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForActors(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
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
