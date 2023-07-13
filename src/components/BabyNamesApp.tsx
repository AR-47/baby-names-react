import { useState } from "react";
import SearchBar from "./SearchBar";
import AllNames from "./AllNames"
import FavNames from "./FavNames";
import NameInfoProps from "../interfaces/nameInfoProps";
import NameButtonProps from "../interfaces/nameButtonProps";

function BabyNamesApp(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  
  const [favNames, setFavNames] = useState<NameInfoProps[]>([]);

  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };

  const handleNameButtonClick = (name: string ): void => {
    setFavNames(prev => {

      const newNameObject: NameInfoProps = {
        id: 4799,
        name: 'Adil',
        sex: 'm'
      }

      return [...prev, newNameObject]
    } 
    )
  }

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar value={inputValue} handleSearchUpdate={handleSearchUpdate} />
      <hr />
      <AllNames inputValue={inputValue} handleNameButtonClick={handleNameButtonClick}/>
      <hr />
      <FavNames/>
    </>
  );
}

export default BabyNamesApp;
