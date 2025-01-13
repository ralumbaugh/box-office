import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const onInputChange = (e) => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};
export default SearchForm;
