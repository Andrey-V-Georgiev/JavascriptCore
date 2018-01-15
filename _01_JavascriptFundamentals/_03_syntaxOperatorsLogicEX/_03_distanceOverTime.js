function diffInMeters(arr){
    let speed1 = Number(arr[0]);
    let speed2 = Number(arr[1]);
    let timeInSeconds = Number(arr[2]);
    let distance1 = speed1 * timeInSeconds;
    let distance2 = speed2 * timeInSeconds;
    let diffInMeters = Math.abs(distance1 - distance2) * (5/18);
    console.log(diffInMeters);
}

diffInMeters([0, 60, 3600]);