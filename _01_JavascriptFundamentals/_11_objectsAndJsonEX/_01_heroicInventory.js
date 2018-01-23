function inventory(arr) {
    let database = [];
    for (let hero of arr) {
        let heroArr = hero.split('/').map(e => e.trim());
        let name = heroArr[0];
        let level = Number(heroArr[1]);
        let items = heroArr[2].split(',').map(e => e.trim());
        let heroObject = {
            name: name,
            level: level,
            items: items
        };
        database.push(heroObject);
    }

    console.log(JSON.stringify(database));

}


inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);