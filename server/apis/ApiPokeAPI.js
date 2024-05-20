const axios = require('axios');

class ApiPokeAPI {
    static async getRandomPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`);
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomPokemonUrl = response.data.results[randomIndex].url;
            const pokemonResponse = await axios.get(randomPokemonUrl);
            const { id, name, sprites, } = pokemonResponse.data;
            const imageUrl = sprites.front_default;
    
            return { id, name, imageUrl};
        } catch (error) {
            throw new Error('Failed to fetch Pokémon from PokeAPI');
        }
    }
}

module.exports = ApiPokeAPI;


