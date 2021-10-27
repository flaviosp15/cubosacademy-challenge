function solucao(letra,palavras){   

let qtd = 0;

    for(let item of palavras){
        if(item[0] != letra){
        qtd++;
        }
    }
    console.log(qtd);
}

const palavras = [
    {
      "letra": "m",
      "palavras": [
        "mamao",
        "maca",
        "melao",
        "melancia",
        "laranja"
      ]
    }
  ]

solucao(palavras[0].letra,palavras[0].palavras);
