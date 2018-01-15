function checkPrice(arr){
    let title = arr[0].toLowerCase();
    let dayOfWeek = arr[1].toLowerCase();
    let ticketPrice = '';

    if(title === "the godfather"){
        switch(dayOfWeek){
            case 'monday':
                ticketPrice = 12;
                break;
            case 'tuesday':
                ticketPrice = 10;
                break;
            case 'wednesday':
                ticketPrice = 15;
                break;
            case 'thursday':
                ticketPrice = 12.50;
                break;
            case 'friday':
                ticketPrice = 15;
                break;
            case 'saturday':
                ticketPrice = 25;
                break;
            case "sunday":
                ticketPrice = 30;
                break;
            default:
                ticketPrice = 'error';
                break
        }
    } else if(title === "schindler's list") {
        switch(dayOfWeek){
            case 'monday':
                ticketPrice = 8.50;
                break;
            case 'tuesday':
                ticketPrice = 8.50;
                break;
            case 'wednesday':
                ticketPrice = 8.50;
                break;
            case 'thursday':
                ticketPrice = 8.50;
                break;
            case 'friday':
                ticketPrice = 8.50;
                break;
            case 'saturday':
                ticketPrice = 15;
                break;
            case "sunday":
                ticketPrice = 15;
                break;
            default:
                ticketPrice = 'error';
                break
        }
    } else if(title === "casablanca") {
        switch(dayOfWeek){
            case 'monday':
                ticketPrice = 8;
                break;
            case 'tuesday':
                ticketPrice = 8;
                break;
            case 'wednesday':
                ticketPrice = 8;
                break;
            case 'thursday':
                ticketPrice = 8;
                break;
            case 'friday':
                ticketPrice = 8;
                break;
            case 'saturday':
                ticketPrice = 10;
                break;
            case "sunday":
                ticketPrice = 10;
                break;
            default:
                ticketPrice = 'error';
                break
        }
    } else if (title === "the wizard of oz") {
        switch(dayOfWeek){
            case 'monday':
                ticketPrice = 10;
                break;
            case 'tuesday':
                ticketPrice = 10;
                break;
            case 'wednesday':
                ticketPrice = 10;
                break;
            case 'thursday':
                ticketPrice = 10;
                break;
            case 'friday':
                ticketPrice = 10;
                break;
            case 'saturday':
                ticketPrice = 15;
                break;
            case "sunday":
                ticketPrice = 15;
                break;
            default:
                ticketPrice = 'error';
                break
        }
    } else {
        ticketPrice = 'error';
    }
    console.log(ticketPrice);
}