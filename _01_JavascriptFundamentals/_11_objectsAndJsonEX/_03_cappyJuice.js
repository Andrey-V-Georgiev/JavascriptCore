function bottling(arr) {
    let map = new Map();
    let sequence = new Set();
    for (let str of arr) {
        let juice = str.split('=>').map(x => x.trim());
        let name = juice[0];
        let quantity = Number(juice[1]);
        if (map.has(name)) {
            if(quantity + map.get(name) >= 1000){
                sequence.add(name);
            }
            map.set(name, quantity + map.get(name));
        } else {
            if(quantity >= 1000){
                sequence.add(name);
            }
            map.set(name, quantity);
        }
    }

    for (let key of sequence) {
        if(map.get(key) >= 1000){
            let bottles = map.get(key) / 1000;
            console.log(`${key} => ${Math.floor(bottles)}`);
        }
    }
}
bottling([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789"
]);







