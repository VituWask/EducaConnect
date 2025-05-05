let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('progress').textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;

    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    const choices = document.querySelectorAll('.choice');
    question.choices.forEach((choice, index) => {
        choices[index].textContent = choice;
        choices[index].disabled = false;
        choices[index].style.display = 'block';
    });
}


function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const buttons = document.querySelectorAll('.choice');

    // Desativa os botões para evitar cliques duplos
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctAnswer) {
        score++;
        buttons[selectedIndex].classList.add('correct');
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        showHint();
    }

    setTimeout(() => {
        // Limpa estilos e reativa botões
        buttons.forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
        });

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            localStorage.setItem('score', score);
            window.location.href = "final.html";
        }
    }, 800);
}

function showHint() {
    const hints = [
        "Você errou, pergunte ao seu responsável!",
        "NÃÃÃO, Não se desanime! Você consegue!",
        "Não é essa resposta, Peça ajuda do professor",
        "Leia bem a pergunta, Você consegue na próxima"
    ];
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    alert("Dica: " + randomHint);
}

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.onload = () => {
    shuffleQuestions(questions);
    displayQuestion();
};
