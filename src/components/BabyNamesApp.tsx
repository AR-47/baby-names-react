import { useState } from "react";
import filterNames from "../utils/filterNames";
import rawNamesData from "../data/namesData.json";
import SearchBar from "./SearchBar";
import NameInfoInterface from "../interfaces/nameInfoInterface";
import NameButton from "./NameButton";
import NamesSection from "./NamesSection";

function BabyNamesApp(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };
  
  const [favNames, setFavNames] = useState<JSX.Element[]>([]) 
  const favouriteNames: NameInfoInterface[] = []

  const allNamesList: NameInfoInterface[]= [...rawNamesData].sort((a, b) => a.name.localeCompare(b.name));
  for (const nameInfo of allNamesList) {
    nameInfo['isFav'] = false;
  }

  const handleFavNames = () => {
    console.log('Hello');
    for (const nameInfo of allNamesList) {
      if (nameInfo.isFav === true) {
        nameInfo.isFav = false;
      } else {
        nameInfo.isFav = true;
      }
    }
    setFavNames(favNamesList)
  }

  const favNamesList = favouriteNames.map((name) => {
    if (name.isFav === true) {
      return (
        <NameButton
        key={name.id}
        nameInfo={name}
        handleFavNames={handleFavNames}
        />        
        );
      }
      return (<></>)
      
    })

  const nonFavNamesList = filterNames(allNamesList, inputValue).map((name) => {
    if (name.isFav === false) {
      return (
        <NameButton
          key={name.id}
          nameInfo={name}
          handleFavNames={handleFavNames}
        />        
    );
    }
    return (<></>)
  })

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar searchFor={inputValue} handleSearchUpdate={handleSearchUpdate} />
      <NamesSection displayHeading="Favourites" listOfNames={favNamesList} />
      <NamesSection displayHeading="All names" listOfNames={nonFavNamesList} />
    </>
  );
}

export default BabyNamesApp;
