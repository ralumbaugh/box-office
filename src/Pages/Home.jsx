import { useState } from "react";
import { searchForShows } from "../utils/tvmaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onInputChange = (e) => {
    setSearchStr(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();

    try {
      setApiDataError(null);
      const apiData = await searchForShows(searchStr);
      setApiData(apiData);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occurred: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
