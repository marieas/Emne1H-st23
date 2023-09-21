//modell
const model = {
    pokemon: [{
        name: 'Pikachu',
        artNr: 25,
        src: 'pika.png'
    },
    {
        name: 'Magicarp',
        artNr: 129,
        src: 'magi.jpg'
    },
    {
        name: 'Eevee',
        artNr: 133,
        src: 'evee.jpg'
    }],
    input :{
        name: '',
        artNr: 0,
        src: ''
    }
}

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        ${pokemonView()}
        <div class="content">
        Name: <input onchange="setName(this.value)">
        Artnr: <input onchange="setNr(this.value)">
        Imgsrc: <input onchange="setImg(this.value)">
        <button onclick="addPokemonToList()">submit</button>
        </div>
    ` 
}

function setName(name){
    model.input.name = name;
}
function setNr(nr){
    model.input.artNr = nr;
}
function setImg(img){
    model.input.src = img;
}
function addPokemonToList(){
    model.pokemon.push(model.input)
    updateView()
}

function pokemonView(){
    let pokemonHtml = ''
    for(let poke of model.pokemon){
        pokemonHtml += /*HTML*/`
        <div class="poke">
        <div>${poke.name}</div>
        <div>artnr: ${poke.artNr}</div>
        <img src="${poke.src}" onclick="removePokemonFromList(${poke.artNr})"/>
        </div>        
        ` 
    }
    return pokemonHtml;
}

function removePokemonFromList(nr){ 
   let index = model.pokemon.map(poke => poke.artNr).indexOf(nr)
   model.pokemon.splice(index,1)
   updateView()
}