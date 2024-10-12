
function arrayOfMultiples(numberR,lengthR){
    const arr = [];
    for(let i = 0; i < lengthR; i++){
     arr.push(numberR * (i+1));   
    }
    console.log (arr);
}
let numberUser = +prompt("Dame el numero");
let lengthUser = +prompt("Dame el nuemro de multiplos a ingresar");
arrayOfMultiples(numberUser,lengthUser);


