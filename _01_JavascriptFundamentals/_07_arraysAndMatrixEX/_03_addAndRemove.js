function addAndRemove(commands) {
    let list = [];
    for (let i = 1; i <= commands.length; i++) {
        if (commands[i-1] === 'add') {
            list.push(i);
        } else {
            list.pop();
        }
    }

    list.length === 0 ? console.log('Empty') : `${list.forEach(e=> console.log(e))}`;
}

addAndRemove(['remove']);