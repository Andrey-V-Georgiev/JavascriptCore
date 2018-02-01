function printDeckOfCards(stringArr) {
    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face')
        }
        if (!validSuits.includes(suit)) {
            throw new Error('Invalid suit');
        }
        let card = {
            face: face,
            suit: suit,
            toString: () => {
                let suitToChar = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663",
                };
                return `${card.face}${suitToChar[card.suit]}`
            }
        };
        return card;
    }
    let deck = [];
    for (let cardsAsString of stringArr) {
        let suit = cardsAsString.slice(cardsAsString.length - 1);
        let face = cardsAsString.slice(0, cardsAsString.length - 1);
        try {
            deck.push(makeCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${cardsAsString}`);
            return;
        }
    }
    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['AS', '10D', 'ZH', '2C']);


