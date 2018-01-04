function townsToJSON(strArr) {
    strArr.shift();
    let townObjArr = [];
    for (let str of strArr) {
        let townTokens = str.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());

        let town = {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        }
        townObjArr.push(town);
    }
    console.log(JSON.stringify(townObjArr));
}

townsToJSON([
    `| Town | Latitude | Longitude |`,
    `| Sofia | 42.696552 | 23.32601 |`,
    `| Beijing | 39.913818 | 116.363625 |`
])