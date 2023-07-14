import NameInfoInterface from "../interfaces/nameInfoInterface";


function filterNames(nameList: NameInfoInterface[], query: string) {
    query = query.toLowerCase();
    return nameList.filter(nameInfo =>
        nameInfo.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
    ));
}

export default filterNames;