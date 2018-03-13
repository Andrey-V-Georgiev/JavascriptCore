(function() {
    let id = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        weatherStatus() {
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                return 'Stormy';
            } else {
                return 'Not stormy';
            }
        }

        toString() {
            return `Reading ID: ${this.id}` +
                `\nTemperature: ${this.temperature}*C` +
                `\nRelative Humidity: ${this.humidity}%` +
                `\nPressure: ${this.pressure}hpa` +
                `\nWind Speed: ${this.windSpeed}m/s` +
                `\nWeather: ${this.weatherStatus()}`
        }
    }
})();


let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

