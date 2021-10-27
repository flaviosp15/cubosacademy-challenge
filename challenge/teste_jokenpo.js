function solucao(andre,joao){

    if(andre === joao){
        console.log("EMPATE");
    }
    if(andre === "TESOURA" && joao === "PAPEL"){
        console.log("ANDRE");
    }
            if(andre === "PAPEL" && joao === "TESOURA"){
                console.log("JOAO");
            } 
    if(andre === "PEDRA" && joao === "TESOURA"){
        console.log("ANDRE");
    }
            if(andre === "TESOURA" && joao === "PEDRA"){
                console.log("JOAO");
            }
    if(andre === "PAPEL" && joao === "PEDRA"){
        console.log("ANDRE");
    }
            if(andre === "PEDRA" && joao === "PAPEL"){
                console.log("JOAO");
            }   
}

solucao("PAPEL","TESOURA");