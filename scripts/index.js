let jogador = "X";

function checkWinner() {
  let elements = document.getElementById("container").children;
  if (
    elements[0].innerText === elements[1].innerText &&
    elements[1].innerText === elements[2].innerText &&
    elements[2].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[3].innerText === elements[4].innerText &&
    elements[4].innerText === elements[5].innerText &&
    elements[5].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[6].innerText === elements[7].innerText &&
    elements[7].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[0].innerText === elements[3].innerText &&
    elements[3].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[1].innerText === elements[4].innerText &&
    elements[4].innerText === elements[7].innerText &&
    elements[7].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[2].innerText === elements[5].innerText &&
    elements[5].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[0].innerText === elements[4].innerText &&
    elements[4].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    return true;
  } else if (
    elements[2].innerText === elements[4].innerText &&
    elements[4].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    return true;
  }
  return false;
}

let winner = false;

function mark(element) {
  if (!winner) {
    if (element.innerText.length === 0) {
      element.innerText = jogador;
      winner = checkWinner();
      if (winner) {
        document.getElementById("messages").innerText = "Vencedor: " + jogador;
      }
      if (jogador === "X") {
        jogador = "O";
      } else {
        jogador = "X";
      }
    } else {
      alert("Elemento já preenchido");
    }
  }
}
