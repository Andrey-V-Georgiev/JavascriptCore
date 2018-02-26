function checkWorker(worker){
    if(worker.handsShaking === true){
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }
    return worker;
}

let worker = { weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false };



console.log(checkWorker(worker));