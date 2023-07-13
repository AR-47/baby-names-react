import NameInfoInterface from "../interfaces/nameInfoInterface";

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