function sortTickets(strArr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let compareStrategies = {
        sortByDestination: function (a, b) {
            return a.destination.localeCompare(b.destination);
        },
        sortByPrice: function (a, b) {
            return a.price - b.price;
        },
        sortByStatus: function (a, b) {
            return a.status.localeCompare(b.status);
        }
    };

    let ticketArr = [];
    for (let data of strArr) {
        let [destination, price, status] = data.split('|').map(x => x.trim());
        let newTicket = new Ticket(destination, price, status);
        ticketArr.push(newTicket);
    }

    switch(criteria){
        case 'destination':
            ticketArr.sort(compareStrategies.sortByDestination);
            break;
        case 'price':
            ticketArr.sort(compareStrategies.sortByPrice);
            break;
        case 'status':
            ticketArr.sort(compareStrategies.sortByStatus);
            break;
    }
    return ticketArr;
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|available',
        'Philadelphia|132.20|departed',
        'Chicago|140.20|available',
        'Dallas|144.60|sold',
        'New York City|206.20|sold',
        'New York City|240.20|departed',
        'New York City|305.20|departed'],
    'price'
));