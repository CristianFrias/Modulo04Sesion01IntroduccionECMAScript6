"use strict";

// var resultado = null // var no tiene limitante en relación a los bloques

function sumar(n1, n2) {
    resultado = n1 + n2; // si quito var pasa a ser la misma variable
}
// sumar(3, 4)
// console.log(resultado);


// Let se define un bloque (if, for, función)
// Declaramos let
var operacion = 1; // 1=suma, 2=resta, 3=multiplicación, 4=división
var n1 = 5;
var n2 = 8;

var resultado = void 0; // se define el let afuera y la variante está dentro, ya que está dentro del ámbito, dentro del espacio macro, los micro (que están dentro de una función, pueden acceder a las variantes de afuera)
var porcentaje = 30;

// Creamos bloque if, para diferencias var y let
if (operacion == 1) {
    var _porcentaje = 20;
    resultado = n1 + n2; // definiendo una variable dentro de un bloque, disponemos let es un espacio de memoria distinto
}
if (operacion == 2) {
    resultado = n1 - n2;
}
// console.log(`Resultado: ${resultado}`);
// console.log(`Porcentaje: ${porcentaje}`);


// Interpolación
var nombre = "Cristián";
var apellido = "Frías";

// const nombreCompleto = nombre+" "+apellido // concatenación
var nombreCompleto = nombre + " " + apellido; // interpolación
// console.log(nombreCompleto)

//ECMAScript 5
// var fila = "<tr>"
// fila += "<td>"+15+"</td>"
// fila += "</tr>"

//ECMAScript 6 es más fácil de enterder
var fila = "<tr>\n    <td>" + nombreCompleto + "</td>\n</tr>";

// Funciones de Flecha
// Función ECMAScript 5
// function adicion(n1, n2) {
//     // resultado = n1 + n2; o
//     return n1 + n2
// }

// Función ECMAScript 6
// Opción 01
// const adicion = (n1, n2) => n1 +n2 // omito llaves cuando tengo una operación directa y se genera un return automático

// Opción 02
var adicion = function adicion(n1, n2) {
    return n1 + n2;
}; // con {} debemos hacer return

var division = function division(n1, n2) {
    // Opción Normal
    // if (n2 === 0) {
    //     return "No es posible dividir entre cero"
    // }
    // return n1/n2

    // Opción Directa, sin llasves {}, esto ocurre cuando es una sola línea de bloque y aplico más lógica
    if (n2 === 0) return "No es posible dividir entre cero";else return n1 / n2;
};
// console.log(adicion(6, 4))
console.log(division(9, 1));

// Cuando recibo solo un parametro puedo omitir los ()
var saludar = function saludar(nombre) {
    return console.log("Hola " + nombre);
};
saludar("Cristián Frías");

// Definición sin o mas de dos parametros es con ()
// Opción 01
// const mostrarMensaje = () => console.log("Estamos trabajando funciones de flecha");

// Opción 02
var mostrarMensaje = function mostrarMensaje() {
    console.log("Estamos trabajando funciones de flecha");
};
mostrarMensaje();