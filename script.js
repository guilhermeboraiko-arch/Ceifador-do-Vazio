function verificarIdade() {
    let idade = prompt("Para acessar o conteúdo do Nightborne, digite sua idade:");

    if (idade >= 16) {
        alert("Acesso liberado para a nova geração de Ceifadores!");
        document.getElementById("conteudo-sensivel").style.filter = "none";
    } else {
        alert("Conteúdo restrito. Você ainda não tem idade para enfrentar o vazio.");
    }
}

function boasVindas() {
    let nome = document.getElementById("nome-usuario").value;
    let mensagem = document.getElementById("mensagem-boas-vindas");

    if (nome !== "") {
        mensagem.innerText = "Bem-vindo, " + nome + ". A foice do Nightborne espera por você!";
        mensagem.style.color = "#9d4edd";
    } else {
        alert("Por favor, digite seu nome!");
    }
}

window.onload = verificarIdade;

const ANO_LANCAMENTO = 2026;
const anoAtual = new Date().getFullYear();

if (anoAtual === ANO_LANCAMENTO) {
    alert("GRANDE LANÇAMENTO 2026: Void Reaper está disponível!");
}

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