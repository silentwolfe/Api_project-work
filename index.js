
// fetchData();
async function fetchData() {
    const pokemon = document.getElementById("pikachuName");

    try {
        const pokemonName = pokemon.value.toLowerCase();
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Not found")
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgSprite = document.getElementById("pokemonImg");
        
        imgSprite.src = pokemonSprite;
        imgSprite.style.display = 'block';

    } catch (error) {
        console.error(error)
    }
}