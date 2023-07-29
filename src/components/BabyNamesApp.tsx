import { useState } from "react";
import rawNamesData from "../data/namesData.json";
import NameInfoInterface from "../interfaces/nameInfoInterface";
import filterNames from "../utils/filterNames";
import SearchBar from "./SearchBar";
import NameButton from "./NameButton";
import NamesSection from "./NamesSection";

function BabyNamesApp(): JSX.Element {
  const allNamesList: NameInfoInterface[] = [...rawNamesData];

  const [inputValue, setInputValue] = useState<string>("");
  const [favNames, setFavNames] = useState<NameInfoInterface[]>([]);
  const [nonfavNames, setNonFavNames] =
    useState<NameInfoInterface[]>(allNamesList);

  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };

  const handleNameClick = (clickedName: NameInfoInterface) => {
    if (favNames.includes(clickedName)) {
      setFavNames((prev) => prev.filter((name) => name.id !== clickedName.id));
      setNonFavNames((prev) => [...prev, clickedName]);
    } else {
      setFavNames((prev) => [...prev, clickedName]);
      setNonFavNames((prev) =>
        prev.filter((name) => name.id !== clickedName.id)
      );
    }
  };

  const favNameButtons = favNames.map((name) => {
    return (
      <NameButton key={name.id} nameInfo={name} handleClick={handleNameClick} />
    );
  });

  const nonFavNameButtons = filterNames(
    nonfavNames.sort((a, b) => a.name.localeCompare(b.name)),
    inputValue
  ).map((name) => {
    return (
      <NameButton key={name.id} nameInfo={name} handleClick={handleNameClick} />
    );
  });

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
