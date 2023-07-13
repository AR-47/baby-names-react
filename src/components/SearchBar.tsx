import SearchBarInterface from "../interfaces/searchBarInterface";
import "../styles/searchBar.css";

function SearchBar(props: SearchBarInterface) {
  return (
    <>
      <input placeholder="Search for a name" value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </>
  );
}

export default SearchBar;
