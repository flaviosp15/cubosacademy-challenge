function solucao(produtos){

let item, soma = 0, totalTop = 0;

    for(item of produtos){
        soma = soma + item.preco;
        if(item.preco > 10000){      
            totalTop = totalTop += item.preco;
        }   
    } 
    console.log({"totalTop":totalTop,"percentual":totalTop / soma});
}

const produtos = [
    {
        nome: "Camiseta",
        preco: 7000 // em centavos
    },
    {
        nome: "Tenis",
        preco: 8000 // em centavos
    },
    {
        nome: "Relogio",
        preco: 15000 // em centavos
    }
    ]

solucao(produtos);