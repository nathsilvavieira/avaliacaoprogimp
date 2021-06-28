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
//-----------------------------pipoca
console.log("\n Pipoca");
microondas("pipoca",5);
microondas("pipoca",10);
microondas("pipoca",25);
microondas("pipoca",35);
//---------------------------- macarrao
console.log("\n Macarrao");
microondas("macarrao",5);
microondas("macarrao",8);
microondas("macarrao",17);
microondas("macarrao",30);
//---------------------- carne
console.log("\n Carne");
microondas("carne",5);
microondas("carne",15);
microondas("carne",31);
microondas("carne",50);
//--------------------------feijao
console.log("\n Feijao");
microondas("feijao",5);
microondas("feijao",12);
microondas("feijao",25);
microondas("feijao",50);
//------------------------brigadeiro
console.log("\n Brigadeiro");
microondas("brigadeiro",5);
microondas("brigadeiro",8);
microondas("brigadeiro",17);
microondas("brigadeiro",30);
//------------------------opcao invalida
console.log("\n Opcao inválida");
microondas("shampoo",5);


