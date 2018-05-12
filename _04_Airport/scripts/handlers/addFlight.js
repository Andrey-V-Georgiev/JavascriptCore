function addFlight(context) {
    if(support.isLogged()) {
        let destination = context.params.destination;
        let origin = context.params.origin;
        let departureDate = context.params.departureDate;
        let departureTime = context.params.departureTime;
        let seats = Number(context.params.seats);
        let cost = Number(context.params.cost);
        let img = context.params.img;
        let isPublished = context.params.public === undefined ? false : true;

        if(!/[\w]/.exec(destination) || destination.length === 0) {
            notify.showError('Destination must be non empty string!')
            context.redirect('#/addFlight')
        } else if(!/[\w]/.exec(origin) || origin.length === 0) {
            notify.showError('Origin must be non empty string!')
            context.redirect('#/addFlight')
        }else if(seats <= 0 ) {
            notify.showError('Seats must be positive number!')
            context.redirect('#/addFlight')
        } else if(cost <= 0) {
            notify.showError('Cost must be positive number!')
            context.redirect('#/addFlight')
        } else {
            let url = urlMaker.createFlight();
            let auth = support.kinveyAuth();
            let data = JSON.stringify({
                destination: destination,
                origin: origin,
                departure: departureDate,
                departureTime: departureTime,
                seats: seats,
                cost: cost,
                image: img,
                isPublished: isPublished
            });
            let reqObj = requestMaker.postObj(url, auth, data);

            $.ajax(reqObj)
                .then(function () {
                    notify.showInfo('Created flight.');
                    context.redirect('#/home');
                })
                .catch(function (err) {
                    notify.handleError(err);
                    context.redirect('#/home');
                })
        }

    }else {
        context.redirect('#/register');
    }

}