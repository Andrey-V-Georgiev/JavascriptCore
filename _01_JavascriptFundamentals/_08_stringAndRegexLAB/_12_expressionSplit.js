function splitBySymbols(text) {
    let regex = /[\s\(\)\.\,\;]+/;
    let strArr = text.split(regex).filter(x => x != '');
    for (let str of strArr) {
        console.log(str);
    }
}

splitBySymbols('let sum = 4 * 4,b = "wow";');