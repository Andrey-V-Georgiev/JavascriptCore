function extractComments(text){
    let strArr = [];
    let cStart = text.indexOf('(');
    let cEnd = text.indexOf(')', cStart);
    while(cStart > -1 && cEnd > -1){
        strArr.push(text.substring(++cStart,cEnd));
        cStart = text.indexOf('(', ++cStart);
        cEnd = text.indexOf(')', ++cEnd);
    }
    console.log(strArr.join(', '));
}

extractComments("Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)");
