class Pc {
    constructor(tipo,marca,modelo,color,image){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.image = image;
    }

    infoEquipo(){
       const imagen = document.createElement('img');
        imagen.src = this.image;
        mostrar.appendChild(imagen)
        return(`Este equipo es de tipo ${this.tipo} y de la marca ${this.marca}`)
    }
    infoModelo(){
       return(`El equipo ${this.tipo} es de modelo ${this.modelo} y color ${this.color}`)
    }

}

class Notebook extends Pc{
    constructor(tipo,marca,modelo,color,size,image){
        super(tipo,marca,modelo,color,image)
        this.size = size;
    }

    pantalla(){
        return(`Este equipo es ${this.tipo}, el tamaño de pantalla es: ${this.size}`)
    }

}
const equipo = new Pc("laptop","mac","A12","azul",'https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8299228-stock-photo-laptop-with-blue-graphics.jpg');
const equipo2 = new Notebook("note","xiaomi","X2","negro","6 inch",'https://m.media-amazon.com/images/I/81yP9mS5H6L.__AC_SX300_SY300_QL70_ML2_.jpg')

const mostrar = document.getElementById("pcs");
const datospc = document.createElement('p')
datospc.textContent = equipo.infoEquipo();
mostrar.appendChild(datospc)

const datospc2 = document.createElement('p')
datospc2.textContent = equipo2.infoEquipo();
mostrar.appendChild(datospc2)