const axios = require('axios');

async function getPopularMovies() {
    try {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=426ac72ee1bb39de9a6eb8a109bd116b`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching popular movies');
    }
}

module.exports = { getPopularMovies };


