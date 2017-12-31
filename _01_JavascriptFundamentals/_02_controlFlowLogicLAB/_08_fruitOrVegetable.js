function vegetableCheck(str) {

    if (str === ("banana") || str === ("apple") || str === ("kiwi")
        || str === ("cherry") || str === ("lemon") || str === ("grapes") || str === ("peach")) {
        console.log("fruit");
    } else if (str === ('tomato') || str === ('cucumber') || str === ('pepper')
        || str === ('onion') || str === ('garlic') || str === ('parsley')) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}