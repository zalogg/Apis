document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const weatherInfo = document.getElementById('weatherInfo');

    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const cityInput = document.getElementById('cityInput').value;

        try {
            const weatherData = await getWeather(cityInput);
            displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`/weather?city=${city}`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        } catch (error) {
            throw new Error('Failed to fetch weather data from server');
        }
    }

    function displayWeather(weatherData) {
        const { temperature, weatherDescription } = weatherData;
        weatherInfo.innerHTML = `<p>Temperature: ${temperature} K</p><p>Description: ${weatherDescription}</p>`;
    }
});



