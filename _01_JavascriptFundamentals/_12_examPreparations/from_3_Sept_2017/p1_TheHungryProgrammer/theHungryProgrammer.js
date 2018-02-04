function snatch(mealsLeft, commands) {
    let eatenMeals = 0;

    function serve() {
        if (mealsLeft.length > 0) {
            console.log(`${mealsLeft.pop()} served!`)
        }
    }

    function shift() {
        let [i1, i2] = [tokens[1], tokens[2]];
        if ((i1 && i2) >= 0 && (i1 && i2) < mealsLeft.length) {
            let oldValue = mealsLeft[i1];
            mealsLeft[i1] = mealsLeft[i2];
            mealsLeft[i2] = oldValue;
        }
    }

    function add() {
        if (tokens[1] !== undefined) {
            mealsLeft.unshift(tokens[1]);
        }
    }

    function eat() {
        if (mealsLeft.length > 0) {
            console.log(`${mealsLeft.shift()} eaten`);
            eatenMeals++;
        }
    }

    function consume() {
        let [i1, i2] = [tokens[1], tokens[2]];
        if ((i1 && i2) >= 0 && (i1 && i2) < mealsLeft.length) {
            eatenMeals += mealsLeft.splice(i1, (i2 - i1 + 1)).length;
            console.log('Burp!');
        }
    }

    function end() {
        console.log(mealsLeft.length > 0 ? `Meals left: ${mealsLeft.join(', ')}` : "The food is gone");
        console.log(`Meals eaten: ${eatenMeals}`);
    }

    for (let string of commands) {
        var tokens = string.split(' ');
        switch (tokens[0]) {
            case "Serve":
                serve();
                break;

            case "Add":
                add();
                break;

            case "Shift":
                shift();
                break;

            case "Eat":
                eat();
                break;

            case "Consume":
                consume();
                break;

            case "End":
                end();
                return;
        }
    }
}

snatch(['rice', 'eggs', 'wine', 'beer', 'chicken'], ['Eat', 'Serve', 'Serve', 'Serve', 'Add nuggets', 'End']);















