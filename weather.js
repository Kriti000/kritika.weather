
const weatherData = {
    "New Delhi": {
        temperature: 22,
        humidity: 65,
        windSpeed: 10
    },
    "Uttar Pradeh": {
        temperature: 28,
        humidity: 60,
        windSpeed: 8
    },
    "Madhya Pradesh": {
        temperature: 18,
        humidity: 70,
        windSpeed: 12
    },
    "Shimla": {
        temperature: 30,
        humidity: 75,
        windSpeed: 15
    },
    "Gujrat": {
        temperature: 32,
        humidity: 80,
        windSpeed: 20
    }
};

function searchWeather() {
    const locationInput = document.getElementById('location-input').value.trim();
    
    if (locationInput) {
        const weatherInfo = weatherData[locationInput];

        if (weatherInfo) {
            document.getElementById('temperature').textContent = weatherInfo.temperature;
            document.getElementById('humidity').textContent = weatherInfo.humidity;
            document.getElementById('wind-speed').textContent = weatherInfo.windSpeed;
        } else {
            alert("Weather data for this location is not available.");
            document.getElementById('temperature').textContent = "...";
            document.getElementById('humidity').textContent = "...";
            document.getElementById('wind-speed').textContent = "...";
        }
    } else {
        alert("Please enter a city or zip code.");
    }
}
