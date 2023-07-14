import { useState } from "react";
import SearchBar from "./SearchBar";
import rawNameData from "../data/namesData.json";
import NameButton from "./NameButton";
import filterNames from "../utils/filterNames";

function BabyNamesApp(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  
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
    </>
  );
}

export default BabyNamesApp;
