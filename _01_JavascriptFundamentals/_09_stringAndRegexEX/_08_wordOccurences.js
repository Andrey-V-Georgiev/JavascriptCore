function inspect(string, key) {
    let regex = new RegExp("(?<=^|\\W)" + key + "(?=$|\\W)", "gi");
    let count = 0;
    try {
        count = string.match(regex).length;
    } catch (err) {
    }
    console.log(count);
}

inspect('How do you plan on achieving that? How? How can you even think of that?', 'how');