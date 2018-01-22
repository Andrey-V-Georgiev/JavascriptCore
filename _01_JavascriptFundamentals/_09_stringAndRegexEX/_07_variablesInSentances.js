function extract(string){
    let regex = new RegExp("(?<!_|^)_([a-zA-Z0-9]+)(?=$| )", "g");
    let array = [];
    let match = regex.exec(string);
    while(match !== null){
        array.push(match[1]);
        match = regex.exec(string);
    }
    console.log(array.join(','));
}

extract('__invalidVariable _evenMoreInvalidVariable_ _validVariable');