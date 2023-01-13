
let ID_VEHICULO = 1;

class Vehiculo {
    constructor(marca, modelo, tipo, cilindrada, anio, kilometros, carnet, comentario, precio, img = "./img/card.webp") {
        this.id = ID_VEHICULO++;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.cilindrada = cilindrada;
        this.anio = anio;
        this.kilometros = kilometros;
        this.carnet = carnet;
        this.comentario = comentario;
        this.precio = precio;
        this.img = img;
        this.stock = 2;
        // this.amount = 0;
    };
}

let listProduct = [
    new Vehiculo("YAMAHA", "MT 125", "Naked", 125, 2015, 3500, "A", "comentarios del vendedor", 5000, "./../images/motos/mt125-blue.jpg"),
    new Vehiculo("YAMAHA", "MT 7", "Naked", 700, 2016, 18000, "A", "comentarios del vendedor", 5300, "./../images/motos/mt7-storm.jpg"),
    new Vehiculo("YAMAHA", "MT 9", "Naked", 900, 2019, 7500, "A", "comentarios del vendedor", 13000, "./../images/motos/mt9-blue.jpg"),
    new Vehiculo("YAMAHA", "MT 10", "Naked", 1000, 2022, 12500, "A", "comentarios del vendedor", 1500, "./../images/motos/mt-10.jpg"),
    new Vehiculo("HONDA", "Africa twing", "Trail", 1000, 2017, 9000, "A", "comentarios del vendedor", 30000, "./../images/motos/africaTwin.jpg"),
    new Vehiculo("HONDA", "Africa twing", "Trail", 200, 2018, 4500, "A", "comentarios del vendedor", 9500, "./../images/motos/africaTwin200.jpg"),
    new Vehiculo("HONDA", "CB500F", "Naked", 500, 2016, 7300, "A", "comentarios del vendedor", 4300, "./../images/motos/CB500F.jpg"),
    new Vehiculo("HONDA", "CB500R", "Naked", 500, 2019, 7500, "A", "comentarios del vendedor", 19000, "./../images/motos/CB500R.jpg"),
    new Vehiculo("HONDA", "CB500X", "Trail", 500, 2020, 5600, "A", "comentarios del vendedor", 11500, "./../images/motos/CB500X.jpg"),
    new Vehiculo("KAWASAKY", "Versys 650", "Trail", 600, 2021, 7000, "A", "comentarios del vendedor", 15500, "./../images/motos/versys650.png"),
    new Vehiculo("KAWASAKY", "Ninja 1000", "Racing", 1000, 2007, 6900, "A", "comentarios del vendedor", 26500, "./../images/motos/ninja1000.jpg"),
    new Vehiculo("BMW", "R 1250 GS", "TraiL", 1250, 2014, 5600, "A", "comentarios del vendedor", 5500, "./../images/motos/BMW-R-1250-GS.jpg")
]


export default listProduct;