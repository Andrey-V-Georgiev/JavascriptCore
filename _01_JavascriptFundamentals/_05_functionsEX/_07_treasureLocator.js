function locateTreasure(arr) {
    let tokelau = {xS: 8, xE: 9, yS: 0, yE: 1};
    let tuvalu = {xS: 1, xE: 3, yS: 1, yE: 3};
    let samoa = {xS: 5, xE: 7, yS: 3, yE: 6};
    let tonga = {xS: 0, xE: 2, yS: 6, yE: 8};
    let cook = {xS: 4, xE: 9, yS: 7, yE: 8};

    function searchIslands(x, y) {
        if (x >= tokelau.xS && x <= tokelau.xE && y >= tokelau.yS && y <= tokelau.yE) {
            return 'Tokelau';
        } else if (x >= tuvalu.xS && x <= tuvalu.xE && y >= tuvalu.yS && y <= tuvalu.yE) {
            return 'Tuvalu';
        } else if (x >= samoa.xS && x <= samoa.xE && y >= samoa.yS && y <= samoa.yE) {
            return 'Samoa';
        } else if (x >= tonga.xS && x <= tonga.xE && y >= tonga.yS && y <= tonga.yE) {
            return 'Tonga';
        } else if (x >= cook.xS && x <= cook.xE && y >= cook.yS && y <= cook.yE) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }

    for (let i = 0; i < arr.length; i += 2) {
        let x = arr[i];
        let y = arr[i + 1];
        console.log(searchIslands(x, y));
    }
}

locateTreasure([4, 2, 1.5, 6.5, 1, 3])