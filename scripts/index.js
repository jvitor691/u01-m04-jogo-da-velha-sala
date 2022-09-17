let jogador = "X";

function mark(element) {
    // element.innerText.length == 0 ? element.innerText = jogador : alert("Elemento já preenchido");
    if(element.innerText.length == 0) {
        element.innerText = jogador;
        jogador == "X" ? jogador = "O" : jogador = "X";
    } else {
        alert("Elemento já preenchido")
    }    
}