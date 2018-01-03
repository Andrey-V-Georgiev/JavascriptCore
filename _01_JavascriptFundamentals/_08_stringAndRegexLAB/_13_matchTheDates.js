function findDates(text) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let match = regex.exec(text);
    while (match !== null) {
        let [allMatch, day, month, year] = match;
        console.log(`${allMatch} (Day: ${day}, Month: ${month}, Year: ${year})`);
        match = regex.exec(text);
    }
}

findDates(`I am born on 30-Dec-1994.
This is not date: 512-Jan-1996.
My father is born on the 29-Jul-1955.
`)