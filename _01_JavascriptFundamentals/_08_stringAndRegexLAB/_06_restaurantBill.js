function calcTheBill(arr){
    let purchasedProducts = arr.filter((e, i) => i % 2 == 0);
    let totalSum = arr.filter((e, i) => i % 2 != 0).map(Number).reduce((a, b) => a + b);
    console.log(`You purchased ${purchasedProducts.join(', ')} for a total sum of ${totalSum}`);
}

calcTheBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
