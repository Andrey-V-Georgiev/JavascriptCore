function countThePopulation(towns){
    let map = new Map();
    for (let town of towns) {
     let [name, population] = town.split(/\s+<->\s+/);
     map.has(name) ? map.set(name, map.get(name) + Number(population)) : map.set(name, Number(population));
    }
    [...map].forEach(([town, population]) => console.log(`${town} : ${population}`));
}

countThePopulation([
    `Sofia <-> 1200000`,
    `Montana <-> 20000`,
    `New York <-> 10000000`,
    `Washington <-> 2345000`,
    `Las Vegas <-> 1000000`,
]);