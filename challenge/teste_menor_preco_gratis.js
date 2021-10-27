function solucao(precos){

let qtd = 0,soma = 0,menor = Number.POSITIVE_INFINITY;

for(let item of precos){
    qtd++
    soma = soma += item;
    if(item < menor){
        menor = item;
    }
}
    if(qtd >= 5){
        console.log(soma - menor);
    } else {
        console.log(soma)
    }
}

const precos = [500,500,500,500,500,50];

solucao(precos);