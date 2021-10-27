function solucao(tempo,distancia){
    
    if(tempo < 5){
        console.log(600);
    }
    if(tempo >= 5 && tempo <= 60){
        console.log((tempo * 100) + (distancia * 50));
    }
    if(tempo > 60){
        if(distancia < 100){
            console.log(distancia * 200);
        } 
        else {
            console.log(distancia * 150);
        }

    }

}

solucao(90,101);