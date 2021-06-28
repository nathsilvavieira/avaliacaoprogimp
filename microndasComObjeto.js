
/* Solucionando atividade com Objeto e Metodo*/

/*CRIANDO OBJETO*/
let microondas = { 
    "Pipoca": 10,  //propriedades objeto do enunciado
    "Macarrão": 8, 
    "Carne": 15,
    "Feijão": 12,
    "Brigadeiro": 8,
/* CRIANDO METODO: timer do Microondas adicionando as acoes CASO CONDICOES SEJAM SATISFEITAS*/
    "timer": function (segundos, prato) { 
        if (this[prato] == undefined) { //compara se prato é válidos se falso retorna prato inexistente
            console.log("Prato inexistente");
        } else {
            if (this[prato] > segundos) { //comparador de tempo do prato é superior ao padrao se falso retorna tempo insuficiente
                console.log("Tempo insuficiente");
            } else if (segundos >2 * this[prato] && segundos  <= 3 * this[prato]) { //caso segundos informado maior que 2*o padrao e menor que 3* o padrao retorna queimou 
                console.log("Queimou");
            } else if (segundos  >  3 * this[prato]) { //caso segundos informado m3* o padrao retorna kabum
                console.log("Kabum!");
            } else {
                console.log("Prato pronto, bom apetite!!!"); // caso tempo e prato sejam true retornar mensagem positiva no console
            }
        }
    }
}
/*TESTANDO CENARIOS*/
microondas.timer(31,"Pipoca");
microondas.timer(21,"Pipoca");
microondas.timer(10,"Pipoca");
microondas.timer(5,"Pipoca");
microondas.timer(10,"Chocolate");




//console.log(microondas["Pipoca"]) //impreme o tempo do microndas
//console.log(microondas["chocolate"]);//imprime undefined
