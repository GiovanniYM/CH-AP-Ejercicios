
function secretSociety(members){
    const arr = [];
    for(let i = 0; i < members; i++){
        let membersOne = prompt("Ingrese el Nombre del integrante de la sociedad");
        arr.push(membersOne);
    }
    console.log("Los Integrantes de la sociedad son:")
    console.log (arr);
    let nameSocietyO = "";
    for(let i = 0; i < members; i++){
        let nameSociety = arr[i].substring(0,1);
        nameSocietyO = nameSocietyO + nameSociety ;
    }
    console.log("El nombre de la sociedad es: " + nameSocietyO.toUpperCase()); 
}

// secretSociety(3);
 secretSociety(+prompt("Ingresa el numero de integrantes de la sociedad secreta"));
 

