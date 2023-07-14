import NameButton from "./NameButton";
import rawNameData from "../data/namesData.json";
import filterNames from "../utils/filterNames";
import AllNamesProps from "../interfaces/allNamesProps"

function AllNames({inputValue, handleClick}: AllNamesProps): JSX.Element {
    const nameInfoList = [...rawNameData]

    nameInfoList.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            {filterNames(nameInfoList, inputValue).map((nameInfo) => {
    return (
      <NameButton
        key={nameInfo.id}
        name={nameInfo.name}
        sex={nameInfo.sex}
        />
    );
  })}
        </>
    )
}

export default AllNames;