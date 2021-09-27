const quizform = document.querySelector(".triangle-quiz-form");
console.log(quizform);

const submitBtn = document.querySelector("#submit-button");
console.log(submitBtn);

const output = document.querySelector(".output");
console.log(output);

const correctAnswers = [
    "90°",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
    "right angled",
];

function calculateScore() {
    console.log('Inside submit button');
    const formResults = new FormData(quizform);
    let score = 0,
        index = 0;

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        console.log('index:', index, 'score:', score);
        index++;
    }

    output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);