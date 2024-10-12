function sumOfResistor(numberResistor){
    const arr = [];
    for(let i = 0; i < numberResistor; i++){
        let resistor = Math.abs(+prompt("ingrese el valor de la resistencia"));
        arr.push(resistor);   
        

    }
    console.log("Nota: Los balores Negativos se toman con valor absoluto");
    console.log("Matriz valores ingresados aplicando ABS");
    console.log (arr);
    const total = arr.reduce((a,b)=>a+b,0);
    console.log ("El valor de la resistencia equivalente es:" + total);
}

let numberResUser = +prompt("Ingresa el numero de resitencias a sumar");
sumOfResistor(numberResUser);