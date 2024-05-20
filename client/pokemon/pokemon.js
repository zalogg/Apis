
const fetchPokemon = async () => {
    try {
        const response = await fetch('/poke/random');
        const data = await response.json();

        const pokemonId = data.id;
        const pokemonName = data.name;
        const imageUrl = data.imageUrl; 
        const pokemonHeight = data.height;
       
        const pokemonInfoElement = document.getElementById('pokemonInfo');
        pokemonInfoElement.innerHTML = `
        <strong>ID:</strong> ${pokemonId} <br>
        <strong>Name:</strong> ${pokemonName} <br>


      `;

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = `A Pokémon, ${pokemonName}`;
        imageElement.onerror = function () {
            console.error('Error loading image:', imageUrl);
        };

        pokemonInfoElement.appendChild(document.createElement('br'));
        pokemonInfoElement.appendChild(imageElement);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};


