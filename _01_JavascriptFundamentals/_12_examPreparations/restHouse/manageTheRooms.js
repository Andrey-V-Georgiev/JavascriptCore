function manageTheRooms(freeRooms, guests) {

    let teaHouse = [];
    let doubleRooms = freeRooms.filter(r => r.type === 'double-bedded');
    doubleRooms.forEach((r) => r['emptyBeds'] = 2);
    doubleRooms.forEach((r) => r['guests'] = []);

    let tripleRooms = freeRooms.filter(r => r.type === 'triple');
    tripleRooms.forEach((r) => r['emptyBeds'] = 3);
    tripleRooms.forEach((r) => r['guests'] = []);


    for (let pair of guests) {
        let [first, second] = [pair.first, pair.second];
        if (first.gender !== second.gender) {
            if (doubleRooms.filter((r) => r.emptyBeds === 2).length > 0) {
                doubleRooms.filter((r) => r.emptyBeds === 2)[0].guests.push(first);
                doubleRooms.filter((r) => r.emptyBeds === 2)[0].guests.push(second);
                doubleRooms.filter((r) => r.emptyBeds === 2)[0].emptyBeds = 0;
            }
        } else if (first.gender === second.gender) {
            if (tripleRooms.filter((r) => r.emptyBeds === 3).length > 0) {
                tripleRooms.filter((r) => r.emptyBeds === 3)[0].guests.push(first);
                tripleRooms.filter((r) => r.emptyBeds === 3)[0].guests.push(second);
                tripleRooms.filter((r) => r.emptyBeds === 3)[0]['gender'] = first.gender;
                tripleRooms.filter((r) => r.emptyBeds === 3)[0].emptyBeds = 1;
            } else if (tripleRooms.filter((r) => r.emptyBeds === 1).length > 0) {
                if (tripleRooms.filter((r) => r.emptyBeds === 1 && r.gender === first.gender).length > 0) {
                    tripleRooms.filter((r) => r.emptyBeds === 1).reverse()[0].guests.push(first);
                    tripleRooms.filter((r) => r.emptyBeds === 1).reverse()[0].emptyBeds = 0;

                } else {
                    teaHouse.push(first);
                }

                if (tripleRooms.filter((r) => r.emptyBeds === 1 && r.gender === second.gender).length > 0) {
                    tripleRooms.filter((r) => r.emptyBeds === 1).reverse()[0].guests.push(second);
                    tripleRooms.filter((r) => r.emptyBeds === 1).reverse()[0].emptyBeds = 0;
                } else {
                    teaHouse.push(second);
                }
            } else {
                teaHouse.push(first);
                teaHouse.push(second);
            }

        }
    }
    let allRooms = doubleRooms.concat(tripleRooms).sort((r1, r2) => {
        if (r1.number > r2.number) {
            return 1;
        } else if (r1.number < r2.number) {
            return -1;
        } else {
            return 0;
        }
    });
    for (let room of allRooms) {
        console.log(`Room number: ${room.number}`);
        room.guests.sort((g1, g2) => {
            if (g1.name > g2.name) {
                return 1;
            } else if (g1.name < g2.name) {
                return -1;
            } else {
                return 0;
            }
        });
        for (let guest of room.guests) {
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
        }
        console.log(`Empty beds in the room: ${room.emptyBeds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouse.length}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
manageTheRooms(
    [{"number": "428", "type": "triple"},
        {"number": "161", "type": "triple"},
        {"number": "242", "type": "double-bedded"},
        {"number": "537", "type": "triple"}],

    [{
        "first": {"name": "Nina Diaz", "gender": "female", "age": 29},
        "second": {"name": "Carol Hansen", "gender": "female", "age": 6}
    },
        {
            "first": {"name": "Georgia Thomas", "gender": "female", "age": 38},
            "second": {"name": "Freddie Harmon", "gender": "male", "age": 46}
        },
        {
            "first": {"name": "Freddie Harmon", "gender": "male", "age": 30},
            "second": {"name": "Jesus Terry", "gender": "male", "age": 64}
        },
        {
            "first": {"name": "Tracy Reid", "gender": "male", "age": 41},
            "second": {"name": "Jordan Garner", "gender": "male", "age": 16}
        },
        {
            "first": {"name": "Kara Burns", "gender": "female", "age": 7},
            "second": {"name": "Marjorie Butler", "gender": "female", "age": 28}
        }]
);