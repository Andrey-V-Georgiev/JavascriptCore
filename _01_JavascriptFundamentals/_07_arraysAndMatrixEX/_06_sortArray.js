function sortArray(arr) {

    arr.sort(function sortByTwoCriteria(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    for (let e of arr) {
        console.log(e);
    }
}

sortArray(['alpha', 'beta', 'gamma']);