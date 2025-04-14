const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-20T00:00:00");
const tempoObjetivo2 = new Date("2025-05-01T00:00:00");
const tempoObjetivo3 = new Date("2025-12-31T00:00:00");
const tempoObjetivo4 = new Date("2025-12-31T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');
const imagemMeta = document.getElementById('imagem-meta');

const imagens = [
    'https://portalpne.com/wp-content/uploads/2025/03/1_whatsapp_image_2024_10_31_at_18_55_17-41170365.jpeg,' // Imagem para "Estudar Enem e Vestibulares"
    'https://comunidadecloud.com/wp-content/uploads/2023/05/stairs-5957112_1280-min-1024x724-1.jpg,' // Imagem para "Trabalhar"
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWa0vgqZAjjgwGSsTrZ4cl6qdo0MvP7sEpQ&s', // Imagem para "Praticar esportes"
    'https://easyjur.com/blog/wp-content/uploads/2023/11/celebracao-formatura.png'  // Imagem para "Viajar e formar"
];

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões e abas
        botoes.forEach(b => b.classList.remove('ativo'));
        abas.forEach(a => a.classList.remove('ativo'));

        // Adiciona a classe 'ativo' ao botão e aba clicados
        botao.classList.add('ativo');
        abas[index].classList.add('ativo');

        // Atualiza a imagem da meta
        imagemMeta.src = imagens[index];
        imagemMeta.style.display = 'block'; // Exibe a imagem
    });