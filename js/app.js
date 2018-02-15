// elementos que usaremos
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

//a nuestro form le damos el evento submit
form.addEventListener('submit', function (e){
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getPokemon();
})

//en la funcion getPokemon haremos nuestras peticiones
function getPokemon() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.onload = addPokemon;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addPokemon() {
  const data = JSON.parse(this.responseText);
  //const response = data.response;
  console.log(data);

  //console.log(article);

  let li = document.createElement('li');
  li.className = 'articleClass'
  const pokemon = [];
  for (let i=0; i < data.abilities.length; i++ ){
    pokemon.push(data.abilities[i].ability.name);
    console.log(data.abilities);
  }
console.log(pokemon);
  li.innerText = pokemon;

  responseContainer.appendChild(li);
}