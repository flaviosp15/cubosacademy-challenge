function solucao(obj){

  if(obj.temIngresso === true){
      if(obj.idade >= obj.censura || obj.estaComPais === true){
            if(obj.temCarteirinha === true || obj.idade < 18){
                console.log("MEIA");
            } else {
                console.log("INTEIRA");
            }
        } else {
          console.log("ACESSO NEGADO");
        }
    } else {
      console.log("ACESSO NEGADO");
    }
}

let obj = {
    "temIngresso": true,
    "idade": 14,
    "temCarteirinha": true,
    "censura": 16,
    "estaComPais": true
  }

solucao(obj);