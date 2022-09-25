console.log("Entro al main.js");
const imgPokemon = document.getElementById("imgPokemon");
const NombrePokemon = document.getElementById("NombrePokemon");
const PesoPokemnon = document.getElementById("PesoPokemon");
const SkillsPokemon = document.getElementById("SkillsPokemon");

function randomPokemon() {
    console.log("Entro a la funion random Pokemon");
    const pokemon_number =generateRandomNumber(1,151);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_number}`)
    /*fetch ("http://pokeapi.co/api/v2/pokemon/" + pokemon_number)*/
    .then(reponse => reponse.json())
    .then(data => {
        console.log(data);
        imgPokemon.src = data.sprites.other.home.front_default;
        NombrePokemon.innerText = data.name.toUpperCase();
        PesoPokemnon.innerText = data.weight;
        SkillsPokemon.innerText = data.abilities[0,3].ability.name
        
           
    })
    .catch(error => console.log(error));
}

function generateRandomNumber(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}