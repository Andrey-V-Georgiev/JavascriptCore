function countWords(text){
    let map = new Map();
    let words = text[0].split(/\W+/).filter(e => e != '').map(e => e.toLowerCase());
    for (let word of words) {
        map.has(word) ? map.set(word, map.get(word) + 1) :  map.set(word, 1);
    }
    [...map.keys()].sort().forEach(e => console.log(`'${e}' -> ${map.get(e)} times`));
}

countWords([`Far too slow, you're far too slow.`]);
