function mouseOver () {
    document.getElementById("mova").innerHTML = " Dias de treino Segunda há Sexta.";
    document.getElementById("move").innerHTML = " Dias de treino Segunda há Sexta.";
    document.getElementById("mover").innerHTML = " Dias de treino. Segunda há Sexta.";
}

function mouseOut () {
    document.getElementById("mova").innerHTML = " 2 vezes na semana Consulta Horários";
    document.getElementById("move").innerHTML = " 3 vezes na semana Consulta Horários";
    document.getElementById("mover").innerHTML = " 5 vezes na semana Consulta Horários";
}

function mobileMenu(){
    if (itens.style.display == 'block') {
    itens.style.display = 'none'
    } else {
     itens.style.display = 'block'
    }  
}