const listaNumbers = [];
let numberComp = 0;
for(let i = 0; i < 10 ; i++){
    listaNumbers.push(+prompt("Dame el nuemro con posicion " + (i+1)));
    
    if (i < 1){
    numberComp = listaNumbers[i];
    }else{
        if (numberComp < listaNumbers[i]){
            numberComp = listaNumbers[i];
        }
    }
}
console.log("Los numeros proporcionados son:")
console.log(listaNumbers);
console.log("El numero mas alto es: " + numberComp);

