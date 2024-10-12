let frase = prompt("Dame la frase").toUpperCase();
frase = frase.replace(/ /g, "");
let fraseCad = frase.split("");
let fraseInvert = fraseCad.reverse();
let fraseInvertJoin = fraseInvert.join("");
console.log(fraseInvertJoin);
console.log(frase);
if (frase == fraseInvertJoin){
    console.log ("Es un palindromo");
}else{
    console.log ("No es un palindromo");
}

