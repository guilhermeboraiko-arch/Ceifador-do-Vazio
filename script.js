const ANO_LANCAMENTO = 2026;
const IDADE_MINIMA = 16;
let nomeUsuario = "";
let idadeUsuario = 0;
let anoAtual = new Date().getFullYear();

window.onload = function() {
    nomeUsuario = prompt("Bem-vindo ao Vazio! Como você se chama, viajante?");
    idadeUsuario = prompt("Olá, " + nomeUsuario + "! Qual a sua idade?");

    const conteudoSensivel = document.getElementById("conteudo-sensivel");
    const msgBoasVindas = document.getElementById("mensagem-boas-vindas");

    if (idadeUsuario >= IDADE_MINIMA) {
        alert("Acesso liberado, " + nomeUsuario + ". A foice do Nightborne te espera!");
        if (conteudoSensivel) conteudoSensivel.style.filter = "none";
    } else {
        alert("Cuidado, " + nomeUsuario + "! Você é jovem demais para as sombras. O conteúdo permanecerá oculto.");
        if (conteudoSensivel) conteudoSensivel.style.filter = "blur(20px)";
    }

    if (anoAtual === ANO_LANCAMENTO) {
        alert("GRANDE LANÇAMENTO " + ANO_LANCAMENTO + ": Void Reaper está disponível!");
    }

    if (msgBoasVindas) {
        msgBoasVindas.innerText = "Bem-vindo, " + nomeUsuario + "!";
    }
};

function alternarTema() {
    const corpo = document.body;
    const botao = document.getElementById("botao-tema");
    corpo.classList.toggle("light-mode");

    if (corpo.classList.contains("light-mode")) {
        botao.innerText = "Tema Escuro";
    } else {
        botao.innerText = "Tema Claro";
    }
}