function countWords(text){
    let map = {};
    let words = text[0].split(/\W+/).filter(e => e != '');
    for (let word of words) {
        if(!map.hasOwnProperty(word)){
            map[word] = 1;
        } else {
            map[word]++;
        }
    }
    console.log(JSON.stringify(map));
}

countWords([`Far too slow, you're far too slow.`]);
