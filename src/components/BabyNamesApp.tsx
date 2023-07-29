import { useState } from "react";
import filterNames from "../utils/filterNames";
import rawNamesData from "../data/namesData.json";
import SearchBar from "./SearchBar";
import NameInfoInterface from "../interfaces/nameInfoInterface";
import NameButton from "./NameButton";
import NamesSection from "./NamesSection";

function BabyNamesApp(): JSX.Element {
  const allNamesList: NameInfoInterface[] = [...rawNamesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [favNames, setFavNames] = useState<NameInfoInterface[]>([]);

  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };

  const handleNameClick = (clickedName: NameInfoInterface) => {
    const idOfClickedName = allNamesList.findIndex(
      (currentName) => currentName.id === clickedName.id
    );

    console.log(
      `${clickedName.name}'s isFav property before clicking is: ${clickedName.isFav}`
    );

    allNamesList.find((name) => {
      if (name.id === idOfClickedName) {
        name.isFav = name.isFav === true ? false : true;
      }
    });

    if (favNames.includes(clickedName)) {
      setFavNames((prev) => prev.filter((name) => name.id !== clickedName.id));
    } else {
      allNamesList.splice(
        allNamesList.findIndex((name) => name.id === idOfClickedName),
        1
      );
      setFavNames((prev) => [...prev, clickedName]);
    }
    console.log(
      `${clickedName.name}'s isFav property after clicking is: ${
        allNamesList.find((name) => name.id === idOfClickedName)!.isFav
      }`
    );
  };

  for (const nameInfo of allNamesList) {
    nameInfo["isFav"] = false;
  }

  const favNameButtons = favNames.map((name) => {
    return (
      <NameButton key={name.id} nameInfo={name} handleClick={handleNameClick} />
    );
  });

  const nonFavNameButtons = filterNames(allNamesList, inputValue).map(
    (name) => {
      if (name.isFav === false) {
        return (
          <NameButton
            key={name.id}
            nameInfo={name}
            handleClick={handleNameClick}
          />
        );
      }
      return <></>;
    }
  );

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar
        searchFor={inputValue}
        handleSearchUpdate={handleSearchUpdate}
      />
      <NamesSection displayHeading="Favourites" listOfNames={favNameButtons} />
      <NamesSection
        displayHeading="All names"
        listOfNames={nonFavNameButtons}
      />
    </>
  );
}

export default BabyNamesApp;
