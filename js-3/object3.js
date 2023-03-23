//Crear una variable llamada receta e inicialízalo con un objeto literal vacío
let receta = {
}
receta.nombre = "Sandwich",
    //propiedad ingredientes con un arreglo vacío.
    receta.ingredientes = []
//Agregar un ob al arreglo ingredientes 
receta.ingredientes.primero = {
    nombre: "Pan",
    cantidad: 2
}
receta.ingredientes.segundo = {
    nombre: "Queso",
    cantidad: 1
}
//imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log (receta.ingredientes.primero.nombre);
//Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let nombre1 = receta.ingredientes.primero.nombre
let cantidad1 = receta.ingredientes.primero.cantidad
let nombre2 = receta.ingredientes.segundo.nombre
let cantidad2 = receta.ingredientes.segundo.cantidad
console.log(`Los ingredientes son los siguientes ${cantidad1} ${nombre1} y ${cantidad2} ${nombre2}.`)

const ingredientes= ["Los ingredientes son Pan", 2, " y Queso", 1];
const ingredientes2= ingredientes.push;

console.log(ingredientes);
