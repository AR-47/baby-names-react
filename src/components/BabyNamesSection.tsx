import data from "../data/babyNamesData.json";
import NameButton from "./NameButton";

function BabyNamesSection(): JSX.Element {
  data.sort((a, b) => a.name.localeCompare(b.name));

  const babyNameList = data.map((nameInfo) => {
    return (
      <NameButton key={nameInfo.id} name={nameInfo.name} sex={nameInfo.sex} />
    );
  });

  return (
    <>
      <hr />
      <h1>Baby Names</h1>
      {babyNameList}
      <hr />
    </>
  );
}

export default BabyNamesSection;
