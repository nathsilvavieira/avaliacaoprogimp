function inspecionar(segundos,novotempo) {
    if(novotempo>(segundos) && novotempo<(3*segundos)){
        console.log("Comida queimou!");
    }else if(novotempo<segundos){
        console.log ("Tempos insuficiente");
    }else if(novotempo>(3*segundos)){
        console.log("kabum!!!!");
    }else{
        console.log("Prato pronto, bom apetite!!!");
    }
}

let prato;

function microondas(prato,novotempo ){
    switch (prato) {
        case "pipoca":
        segundos =10;
        inspecionar(segundos,novotempo);
        break;
    case "macarrao":
        segundos =8;
        inspecionar(segundos,novotempo);
        break;
    case "carne":
        segundos =15;
        inspecionar(segundos,novotempo);
        break;
    case "feijao":
        segundos =12;
        inspecionar(segundos,novotempo);
        break;
    case "brigadeiro":
        segundos =8;
        inspecionar(segundos,novotempo);
        break;
    default:
        console.log("Prato inexistente");
        
    }   
}

microondas("pipoca",5);
microondas("pipoca",10);
microondas("pipoca",25);
microondas("pipoca",35);


