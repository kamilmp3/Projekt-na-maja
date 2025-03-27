function startQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <p>Jak nazywał się pierwszy komputer?</p>
        <button onclick="checkAnswer(true)">ENIAC</button>
        <button onclick="checkAnswer(false)">ZX Spectrum</button>
    `;
}

function checkAnswer(correct) {
    const quizContainer = document.getElementById("quiz-container");
    if (correct) {
        quizContainer.innerHTML = "<p>Brawo! Poprawna odpowiedź! 🎉</p>";
    } else {
        quizContainer.innerHTML = "<p>Niestety, błędna odpowiedź. Spróbuj ponownie!</p>";
    }
}
