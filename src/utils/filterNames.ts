import DataInterface from "../dataInterface";

function filterNames(nameList: DataInterface[], query: string) {
  query = query.toLowerCase();
  return nameList.filter((nameInfo) =>
    nameInfo.name
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query))
  );
}

export default filterNames;
