function timer() {
    let hoursE = $('#hours');
    let minutesE = $('#minutes');
    let secondsE = $('#seconds');
    let allSec = 0;
    let timer;
    $('#start-timer').click(function () {
        timer = setInterval(step, 1000);
    });
    $('#stop-timer').click(function () {
        clearInterval(timer)
    });
    function step() {
        allSec++;
        let hours = allSec / 3600;
        let hoursRest = allSec % 3600;
        let minutes = hoursRest / 60;
        let seconds = hoursRest % 60;
        hoursE.text(('0' + Math.floor(hours)).slice(-2));
        minutesE.text(('0' + Math.floor(minutes)).slice(-2));
        secondsE.text(('0' + Math.floor(seconds)).slice(-2));
    }
}
