let persona = {
    nombre: "Andrea Vargas",
    edad: 26,
    ciudad: "Bogota.",
    profesion: "tecnica ambiental",
    presentacion: function () {
        console.log("Hola, me llamo " + this.nombre + " tengo " + this.edad + " años, soy de la cuidad de " + this.ciudad)
    }

}
//Imprime en la consola el objeto "persona" completo.
console.log(persona.nombre);
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = persona.presentacion();

//Agrega una nueva propiedad al objeto "persona" llamada "hobbies".

persona.hobbies = ["leer", "nadar", "play videojuegos"]
//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
let hobbies = Object.values(persona.hobbies)
for (i = 0; i < persona.hobbies.length; i++) {
    console.log(hobbies[i])
}

console.log(persona.hobbies);




