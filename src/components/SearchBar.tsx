import SearchBarProps from "../interfaces/searchBarProps";

function SearchBar({ searchFor, handleSearchUpdate }: SearchBarProps) {
  return (
    <>
      <input
        value={searchFor}
        onChange={(e) => handleSearchUpdate(e.target.value)}
        placeholder="Search for a name..."
      />
    </>
  );
}

export default SearchBar;
