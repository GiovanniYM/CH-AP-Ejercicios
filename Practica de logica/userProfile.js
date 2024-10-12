const infoUser ={
    nombre: "S/D",
    edad: "S/D",
    listaPeliculas:[], 
}

alert("Vamos a recabar unos datos acerca de ti")
infoUser.nombre = prompt("¿Cual es tu nombre?");
infoUser.edad = prompt("¿Cual es tu edad?");

//console.log(infoUser.listaPeliculas);
let noPeliculas = +prompt("¿Cuantas peliculas quieres guaradar?");
for(let i = 0; i < noPeliculas ; i++){
    infoUser.listaPeliculas.push(prompt("¿Cual es el nombre de la pelicula?") + " - Nota: " + prompt("Calificacion de la pelicula"));
}
console.log( "Los Datos recabados son los siguientes:")
console.log("Nombre: " + infoUser.nombre.toUpperCase());
console.log("Edad: " + infoUser.edad + " AÑOS" );
console.log("Peliculas Guardadas:");
for(let i = 0; i < noPeliculas ; i++){
    console.log(infoUser.listaPeliculas[i].toUpperCase());
}

