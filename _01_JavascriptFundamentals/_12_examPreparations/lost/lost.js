function decipher(keyword, text){
    let msgRegExp = new RegExp(`(?<=${keyword}).+(?=${keyword})`,"gim");
    let regExp = new RegExp('(north|east)\\D*(\\d{2})[^,]*(,)\\D*(\\d{6})','gi');
    let message = 'Message: ' + msgRegExp.exec(text)[0];

    let northArr = [];
    let eastArr = [];

    let match = regExp.exec(text);
    while(match !== null){
        if(match[1].toLowerCase() === 'north'){
            northArr.push(`${match[2]}.${match[4]} N`);
        } else {
            eastArr.push(`${match[2]}.${match[4]} E`);
        }
        match = regExp.exec(text);
    }

    console.log(northArr.reverse()[0]);
    console.log(eastArr.reverse()[0]);
    console.log(message);
}

decipher('&amp',
    '(&ampThe only time to eat diet food is while you\'re waiting for the steak to cook&amp(east)(23),(234567)\tNORTH\n' +
    '48,(((543678');
