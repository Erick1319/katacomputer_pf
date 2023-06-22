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
        const imagen = document.createElement('img');
        imagen.src = this.image;
        mostrar.appendChild(imagen)
    return (`ID: #${this.id}\nNombre: ${this.nombre} \nTipo: ${this.tipo} \n Altura:${this.altura}mts \n peso: ${this.peso}kgs`)
    }
}
var pokedex = [];

const id001 = new Pokemon("001","Bulbasaur","planta",0.7,6.9,'https://www.pokexperto.net/nds/artwork/1.jpg')
pokedex.push(id001);
const id002 = new Pokemon("002","Ivysaur","planta",1,13,'https://www.pokexperto.net/nds/artwork/2.jpg')
pokedex.push(id002);
const id003 = new Pokemon("003","Venusaur","planta",2,100,'https://www.pokexperto.net/nds/artwork/3.jpg')
pokedex.push(id003);
const id004 = new Pokemon("004","Charmander","fuego",0.6,8.5,'https://www.pokexperto.net/nds/artwork/4.jpg')
pokedex.push(id004);
const id005 = new Pokemon("005","Charmeleon","fuego",1.1,19,'https://www.pokexperto.net/nds/artwork/5.jpg')
pokedex.push(id005);
const id006 = new Pokemon("006","Charizard","fuego",1.7,90.5,'https://www.pokexperto.net/nds/artwork/6.jpg')
pokedex.push(id006);
const id007 = new Pokemon("007","Squirtle","agua",0.5,9,'https://www.pokexperto.net/nds/artwork/7.jpg')
pokedex.push(id007);
const id008 = new Pokemon("008","Wartortle","agua",1,22.5,'https://www.pokexperto.net/nds/artwork/8.jpg')
pokedex.push(id008);
const id009 = new Pokemon("009","Blastoise","agua",1.6,85.5,'https://www.pokexperto.net/nds/artwork/9.jpg')
pokedex.push(id009);
const id010 = new Pokemon("010","Caterpie","bicho",0.3,2.9,'https://www.pokexperto.net/nds/artwork/10.jpg')
pokedex.push(id010);
const id011 = new Pokemon("011","Metapod","bicho",0.7,9.9,'https://www.pokexperto.net/nds/artwork/11.jpg')
pokedex.push(id011);
const id012 = new Pokemon("012","Buterfree","bicho",1.1,32,'https://www.pokexperto.net/nds/artwork/12.jpg')
pokedex.push(id012);
const id013 = new Pokemon("013","Weedle","bicho",0.3,3.2,'https://www.pokexperto.net/nds/artwork/13.jpg')
pokedex.push(id013);
const id014 = new Pokemon("014","Kakuna","bicho",0.6,10,'https://www.pokexperto.net/nds/artwork/14.jpg')
pokedex.push(id014);
const id015 = new Pokemon("015","Beedrill","bicho",1,29.5,'https://www.pokexperto.net/nds/artwork/15.jpg')
pokedex.push(id015);
const id016 = new Pokemon("016","Pidgey","volador",0.3,1.8,'https://www.pokexperto.net/nds/artwork/16.jpg')
pokedex.push(id016);
const id017 = new Pokemon("017","Pidgeotto","volador",1.1,30,'https://www.pokexperto.net/nds/artwork/17.jpg')
pokedex.push(id017)
const id018 = new Pokemon("018","Pidgeot","volador",1.5,39.5,'https://www.pokexperto.net/nds/artwork/18.jpg')
pokedex.push(id018);
const id019 = new Pokemon("019","Rattata","normal",0.3,3.5,'https://www.pokexperto.net/nds/artwork/19.jpg')
pokedex.push(id019);
const id020 = new Pokemon("020","Raticate","normal",0.7,18.5,'https://www.pokexperto.net/nds/artwork/20.jpg')
pokedex.push(id020);
const id021 = new Pokemon("021","Spearow","volador",0.3,2,'https://www.pokexperto.net/nds/artwork/21.jpg')
pokedex.push(id021);
const id022= new Pokemon("022","Fearow","volador",1.2,38,'https://www.pokexperto.net/nds/artwork/22.jpg')
pokedex.push(id022);
const id023 = new Pokemon("023","Ekans","veneno",2,6.9,'https://www.pokexperto.net/nds/artwork/23.jpg')
pokedex.push(id023)
const id024 = new Pokemon("024","Arbok","veneno",3.5,65,'https://www.pokexperto.net/nds/artwork/24.jpg')
pokedex.push(id024);
const id025 = new Pokemon("025","Pikachu","electrico",0.4,6,'https://www.pokexperto.net/nds/artwork/25.jpg')
pokedex.push(id025);
const id026 = new Pokemon("026","Raychu","electrico",0.8,30,'https://www.pokexperto.net/nds/artwork/26.jpg')
pokedex.push(id026);
const id027 =new Pokemon("027","Sandsrew","tierra",0.6,12,'https://www.pokexperto.net/nds/artwork/27.jpg')
pokedex.push(id027);
const id028 =new Pokemon("028","Sandslash","tierra",1,29.5,'https://www.pokexperto.net/nds/artwork/28.jpg')
pokedex.push(id028);
const id050 =new Pokemon("050","Diglett","tierra",0.2,0.8,'https://www.pokexperto.net/nds/artwork/50.jpg')
pokedex.push(id050);
const id051 =new Pokemon("051","Dugtrio","tierra",0.7,33.3,'https://www.pokexperto.net/nds/artwork/51.jpg')
pokedex.push(id051);
const id056 =new Pokemon("056","Mankey","lucha",0.5,28,'https://www.pokexperto.net/nds/artwork/56.jpg')
pokedex.push(id056);
const id057 =new Pokemon("057","Primeape","lucha",1,32,'https://www.pokexperto.net/nds/artwork/57.jpg')
pokedex.push(id057);
const id058 =new Pokemon("058","Growlithe","fuego",0.7,29,'https://www.pokexperto.net/nds/artwork/58.jpg')
pokedex.push(id058);
const id059 =new Pokemon("059","Arcanine","fuego",1.9,155,'https://www.pokexperto.net/nds/artwork/59.jpg')
pokedex.push(id059);
const id063 =new Pokemon("063","Abra","psiquico",0.9,19.5,'https://www.pokexperto.net/nds/artwork/63.jpg')
pokedex.push(id063);
const id064 =new Pokemon("064","Kadabra","psiquico",1.3,56.5,'https://www.pokexperto.net/nds/artwork/64.jpg')
pokedex.push(id064);
const id065 =new Pokemon("065","Alakazam","psiquico",1.5,48,'https://www.pokexperto.net/nds/artwork/65.jpg')
pokedex.push(id065);
const id074 =new Pokemon("074","Geodude","roca",0.4,20,'https://www.pokexperto.net/nds/artwork/74.jpg')
pokedex.push(id074);
const id075 =new Pokemon("075","Graveler","roca",1,105,'https://www.pokexperto.net/nds/artwork/75.jpg')
pokedex.push(id075);
const id076 =new Pokemon("076","Golem","roca",1.4,300,'https://www.pokexperto.net/nds/artwork/76.jpg')
pokedex.push(id076);
const id086 =new Pokemon("086","Seel","hielo",1.1,90,'https://www.pokexperto.net/nds/artwork/86.jpg')
pokedex.push(id086);
const id087 =new Pokemon("087","Dewgong","hielo",1.7,120,'https://www.pokexperto.net/nds/artwork/87.jpg')
pokedex.push(id087);
const id092 =new Pokemon("092","Gastly","fantasma",1.3,0.1,'https://www.pokexperto.net/nds/artwork/92.jpg')
pokedex.push(id092);
const id093 =new Pokemon("093","Haunter","fantasma",1.6,0.1,'https://www.pokexperto.net/nds/artwork/93.jpg')
pokedex.push(id093);
const id094 =new Pokemon("094","Gengar","fantasma",1.5,40.5,'https://www.pokexperto.net/nds/artwork/94.jpg')
pokedex.push(id094);

document.querySelector('form').addEventListener("submit", function(event){
    mostrar.innerHTML='';
})

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
})
;
pokedex.forEach(element => {
    const datosPkmn = document.createElement('p')
        datosPkmn.textContent = element.buscar();
        mostrar.appendChild(datosPkmn);
});

document.querySelector('#searchId').addEventListener("submit",function(event){
    mostrar.innerHTML="";
})
document.querySelector('#searchId').addEventListener("submit",function(event){
event.preventDefault();
const searchId = document.getElementById('pkId');
const searchIndx = searchId.value;
pokedex.forEach(element => {
    if(element.id===searchIndx){
        const datosPkmn = document.createElement('p')
        datosPkmn.textContent = element.buscar();
        mostrar.appendChild(datosPkmn);
    }
});

})