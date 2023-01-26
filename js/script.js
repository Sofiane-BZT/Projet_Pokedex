// -------------------------------SELECTION ET STOCKAGE DES ELEMENTS-----------------------------------

const nomPokemon = document.querySelector("#nomPokemon");
const numeroDePokemon = document.querySelector("#numeroDePokemon");
const imgDuPokemon = document.querySelector(".imgDuPokemon");
const phraseDescriptive = document.querySelector("#phraseDescriptive");
const tailleduPok = document.querySelector("#tailleduPok");
const cathegorieDuPok = document.querySelector("#cathegorieDuPok");
const capaciteDuPok = document.querySelector("#capaciteDuPok");
const specificationsWeight = document.querySelector("#specifications-weight");
const genderFemale = document.querySelector(".bi-gender-female");
const genderMale = document.querySelector(".bi-gender-male");
const fire = document.querySelector("#fire");
const water = document.querySelector("#water");
const ground = document.querySelector("#ground");
const rock = document.querySelector("#rock");
const typeListe = document.querySelector(".type-list");
const listeFaiblesse = document.querySelector("#liste_faiblesse");
// const TypePokemon = [];
const pokemon = "charizard";

// ------------------------------------FONCTIONS---------------------------------------

const poundsWeight = parseInt(specificationsWeight.textContent);
console.log({ poundsWeight });
const kgWeight = Math.round(poundsToKg(poundsWeight) * 100) / 100;
console.log({ kgWeight });
specificationsWeight.textContent = `${kgWeight}kg`;

// ------------------------------------GET NOM DU POKEMON--------------------------------------

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

    numeroDePokemon.textContent = "#" + data.id;
    nomPokemon.appendChild(numeroDePokemon);
  } catch (error) {
    console.log(error, "erreur");
  }
}
// ------------------------------------GET DESCRIPTION-----------------------------------

async function getDescription() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    phraseDescriptive.textContent = data.flavor_text_entries[0].flavor_text;
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
      "https://pokeapi.co/api/v2/pokemon-species/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");
    cathegorieDuPok.textContent = data.genera[7].genus;
  } catch (error) {
    console.log(error, "erreur");
  }
}
// ----------------------------------GET CAPACITÉ--------------------------------------------
async function getCapacite() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");
    capaciteDuPok.textContent = data.abilities[0].ability.name;
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------GET POIDS--------------------------------------------
function poundsToKg(poundsWeight) {
  return poundsWeight / 2.2046;
}

async function getPoid() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");
    specificationsWeight.textContent =
      Math.round(poundsToKg(data.weight)) + " " + "Kg";
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------GET GENDER--------------------------------------------

async function getGender() {
  try {
    const response = await fetch(
      // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      //   pokemon
      "https://pokeapi.co/api/v2/pokemon-species/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    gender = data.gender_rate;

    switch (gender) {
      case -1:
        genderFemale.style.display = "none";
        genderMale.style.display = "none";
        break;
      case 0:
        genderFemale.style.display = "none";
        break;
      case 8:
        genderMale.style.display = "none";
        break;

      default:
        genderFemale.style.display = "inline";
        genderMale.style.display = "inline";
        break;
    }
  } catch (error) {
    console.log(error, "erreur");
  }
}

// ----------------------------------------TYPE------------------------------------------

async function getType() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon
    );

    const data = await response.json();
    console.log(data, "objets javascipt");

    for (const dataDuType of data.types) {
      const li = document.createElement("li");
      typeListe.appendChild(li);

      const button = document.createElement("button");
      li.appendChild(button);

      button.classList.add(dataDuType.type.name);
      button.textContent = dataDuType.type.name;

      getFaiblesse(dataDuType.type.name);

      console.log(dataDuType);
    }
  } catch (error) {
    console.log(error, "erreur");
  }
}

// -------------------------------------GET FAIBLESSE----------------------------------------

async function getFaiblesse(TypePokemon) {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/type/" + TypePokemon
    );

    console.log(TypePokemon);
    const data = await response.json();
    console.log(data, "objets javascipt");

    for (const dataFaiblesse of data.damage_relations.double_damage_from) {
      const li = document.createElement("li");
      listeFaiblesse.appendChild(li);

      const button = document.createElement("button");
      li.appendChild(button);

      button.classList.add(dataFaiblesse.name);
      button.textContent = dataFaiblesse.name;

      console.log(dataFaiblesse);
    }
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
  getPoid();
  getCapacite();
  getGender();
  getType();
  getFaiblesse();
};
