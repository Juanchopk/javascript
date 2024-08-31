// 'use strict'
// 2.13
// let suma = 0;
// let continuar = true;

// while (continuar) {
// let valor = prompt("Ingresa un número", '');
// if (valor === null || valor.trim() === '') {
//  continuar = false;
// } else {
// let numero = parseFloat(valor);
//  if (!isNaN(numero)) {
//  suma += numero;
// } else {
//  alert('No es un número válido');
// }
// }
// }

// alert('Suma: ' + suma);

// 2.14
// let a = 2 + 2;

// switch (true) {
//   case a < 4:
//     alert('Muy pequeño');
//     break;
//   case a === 4:
//     alert('¡Exacto!');
//     break;
//   case a > 4:
//     alert('Muy grande');
//     break;
//   default:
//     alert("Desconozco estos valores");
// }

// 2.15
// let userName = 'Juancho';

// function showMessage() {
//   let message = `Hola, ${userName}`;
//   alert(message);
// }

// showMessage(); // Hola, Juancho

// 2.16
// let age = prompt("¿Cual es tu edad?", 18);

// let welcome;
// if (age < 18) {
//   welcome = function() {
//     alert('¡Hola!');
//   };
// } else {
//   welcome = function() {
//     alert("¡Saludos!");
//   };
// }

// 2.17
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('¡Hola!') :
//   () => alert("¡Saludos!");

// welcome();

// welcome();

// 3.1
// function hello(name) {
//  let phrase = `Hello, ${name}!`;
//  debugger; // <-- el debugger se detendrá aquí
//     say(phrase);
//  }
  
//  function say(phrase) {
//  alert(phrase);
// }
  
//  hello("debugger"); // <-- llamada a la función hello con parámetro "debugger"

// 3.2
// // Declaración de una función para calcular la distancia entre dos puntos
// function calcularDistancia(x1, y1, x2, y2) {
// // Cálculo de la distancia utilizando la fórmula de Pitágoras
// const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// return distancia;
//  }
  
// // Declaración de una función para determinar si un punto está dentro de un círculo
// function puntoDentroDeCirculo(x, y, centroX, centroY, radio) {
// // Cálculo de la distancia entre el punto y el centro del círculo
// const distancia = calcularDistancia(x, y, centroX, centroY);
// // Verificación si la distancia es menor o igual que el radio
// return distancia <= radio;
// }
  
// // Código principal
// const puntoX = 4;
// const puntoY = 5;
// const centroX = 0;
// const centroY = 0;
// const radio = 6;
  
// if (puntoDentroDeCirculo(puntoX, puntoY, centroX, centroY, radio)) {
// alert(`El punto (${puntoX}, ${puntoY}) está dentro del círculo`);
// } else {
// alert(`El punto (${puntoX}, ${puntoY}) está fuera del círculo`);
//   }

// 3.3
// //  * Calcula el área de un triángulo rectángulo.
// //  *
// //  * @param {number} base La base del triángulo.
// //  * @param {number} altura La altura del triángulo.
// //  * @return {number} El área del triángulo.
// //  */
// function calcularAreaTriangulo(base, altura) {
//     // Utilizamos la fórmula para calcular el área de un triángulo rectángulo
//  return (base * altura) / 2;
// }
  
// //   /**
// //    * Calcula el perímetro de un rectángulo.
// //    *
// //    * @param {number} ancho El ancho del rectángulo.
// //    * @param {number} alto El alto del rectángulo.
// //    * @return {number} El perímetro del rectángulo.
// //    */
// function calcularPerimetroRectangulo(ancho, alto) {
//     // Utilizamos la fórmula para calcular el perímetro de un rectángulo
//  return 2 * (ancho + alto);
// }
  
// //   /**
// //    * Calcula el volumen de un cilindro.
// //    *
// //    * @param {number} radio El radio del cilindro.
// //    * @param {number} altura La altura del cilindro.
// //    * @return {number} El volumen del cilindro.
// //    */
// function calcularVolumenCilindro(radio, altura) {
//    // Utilizamos la fórmula para calcular el volumen de un cilindro
// return Math.PI * radio * radio * altura;
// }
  
//   // Uso de las funciones
// let base = 5;
// let altura = 10;
// let areaTriangulo = calcularAreaTriangulo(base, altura);
// alert(`El área del triángulo es ${areaTriangulo}`);
  
// let ancho = 8;
// let alto = 12;
// let perimetroRectangulo = calcularPerimetroRectangulo(ancho, alto);
// alert(`El perímetro del rectángulo es ${perimetroRectangulo}`);
  
// let radio = 4;
// let alturaCilindro = 15;
// let volumenCilindro = calcularVolumenCilindro(radio, alturaCilindro);
// alert(`El volumen del cilindro es ${volumenCilindro}`);

// 3.4
// let _ = (x => x * x)(5);
// let $ = _ + 3;
// let $$ = $ * 2;
// let $$$ = $$ + _;

// function ninja(x) {
// return x ? ninja(x - 1) : $$$;
// }

// let resultado = ninja(5);
// alert(resultado);

// 3.5
// const assert = require('assert');
// const exponentiation = require('./exponentiation');

// describe("exponentiation", function() {
//   it("4 elevado a la potencia de 2 es 16", function() {
//     assert.equal(exponentiation(4, 2), 16);
//   });
  
//   it("5 elevado a la potencia de 4 es 625", function() {
//     assert.equal(exponentiation(5, 4), 625);
//   });
// });

// 3.6
// const str = "hello world";
// if (str.startsWith("hello")) {
//  alert("La cadena comienza con 'hello'");
// } else {
// alert("La cadena no comienza con 'hello'");
// }

