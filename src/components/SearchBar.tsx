import SearchBarProps from "../interfaces/searchBarProps";

function SearchBar({value, onChange}: SearchBarProps) {


    return (
        <>
            <input 
            value={value}
            onChange={(e) => onChange(e.target.value)}/>
        </>
    )
}

export default SearchBar;