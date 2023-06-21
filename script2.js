var mostrar = document.getElementById("pkmn");

class Pokemon {
    constructor(id,nombre,tipo,altura,peso,image){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.altura = altura;
        this.peso =peso;
        this.image = image;
    }

    buscar(){
        const imagen = (document.createElement('img'));
        imagen.src = this.image;
        mostrar.appendChild(imagen)
    return (`ID: ${this.id} \n Nombre: ${this.nombre} \n Tipo: ${this.tipo} \n Altura:${this.altura} \n peso: ${this.peso}`)
    }
}
var pokedex = [];

const id001 = new Pokemon("001","Bulbasaur","planta",0.7,6.9,'https://www.pokexperto.net/nds/artwork/1.jpg')
pokedex.push(id001);
const id002 = new Pokemon("002","Ivysaur","planta",1,13,'https://www.pokexperto.net/nds/artwork/2.jpg')
pokedex.push(id002);
const id004 = new Pokemon("004","Charmander","fuego",0.6,8.5,'https://www.pokexperto.net/nds/artwork/4.jpg')
pokedex.push(id004)

console.log(pokedex)

document.querySelector('form').addEventListener("submit",function(event){
    event.preventDefault();
const select = document.getElementById('tipo');
const selected =select.value;
pokedex.forEach(element => {
    if(element.tipo===selected){
        const datosPkmn = document.createElement('p')
        datosPkmn.textContent = element.buscar();
        mostrar.appendChild(datosPkmn);
    } 
});
});
;

// const mostrar = document.getElementById("pkmn");
// const datosPkmn = document.createElement('p')
// datosPkmn.textContent = id001.buscar();
// mostrar.appendChild(datosPkmn);

