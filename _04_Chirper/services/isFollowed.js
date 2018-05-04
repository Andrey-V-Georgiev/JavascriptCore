async function isFollowed(author) {
    let mySubs = await mySubscriptions();

    if(mySubs.includes(author)) {
        return true;
    } else {
        return false;
    }
}