function crypting(arr){
    let nameRegex = new RegExp('(\\*)([A-Z][a-zA-Z]*)(?=\\s|$)','gm');
    let phoneRegex = new RegExp('(\\+)([\\d-]{10})(?=\\s|$)','gm');
    let idRegex = new RegExp('(\\!)([a-zA-Z0-9]+)(?=\\s|$)','gm');
    let baseRegex = new RegExp('(\\_)([a-zA-Z0-9]+)(?=\\s|$)','gm');
    let patterns = [nameRegex, phoneRegex, idRegex, baseRegex];
    let results = [];

    for (let text of arr) {
        for (let regex of patterns) {
            let match = regex.exec(text);
            while(match !== null){
                text = text.replace(regex, replacer);
                match = regex.exec(text);
            }
        }
        results.push(text);
    }

    for (let result of results) {
        console.log(result);
    }

    function replacer(match, gr1, gr2){
        return '|'.repeat(gr1.length + gr2.length);
    }
}

crypting(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
    ]);