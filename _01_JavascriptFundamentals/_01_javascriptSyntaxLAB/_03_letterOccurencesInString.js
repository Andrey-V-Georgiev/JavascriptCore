function occurrences(word, letter){
    let occ = 0;
    for (let i = 0; i < word.length; i++) {
        if(word[i] == letter){
            occ++;
        }
    }
    console.log(occ);
}

occurrences('hello', 'l');