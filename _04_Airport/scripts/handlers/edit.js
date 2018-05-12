function edit(context) {
    if (support.isLogged()) {

        let flightId = context.params.flightId.substring(1);

        let destination = context.params.destination;
        let origin = context.params.origin;
        let departureDate = context.params.departureDate;
        let departureTime = context.params.departureTime;
        let seats = context.params.seats;
        let cost = context.params.cost;
        let img = context.params.img;
        let isPublished = context.params.public === undefined ? false : true;

        let url = urlMaker.editFlight(flightId);
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
        })
        let reqObj = requestMaker.putObj(url, auth, data);
        $.ajax(reqObj)
            .then(function(res) {
                notify.showInfo('Successfully edited flight.');
                window.history.back();
            })
            .catch(function (err) {
                notify.handleError(err);
                context.redirect('#/home');
            })

    } else {
        context.redirect('#/register')
    }
}