function systemComponents(array) {
    let unsortedSystemMap = new Map();

    for (let line of array) {
        let [systemName, componentName, subcomponentName] = line.split('|').map(e => e.trim());
        if (!unsortedSystemMap.has(systemName)) {
            unsortedSystemMap.set(systemName, new Map().set(componentName, [subcomponentName]))
        } else {
            if (!unsortedSystemMap.get(systemName).has(componentName)) {
                unsortedSystemMap.get(systemName).set(componentName, [subcomponentName]);
            } else {
                unsortedSystemMap.get(systemName).get(componentName).push(subcomponentName);
            }
        }
    }


    let systemMap = new Map([...unsortedSystemMap.entries()]
        .sort(
            (systemOne, systemTwo) => {
                let [nameSystemOne, componentsOne] = systemOne;
                let [nameSystemTwo, componentTwo] = systemTwo;
                if (componentsOne.size < componentTwo.size) {
                    return 1;
                } else if (componentsOne.size > componentTwo.size) {
                    return -1;
                } else {
                    if (nameSystemOne < nameSystemTwo) {
                        return -1;
                    } else if (nameSystemOne > nameSystemTwo) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        ));


    for (let entry of systemMap) {
        let [systemName, components] = entry;
        console.log(systemName);
        for (let pair of components) {
            let [componentName, subcomponents] = pair;
            console.log(`|||${componentName}`);
            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}
//
// systemComponents([
//     // "B  | AA | AAA",
//     // "B  | AA | CCC",
//     // "B  | BB | DDD",
//     // "B  | BB | BBB",
//     // "B  | BB | ZZZ",
//
//     // "A  | BB | AAA",
//     "A  | BB | DDD",
//     "A  | BB | BBB",
//     "A  | AA | CCC",
//     "A  | AA | DDD",
//     "A  | AA | DDD",
//
//     // "C  | BB | AAA",
//     // "C  | BB | DDD",
//     // "C  | AA | CCC",
//     //"C  | AA | BBB"
// ]);

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
