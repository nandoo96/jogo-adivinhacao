let secretNumber; // Número secreto
let isGameStarted = false; // Verifica se o jogo já foi iniciado

// Função para iniciar o jogo
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    isGameStarted = true;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('playAgainBtn').style.display = 'none';
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = 'Estou pensando em um número entre 1 e 100. Tente adivinhar!';
}

// Função para verificar o palpite do usuário
function guessNumber() {
    if (!isGameStarted) {
        alert('Por favor, inicie o jogo clicando em "Iniciar Jogo".');
        return;
    }

    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
    } else {
        if (guess === secretNumber) {
            message.textContent = 'Parabéns! Você adivinhou o número secreto!';
            document.getElementById('playAgainBtn').style.display = 'block';
            isGameStarted = false;
        } else if (guess < secretNumber) {
            message.textContent = 'Tente um número maior.';
        } else {
            message.textContent = 'Tente um número menor.';
        }
    }
}

// Adiciona um event listener para o botão "Iniciar Jogo"
document.getElementById('startBtn').addEventListener('click', startGame);

// Adiciona um event listener para o botão "Enviar Palpite"
document.getElementById('guess').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        guessNumber();
    }
});

// Adiciona um event listener para o botão "Jogar Novamente"
document.getElementById('playAgainBtn').addEventListener('click', startGame);
