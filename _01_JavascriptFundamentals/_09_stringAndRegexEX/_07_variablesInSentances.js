function extract(string){
    let regex = new RegExp("(?<!_)_([a-zA-Z0-9]+)(?=$|\\w|[^_])", "g");
    let array = [];
    let match = regex.exec(string);
    while(match !== null){
        array.push(match[1]);
        match = regex.exec(string);
    }
    console.log(array.join(','));
}

extract('_test_003_out_txt');