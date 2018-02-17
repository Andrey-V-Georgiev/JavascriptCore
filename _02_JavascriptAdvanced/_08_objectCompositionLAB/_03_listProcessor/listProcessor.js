function commandsProcessor(stringArray){
    let  functionSwitcher = (function(){
        let wordArray = [];
        return {
            add: (newWord) => wordArray.push(newWord),
            remove: (wordForRemove) => wordArray = wordArray.filter(element => element !== wordForRemove),
            print: () => console.log(wordArray)
        }
    })();

    for (let string of stringArray) {
        let [command, argument] = string.split(' ');
        functionSwitcher[command](argument);
    }
}

commandsProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);