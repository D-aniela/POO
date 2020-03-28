// let Carro1Objeto = {
//     color: "rojo",
//     marca: "Mazda",
//     modelo: 2019,
//     motor: 2.0,
//     PosX: 0,
//     PosY: 0,
//     avanzarX() {
//       //   el this es toda la referencia hacia una aplicacion
//       // this.PosX++;
//       console.log(this);
//     }
//   };

//   console.log(Carro1Objeto);

class Carro {
  Color = "";
  Marca = "";
  Modelo = 0;
  Motor = 0;
  PosX = 0;
  PosY = 0;

  constructor(Color, Marca, Modelo, Motor) {
    this.Color = Color;
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Motor = Motor;
  }

  avanzarX() {}
  avanzarY() {}
}

let Carro1 = new Carro('Rojo', 'Honda', 2015, 1.8);
let Carro2 = new Carro('Azul', 'Nissan', 2020, 2.0);

console.log(Carro1.Color);
console.log(Carro2.Color);
