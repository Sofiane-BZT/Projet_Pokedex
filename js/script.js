// -------------------------------SELECTION ET STOCKAGE DES ELEMENTS-----------------------------------

const nomPokemon = document.querySelector("#nomPokemon");
const numeroDePokemon = document.querySelector("#numeroDePokemon");
const imgDuPokemon = document.querySelector(".imgDuPokemon");
const phraseDescriptive = document.querySelector("#phraseDescriptive");
const tailleduPok = document.querySelector("#tailleduPok");
const cathegorieDuPok = document.querySelector("#cathegorieDuPok");
const capaciteDuPok = document.querySelector("#capaciteDuPok");
const fire = document.querySelector("#fire");
const water = document.querySelector("#water");
const ground = document.querySelector("#ground");
const rock = document.querySelector("#rock");
const pokemon = "venusaur";

// ------------------------------------FONCTIONS---------------------------------------

// function poundsToKg(poundsWeight) {
//   return poundsWeight / 2.2046;
// }

// const specificationsWeight = document.querySelector("#specifications-weight");

// window.onload = function () {
//   fetchName();

//   const poundsWeight = parseInt(specificationsWeight.textContent);
//   console.log({ poundsWeight });
//   const kgWeight = Math.round(poundsToKg(poundsWeight) * 100) / 100;
//   console.log({ kgWeight });
//   specificationsWeight.textContent = `${kgWeight}kg`;
// };

// async function fetchName() {
//   // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
//   const data = await response.json();
//   const h1 = document.querySelector("h1");
//   h1.textContent = data.name;
//   const span = document.createElement("span");
//   // span.textContent = `#${data.game_indices[0].game_index}`;
//   span.textContent = "#" + data.game_indices[0].game_index;
//   h1.appendChild(span);
//   // h1.innerHTML = `${data.name} <span>#${data.game_indices[0].game_index}</span>`;
// }

async function getName() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    nomPokemon.textContent = data.name;
    console.log(data, "objets javascipt");
  } catch (error) {
    console.log(error, "erreur");
  }
}
// ------------------------------------GET NUMERO DE POKEMON-----------------------------------

async function getNumeroDePokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    numeroDePokemon.textContent = "#" + data.game_indices[0].game_index;
    nomPokemon.appendChild(numeroDePokemon);
  } catch (error) {
    console.log(error, "erreur");
  }
}
// ------------------------------------GET DESCRIPTION-----------------------------------

async function getDescription() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    phraseDescriptive.textContent = data.flavor_text_entries[0].description;
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ------------------------------------GET IMAGES-----------------------------------------------

async function getImage() {
  try {
    const response = await fetch(
      // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      //   pokemon
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    imgDuPokemon.src = data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------GET TAILLE--------------------------------------------

async function getHeight() {
  try {
    const response = await fetch(
      // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      //   pokemon
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    tailleduPok.textContent = data.height;
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------GET CATHEGORIE--------------------------------------------

async function getCategorie() {
  try {
    const response = await fetch(
      // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      //   pokemon
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");
    cathegorieDuPok.textContent = data.genera[3].genus;
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------AU CHARGEMENT--------------------------------------------

https: window.onload = function () {
  getName();
  getNumeroDePokemon();
  getDescription();
  getImage();
  getHeight();
  getCategorie();
};
