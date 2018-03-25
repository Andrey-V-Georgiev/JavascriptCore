$(document).ready(function attachEvents() {  //submit in judge without $(document).ready(....)
    $('#submit').click(getLocationData);
    const LOCATION_INPUT_EL = $('#location');
    const FORECAST_DIV = $('#forecast');
    const CURRENT_DIV = $('#current');
    const UPCOMING_DIV = $('#upcoming');

    function getLocationData() {
        $.ajax({
            method: 'GET',
            url: 'https://judgetests.firebaseio.com/locations.json',
        }).then(findLocationObject).catch(showError);
    }

    function showError(err) {
        FORECAST_DIV.empty()
            .append($('<span>').text('ERROR!'))
    }

    function findLocationObject(res) {
        let submittedLocation = LOCATION_INPUT_EL.val();
        let currentConditions = null;
        let threeDayForecast = null;

        for (let location of res) {
            let locationName = location['name'];
            let locationCode = location['code'];
            if (submittedLocation === locationName) {
                currentConditions = $.ajax({
                    method: 'GET',
                    url: `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`
                });
                threeDayForecast = $.ajax({
                    method: 'GET',
                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`
                });
            }
        }
        Promise.all([currentConditions, threeDayForecast]).then(composeForecast).catch(showError);
    }

    function composeForecast(arrRes) {
        FORECAST_DIV.show();
        let currentData = arrRes[0];
        let currentLolTemp = currentData['forecast']['low'];
        let currentHighTemp = currentData['forecast']['high'];
        let currentTempDiff = `${currentLolTemp}${'&#176;'}/${currentHighTemp}${'&#176;'}`;
        let currentIcon = getIcon(currentData['forecast']['condition']);
        CURRENT_DIV.empty()
            .append($('<span>').addClass('condition symbol').html(currentIcon))
            .append($('<span>').addClass('condition')
                .append($('<span>').addClass('forecast-data').text(`${currentData['name']}`))
                .append($('<span>').addClass('forecast-data').html(currentTempDiff))
                .append($('<span>').addClass('forecast-data').text(`${currentData['forecast']['condition']}`))
            );

        let upcomingDataArr = arrRes[1]['forecast'];
        UPCOMING_DIV.empty();
        for (let position of upcomingDataArr) {
            let icon = getIcon(position['condition']);
            let lowTemp = position['low'];
            let highTemp = position['high'];
            let dayDiff = `${lowTemp}${'&#176;'}/${highTemp}${'&#176;'}`;
            UPCOMING_DIV
                .append($('<span>').addClass('upcoming')
                    .append($('<span>').addClass('symbol').html(icon))
                    .append($('<span>').addClass('forecast-data').html(dayDiff))
                    .append($('<span>').addClass('forecast-data').text(position['condition']))
                )
        }
    }

    function getIcon(condition) {
        switch (condition) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
        }
    }
});