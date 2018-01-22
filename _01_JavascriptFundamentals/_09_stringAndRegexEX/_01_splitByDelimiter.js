function split(string, delimiter){
    let strArr = string.split(delimiter);
    for (let e of strArr) {
        console.log(e);
    }
}

split('One-Two-Three-Four-Five', '-');