// 4.1
// let veggie = prompt("¿Qué verdura comprar?", "Tomate");
// let garden = {};

//  // Toma el nombre de la propiedad de la variable veggie
// garden[veggie] = 3;

// 4.2
// const persona = {
// apellido: "García"
// };
  
// persona.apellido = "Rodríguez"; // (*)
  
// alert(persona.apellido); // Rodríguez

// 4.3
// function employ(boss, employee) {
// employee.manager = boss;
// boss.staff = employee;
  
// return {
// CEO: boss,
// worker: employee
// }
// }
  
// let company = employ({
// name: "Michael"
// }, {
// name: "Emily"
// });

// 4.4
// let robot = {
// model: "RX-3000",
// year: 2025
// };
  
// robot.beep = function() {
// alert("Beep boop!");
// };
  
// robot.beep(); // Beep boop!

// 4.5
// function Pet(species) {
// this.species = species;
// this.isVaccinated = true;
// }
  
// let pet = new Pet("Cat");
  
// alert(pet.species); // Cat
// alert(pet.isVaccinated); // true

// 4.6
// let car = {}; // coche sin características

// alert( car.features && car.features.engine && car.features.engine.type ); // undefined (sin error)

// 4.7
// let name1 = Symbol("name");
// let name2 = Symbol("name");

// alert(name1 == name2); // false

// 4.8
 // conversión explícita
// let texto = String(10);

//  // concatenación de cadenas
// let nombreCompleto = "Hola, " + nombre;

//  // comparación de igualdad
// let isAdmin = usuario === "admin";

// 5.1
// let cero = new Number(0);

// if (cero.valueOf() === 0) { 
// alert( "cero es falso" );
// } else {
// alert( "¿cero es verdadero?!?" );
// }

// 5.2
// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, porque es un valor especial: NaN
// alert( isFinite(Infinity) ); // false, porque es un valor especial: Infinity

// 5.3
// let str = `Hola`;

// // el primer carácter
// alert( str.charAt(0) ); // J
// alert( str.substring(0, 1) ); // J

// // el último carácter
// alert( str.charAt(str.length - 1) ); // P
// alert( str.slice(-1) ); // P

// 5.4
// let colors = ["Red", "Blue", "Green", "Yellow"]; // Cambié el arreglo a colores

// for (let i = 0; i < colors.length; i++) {
// alert(colors[i]); // Utilicé alert en lugar de console.log
// }

// 5.5
// let colors = ["Red", "Blue", "Green"];

// delete colors[1]; // remueve "Blue"

// alert( colors[1] ); // undefined

// // ahora colors = ["Red",  , "Green"];
// alert( colors.length ); // 3

// 5.6
//  let range = {
// from: 1,
// to: 5,
  
// *[Symbol.iterator]() {
// for (let i = this.from; i <= this.to; i++) {
// yield i;
// }
// }
// };
  
// for (let num of range) {
// alert(num); // 1, luego 2, 3, 4, 5
// }

// 5.7
// let myMapCollection = new Map();

// myMapCollection.set('1', 'str1');   // un string como clave
// myMapCollection.set(1, 'num1');     // un número como clave
// myMapCollection.set(true, 'bool1'); // un booleano como clave

// for (const [key, value] of myMapCollection) {
// alert(`La clave ${key} tiene el valor ${value}`);
// }

// alert(`El tamaño del mapa es ${myMapCollection.size}`);

// 5.8
// let visitedSet = new WeakSet();

// let juancho = { name: "Juancho" };
// let julio = { name: "Julio" };
// let camilo = { name: "Camilo" };

// visitedSet.add(juancho); // Juancho nos visita
// visitedSet.add(julio); // luego Julio
// visitedSet.add(juancho); // Juancho otra vez

// // visitedSet tiene 2 usuarios ahora

// // comprobar si Juancho nos visitó?
// (visitedSet.has(juancho)); // true

// // comprobar si Camilo nos visitó?
// alert(visitedSet.has(camilo)); // false

// juancho = null;

// // visitedSet se limpiará automáticamente

// 5.9
// let usuario = {
// nombre: "Juancho",
// edad: 30
// };
  
// // bucle sobre los valores
// for (let valor of Object.values(usuario)) {
// alert(valor); // Juancho, luego 30
// }

// 5.10
// let [apellido1, apellido2] = ["Juancho", "Diaz", "Cónsul", "de la República Colombiana"];

// alert(apellido1); // Juancho
// alert(apellido2); // Diaz
// // items posteriores no serán asignados a ningún lugar

// 5.11
// let date = new Date("2022-07-04");
// alert(date);
// La hora no está definida, por lo que se asume que es la medianoche GMT (0 hs. de la fecha) y
// se ajusta de acuerdo al huso horario de la zona geográfica en la que está ejecutándose el código.
// Por consiguiente, el resultado podría ser
// Mon Jul 04 2022 11:00:00 GMT+1100 (Hora Estándar del Este de Australia)
// o
// Sun Jul 03 2022 16:00:00 GMT-0800 (Hora Estándar del Pacífico)

// 5.12
// let aula = {
// numero: 23
// };
  
// let reunion = {
// titulo: "Seminario",
//  participantes: [{nombre: "Pedro"}, {nombre: "María"}],
// lugar: aula // reunion hace referencia a aula
// };
  
// aula.ocupadaPor = reunion; // aula hace referencia a reunion
  
// alert( JSON.stringify(reunion, ['titulo', 'participantes', 'lugar', 'nombre', 'numero']) );
// /*
// {
// "titulo":"Seminario",
// "participantes":[{"nombre":"Pedro"},{"nombre":"María"}],
// "lugar":{"numero":23}
// }
// */