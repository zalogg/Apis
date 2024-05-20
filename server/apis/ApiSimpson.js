const axios = require('axios');

class ApiSimpson {
    static async getQuotes() {
        try {
            const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch quotes from Simpsons API');
        }
    }
}

module.exports = ApiSimpson;

