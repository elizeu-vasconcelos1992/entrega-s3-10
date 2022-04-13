
function position (primeiroLugar, segundoLugar, terceiroLugar) {

    const devs = [primeiroLugar, segundoLugar, terceiroLugar];
    
    if (segundoLugar === "Daniel"){

        console.log (`1º colocado ${devs[1]}, 2º colocado ${devs[0]} e 3º colocado ${devs[2]}`);

    } else if (terceiroLugar === "Daniel") {

        console.log (`1º colocado ${devs[0]}, 2º colocado ${devs[2]} e 3º colocado ${devs[1]}`);

    } else {

        return console.log (`1º colocado ${devs[0]}, 2º colocado ${devs[1]} e 3º colocado ${devs[2]}`);
    }
}

 position ("Daniel", "Manoel", "Rafael");
