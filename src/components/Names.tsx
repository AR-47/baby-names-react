import { useState } from "react";
import SearchBar from "./SearchBar";
import rawNameData from "../data/namesData.json";
import NameButton from "./NameButton";
import filterNames from "../utils/filterNames";
import FavNames from "./FavNames";
import NameInfoInterface from "../interfaces/nameInfoInterface";

function Names(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  
  const [favNames, setFavNames] = useState<NameInfoInterface[]>([]);

  const handleSearchUpdate = (enteredText: string) => {
    setInputValue(enteredText);
  };
 
  const nameInfoList = [...rawNameData]

  nameInfoList.sort((a, b) => a.name.localeCompare(b.name));

  const allNamesButtonList = filterNames(nameInfoList, inputValue).map((nameInfo) => {
    return (
      <NameButton key={nameInfo.id} name={nameInfo.name} sex={nameInfo.sex} />
    );
  });

  return (
    <>
      <h1>Baby Names</h1>
      <SearchBar value={inputValue} onChange={handleSearchUpdate} />
      <hr />
      {allNamesButtonList}
      <hr />
      <FavNames/>
    </>
  );
}

export default Names;
