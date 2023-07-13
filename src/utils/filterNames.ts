import NameInfoInterface from "../interfaces/nameInfoProps";

function filterNames(nameInfoList: NameInfoInterface[], query: string) {
  query = query.toLowerCase();
  return nameInfoList.filter((nameInfo) =>
    nameInfo.name
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query))
  );
}

export default filterNames;

// recreate this function myself