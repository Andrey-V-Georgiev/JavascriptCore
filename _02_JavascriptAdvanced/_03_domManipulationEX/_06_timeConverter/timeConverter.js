function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', convertFromDays);
    let daysInput = document.getElementById('days');
    function convertFromDays() {
        let toSeconds = Number(daysInput.value) * 86400;
        convert(toSeconds);
    }

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', convertFromHours);
    let hoursInput = document.getElementById('hours');
    function convertFromHours() {
        let toSeconds = Number(hoursInput.value) * 3600;
        convert(toSeconds);
    }

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', convertFromMinutes);
    let minutesInput = document.getElementById('minutes');
    function convertFromMinutes() {
        let toSeconds = Number(minutesInput.value) * 60;
        convert(toSeconds);
    }

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', convertFromSeconds);
    let secondsInput = document.getElementById('seconds');
    function convertFromSeconds() {
        let toSeconds = Number(secondsInput.value);
        convert(toSeconds);
    }

    function convert(sec){
        let days = sec / 86400;
        let hours = sec / 3600;
        let minutes = sec / 60;
        daysInput.value = days.toString();
        hoursInput.value = hours.toString();
        minutesInput.value = minutes.toString();
        secondsInput.value = sec.toString();
    }
}
