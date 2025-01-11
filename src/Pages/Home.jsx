import { useState } from "react";
import { searchForShows, searchForActors } from "../utils/tvmaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onInputChange = (e) => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();

    try {
      setApiDataError(null);
      if (searchOption === "shows") {
        const apiData = await searchForShows(searchStr);
        setApiData(apiData);
      } else if (searchOption === "actors") {
        const apiData = await searchForActors(searchStr);
        setApiData(apiData);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occurred: {apiDataError.message}</div>;
    }
    if (apiData && apiData[0]) {
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />

        <label>
          <input
            type="radio"
            name="search-options"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
          Shows
        </label>
        <label>
          <input
            type="radio"
            name="search-options"
            value="actors"
            checked={searchOption === "actors"}
            onChange={onRadioChange}
          />
          Actors
        </label>

        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
