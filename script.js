alert("Seja bem vindo à soma de seus pontos!");
var userName = prompt("Digite seu nome Jogador:");
var vitorias = prompt("Digite quantas vitórias você obteve:");
var derrotas = prompt("Agora digite quantas derrotas você obteve:");


vitorias = parseInt(vitorias);
derrotas = parseInt(derrotas);

if (isNaN(vitorias) || isNaN(derrotas)) {
    alert("Por favor, digite números válidos.");
} else {
    pontos(vitorias, derrotas);
}

function pontos(vitoria, derrota) {
    let resultado = vitoria - derrota;

    if (vitoria < 10) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Ferro.");
    } else if (vitoria >= 11 && vitoria <= 20) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Bronze.");
    } else if (vitoria >= 21 && vitoria <= 50) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Prata.");
    } else if (vitoria >= 51 && vitoria <= 80) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Ouro.");
    } else if (vitoria >= 81 && vitoria <= 90) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Diamante.");
    } else if (vitoria >= 91 && vitoria <= 100) {
        alert(userName + " tem um saldo de " + resultado + " e está no nível de Lendário.");
    } else {
        alert(userName + " tem um saldo de " + resultado + " e é classificado como Imortal.");
    }
}






