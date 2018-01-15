function composeTag(arr){
    let first = '<img src="';
    let second = '" alt="';
    let third = '">';
    console.log(`${first}${arr[0]}${second}${arr[1]}${third}`);
}

composeTag(['smiley.gif', 'Smiley Face']);