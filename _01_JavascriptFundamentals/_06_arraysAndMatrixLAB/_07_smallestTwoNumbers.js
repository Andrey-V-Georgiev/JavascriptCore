function takeSmallestTwo(arr) {
    console.log(arr.sort((a, b) => a - b).splice(0, 2).join(' '));
}

takeSmallestTwo([30, 15, 50, 5]);