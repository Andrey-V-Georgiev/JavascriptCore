function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    let obj1 = {name: firstName, age: firstAge};
    let obj2 = {name: secondName, age: secondAge};
    if (obj1.age >= minAge) {
        console.log(obj1);
    }
    if (obj2.age >= minAge) {
        console.log(obj2);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);
