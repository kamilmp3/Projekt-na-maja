function checkQuiz() {
    const form = document.forms['quizForm'];
    let total = 7;
    let score = 0;

    for (let i = 1; i <= total; i++) {
        let question = form['q' + i];
        let correctFound = false;

        for (let j = 0; j < question.length; j++) {
            let label = question[j].parentElement;
            label.style.color = ""; // resetuj kolor

            if (question[j].value === '1') {
                label.style.borderLeft = "4px solid green"; // oznacz poprawną
                correctFound = question[j];
            }

            if (question[j].checked) {
                if (question[j].value === '1') {
                    label.style.color = "lightgreen";
                    score++;
                } else {
                    label.style.color = "red";
                    correctFound.parentElement.style.color = "lightgreen"; // pokaż poprawną
                }
            }
        }
    }

    let percent = Math.round((score / total) * 100);
    document.getElementById('result').innerHTML = `Twój wynik to: ${score}/${total} punktów / (${percent}%)`;
}

