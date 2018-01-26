function usernames(arr){
    let usernames = new Set();
    for (let username of arr) {
        usernames.add(username);
    }
    let newSet = new Set( [...usernames].sort(
        (u1, u2) => {
            if(u1.toString().length < u2.toString().length){
                return -1;
            } else if(u1.toString().length > u2.toString().length){
                return 1;
            } else {
                if(u1 < u2){
                    return -1;
                } else if(u1 > u2){
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    ));

    for (let username of newSet) {
        console.log(username);
    }
}

usernames([
    "Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);
