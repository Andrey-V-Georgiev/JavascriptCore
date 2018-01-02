function extractCitiesData(towns) {
    let names = [];
    let sum = 0;
    for (let town of towns) {
        let currentArr = town.split('|').filter(e => e != "");
        let cityName = currentArr[0].trim();
        let cityIncome = Number(currentArr[1].trim());
        names.push(cityName);
        sum += cityIncome;
    }
    console.log(names.join(', '));
    console.log(sum);
}

extractCitiesData([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
])
