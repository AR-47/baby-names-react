import { SetStateAction, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import data from "../data/namesData.json";
import NameButton from "./NameButton";
import filterNames from "../utils/filterNames";

function BabyNamesSection(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  data.sort((a, b) => a.name.localeCompare(b.name));

  const filteredNameList = filterNames(data, inputValue).map((nameInfo) => {
    return (
      <NameButton key={nameInfo.id} name={nameInfo.name} sex={nameInfo.sex} />
    );
  });

  return (
    <>
      <SearchBar value={inputValue} onChange={handleSearchUpdate} />
      <hr />
      <h1>Baby Names</h1>
      {filteredNameList}
      <hr />
    </>
  );
}

export default BabyNamesSection;
