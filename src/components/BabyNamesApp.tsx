import { useState } from "react";
import filterNames from "../utils/filterNames";
import rawNameData from "../data/namesData.json";
import SearchBar from "./SearchBar";
import NamesDisplay from "./NamesDisplay";
import NameInfoInterface from "../interfaces/nameInfoInterface";
import NameButton from "./NameButton";

function BabyNamesApp(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [favNames, setFavNames] = useState<NameInfoInterface[]>([]) 

  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };

  const handleFavNames = () => {
    console.log('Need to implement logic here for selecting/unselecting favourtite names');
  }

  const nameInfoList: NameInfoInterface[]= [...rawNameData].sort((a, b) => a.name.localeCompare(b.name));

  const favNamesList = favNames.map((nameInfo) => {
    return (
      <NameButton
        key={nameInfo.id}
        name={nameInfo.name}
        sex={nameInfo.sex}
        handleFavNames={handleFavNames}
      />        
    );
  })

  const nonFavNamesList = filterNames(nameInfoList, inputValue).map((nameInfo) => {
    return (
        <NameButton
          key={nameInfo.id}
          name={nameInfo.name}
          sex={nameInfo.sex}
          handleFavNames={handleFavNames}
        />        
    );
  })

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar value={inputValue} onChange={handleSearchUpdate} />
      <NamesDisplay displayHeading="Favourites" listOfNames={favNamesList} />
      <NamesDisplay displayHeading="All names" listOfNames={nonFavNamesList} />
    </>
  );
}

export default BabyNamesApp;
