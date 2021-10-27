function solucao(ano){
    if(ano > 2021){
        if(ano % 4 == 2){
            console.log("COPA DO MUNDO");
        }
        if(ano % 4 == 0){
            console.log("JOGOS OLIMPICOS");
        } 
        if(ano % 2 == 1){
            console.log("NÃO TEM EVENTO ESPORTIVO IMPORTANTE");
        }
    } else {
        console.log("Informe o ano a partir de 2021.")
    }
}

solucao(2022);