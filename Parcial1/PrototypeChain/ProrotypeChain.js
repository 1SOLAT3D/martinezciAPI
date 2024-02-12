var objeto = {
    color: "Desconocido",
    marca: "Desconocida",
    tipo: "Desconocido",
    printInfo: function () {
      console.log("Marca: " + this.marca);
      console.log("Color: " + this.color);
      console.log("Tipo: " + this.tipo);
    },
  };
  
  var coche = Object.create(objeto);
  coche.marca = "Toyota";
  coche.color = "Rojo";
  coche.tipo = "Sedan";
  
  var bicicleta = Object.create(objeto);
  bicicleta.marca = "Trek";
  bicicleta.color = "Verde";
  bicicleta.tipo = "Montaña";
  
  console.log("Coche:");
  coche.printInfo();
  
  console.log("\nBicicleta:");
  bicicleta.printInfo();

//   Object.setPrototypeOf(coche, objeto);
//   Object.setPrototypeOf(bicicleta, objeto);
  
//   Object.defineProperty(coche, "velocidad", {
//     value: "150 Km/h",
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   });
  
//   Object.defineProperty(bicicleta, "cadena", {
//     value: "Si",
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   });
  
//   console.log(
//     "¿Coche tiene la propiedad 'velocidad' como propia?",
//     coche.hasOwnProperty("velocidad")
//   );
//   console.log(
//     "¿Bicicleta tiene la propiedad 'velocidad' como propia?",
//     bicicleta.hasOwnProperty("velocidad")
//   );
//   console.log(
//     "¿Coche tiene la propiedad 'cadena' como propia?",
//     coche.hasOwnProperty("cadena")
//   );
//   console.log(
//     "¿Bicicleta tiene la propiedad 'cadena' como propia?",
//     bicicleta.hasOwnProperty("cadena")
//   );
  
//   console.log("objeto de coche:", Object.getPrototypeOf(coche));
//   console.log("objeto de bicicleta:", Object.getPrototypeOf(bicicleta));
  