function multiplyTheNumbers(text){
    let sentencesArr = text.split(';');
    let productArr = [];
    let regex = /(-*\d+)\s*\*\s*(-*\d\.*\d*)/;
    for (let sentence of sentencesArr) {
        let [allMatch, group1, group2] = regex.exec(sentence);
        let currentProduct = Number(group1) * Number(group2);
        productArr.push(sentence.replace(`${allMatch}`,`${currentProduct}`));
    }
    console.log(productArr.join(';'));
}

multiplyTheNumbers(`My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).`);