type Usser = {
    name:string;
    adrees:{
        city:string
        UF:string
    }
    }

function showMensageWelcome(usser: Usser){
    console.log(
        `seja bem vindo ${usser.name} de ${usser.adrees.city}
}

showMensageWelcome({
    name: 'Afonsos',
    adrees:{
        city: 'Mogi das Cruzes';
        UF: 'sP'
    }

})