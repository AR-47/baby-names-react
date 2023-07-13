import SearchBarProps from "../interfaces/searchBarProps";
import "../styles/searchBar.css";

function SearchBar({value, handleSearchUpdate}: SearchBarProps) {
  return (
    <>
      <input placeholder="Search for a name" value={value} onChange={(e) => handleSearchUpdate(e.target.value)} />
    </>
  );
}

export default SearchBar;
