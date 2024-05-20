const express = require('express');
const cors = require('cors');
const path = require('path');
const ApiSimpson = require('./apis/ApiSimpson');
const ApiPokeAPI = require('./apis/ApiPokeAPI');
const ApiWeather = require('./apis/ApiWeather');
const ApiMovies = require('./apis/ApiMovies');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Servir el archivo HTML del cliente
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.static(path.join(__dirname, '..', 'client', 'menu')));
app.use(express.static(path.join(__dirname, '..', 'client','simpson')));
app.use(express.static(path.join(__dirname, '..', 'client','pokemon')));
app.use(express.static(path.join(__dirname, '..', 'client','clima')));
app.use(express.static(path.join(__dirname, '..', 'client','movie')));

app.get('/simpson/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'simpson', 'index.html'));
});

app.get('/pokemon/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'pokemon', 'index.html'));
});

app.get('/clima/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'clima', 'index.html'));
});

app.get('/movie/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'movie', 'index.html'));
});

// Ruta para obtener citas de Los Simpsons
app.get('/simpson/quotes', async (req, res) => {
    try {
        const quotes = await ApiSimpson.getQuotes();
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para obtener Pokemon
app.get('/poke/random', async (req, res) => {
    try {
        const randomPokemon = await ApiPokeAPI.getRandomPokemon();
        res.json(randomPokemon);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para obtener datos del clima
app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city; // La ciudad se pasará como parámetro de consulta en la URL, por ejemplo: /weather?city=London
        const weatherData = await ApiWeather.getWeather(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para obtener películas populares
app.get('/movies/popular', async (req, res) => {
    try {
        const popularMovies = await ApiMovies.getPopularMovies();
        res.json(popularMovies);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
