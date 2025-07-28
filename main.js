//variable caja que guarde algo let o const

let nombre = "aylen";
let apellido = "gomez";

let mail = "ay_len@live.com.ar";
mail = "aylu99_dsm@hotmail.com";

console.log(nombre);
console.log(apellido);
console.log(mail);

//camerCase
let nombreDos = "tiago";
let apellidoDos = "chan";
let dni = "42345678";
let edad = 28;
/* prompt("texto") */
//alert("aparece en la pantalla");
//basicamente es una alerta

//el signo "="es de asignacion de valor
// let saludoMasFacil = ``
console.log(dni);
console.log(edad);

let añoDeNacimiento = 1997;
let añoActual = 2025;

console.log(añoActual - añoDeNacimiento);
console.log(edad >= 28);
console.log(edad > 18);
console.log(edad * 5);
console.log(edad < 18);

let estaAutenticado = true;

if (edad > 18) {
  console.log("tenes acceso completo");
} else {
  console.log("tenes acceso limitado");
}

nombre = prompt("ingresa tu nombre");
