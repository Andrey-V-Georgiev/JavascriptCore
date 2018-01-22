function capitalize(string){
    let strArr = string.split(' ');
    let newStrArr = [];
    for (let word of strArr) {
        let front = word.substring(0, 1);
        let back = word.substring(1);
        newStrArr.push(word.replace(front, front.toUpperCase()).replace(back, back.toLowerCase()));
    }
    console.log(newStrArr.join(' '));
}

capitalize('Was that Easy? tRY thIs onE for SiZe!');

