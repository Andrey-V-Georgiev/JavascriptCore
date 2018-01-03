function splitAllWords(text){
    let words = text.split(/\W+/ ).filter(e=> e!= '');
    console.log(words.join('|'));
}

splitAllWords('Some random words and letters and other things. In a sentence, also there' +
    ' are some signs like + or ? Sentences can also have semicolons; or dots. and !'
)