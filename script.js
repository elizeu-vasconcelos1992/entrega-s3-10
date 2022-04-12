
function position (primeiroLugar, segundoLugar, terceiroLugar) {


    if (primeiroLugar === devs [0]){

        console.log (`1º colocado ${primeiroLugar}, 2º colocado ${segundoLugar} e 3º colocado ${terceiroLugar}`);
        
    } else if (segundoLugar === devs[0]){

        console.log (`1º colocado ${segundoLugar}, 2º colocado ${primeiroLugar} e 3º colocado ${terceiroLugar}`);

    } else if (terceiroLugar === devs[0]) {

        console.log (`1º colocado ${primeiroLugar}, 2º colocado ${terceiroLugar} e 3º colocado ${segundoLugar}`);

    } 

}


let devs = ["Daniel", "Manoel", "Rafael"];


// INSIRA NA FUNÇÃO BAIXO O NOME DOS DEVS DE ACORDO COM SUA CLASSIFICAÇÃO PARCIAL

position ("Manoel", "Daniel", "Rafael");

// VEJA NO CONSOLE O RESULTADO FINAL

