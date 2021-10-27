const sentence = "Botafogo é a minha paixão"

let word = "";
const NewSentence = [];

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === " "){ //transformei a string em vetor para pegar cada letra e comparar com espaço.
        NewSentence.push(word); //todo espaço encontrado será alocado no vetor "NewSentence".
        word = ""; //word é declarado como vazio, ou seja, não há caracteres.
        continue; //é preciso utilizar "continuar" para que o programa não finalize depois que achar os espaços.
    }
    word += sentence[i]; //os índices do vetor "sentence" que não possuam espaços serão adicionados a variável "word".
}
NewSentence.push(word); //declarando novamente este comando, com a adição dos novos valores em "word".

const InverseSentence = []; //declaração do vetor que irá receber os elementos de "New Sentence"
for(let i = NewSentence.length - 1; i >= 0; i--){ //para formar a frase de trás para frente é preciso utilizar a decrementação.
    InverseSentence.push(NewSentence[i]); //os valores do vetor "NewSentence" serão "empurrados" para o vetor "InverseSentence".   
}
console.log(InverseSentence); //Imprime os elementos contidos em "InverseSentence".