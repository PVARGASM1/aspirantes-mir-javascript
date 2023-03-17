// Crea una variable llamada pedro
let pedro = {

    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["prograar", "squash", "piano"],
    estatura: 1.8, //Agrega una propiedad con llave estatura y valor 1.8
    
    saluda: function(){ //Agrégale al objeto una función llamada saluda
    return "Hola, me llamo " + this.nombre;
    }
    }
    
    console.log("edad: " + pedro.edad); //consola el valor de la llave edad.
    
    //Elimina la propiedad con llave activo
    delete pedro.activo;
    
    //Recorre todas las propiedades e imprímelas en consola
    console.log (pedro.activo);
    console.log("nombre: " + pedro.nombre);
    console.log("hobbies: " + pedro.hobbies);
    console.log("estatura: " + pedro.estatura);
    console.log(pedro.saluda());
    
    