const axios = require('axios');

class ApiWeather {
    static async getWeather(city) {
        try {
            const apiKey = 'bafcde513c0778b9d06ebf35b099d76f'; 
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const response = await axios.get(apiUrl);
            const { main, weather } = response.data;
            const temperature = main.temp;
            const weatherDescription = weather[0].description;
            return { temperature, weatherDescription };
        } catch (error) {
            throw new Error('Failed to fetch weather data from API');
        }
    }
}

module.exports = ApiWeather;
