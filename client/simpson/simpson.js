const fetchQuote = async () => {
  try {
      const response = await fetch('/simpson/quotes');
      const data = await response.json();

      const quote = data[0].quote;
      const character = data[0].character;
      const imageUrl = data[0].image;

      const quoteElement = document.getElementById('quote');
      quoteElement.innerHTML = `<strong>Character:</strong> ${character} <br> <strong>Description:</strong> "${quote}"`;


      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = `Un personaje de Los Simpson, ${character}`;
      imageElement.onerror = function() {
          console.error('Error al cargar la imagen:', imageUrl);
      };

      quoteElement.appendChild(document.createElement('br'));
      quoteElement.appendChild(imageElement);
  } catch (error) {
      console.error('Error al obtener la cita:', error);
  }
};

// Fetch initial quote when the page loads
//fetchQuote();
