import { useState } from "react";

interface SearchBar {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar(props: SearchBar) {


    return (
        <>
            <input 
            value={props.value}
            onChange={props.onChange}/>
        </>
    )
}

export default SearchBar;