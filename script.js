const questions = [
  { text: "What is 27 × 14?", answer: 378, topic: "Multiplication" },
  { text: "What is 16 × 23?", answer: 368, topic: "Multiplication" },
  { text: "What is 9 × 8 × 5?", answer: 360, topic: "Multiplication" },
  { text: "What is 34 × 12?", answer: 408, topic: "Multiplication" },
  { text: "What is 3/4 of 48?", answer: 36, topic: "Fractions" },
  { text: "What is 1 1/2 + 2 1/4?", answer: 3.75, topic: "Fractions" },
  { text: "How many degrees are in a right angle?", answer: 90, topic: "Geometry" },
  { text: "A rectangle has length 9 cm and width 4 cm. What is its perimeter?", answer: 26, topic: "Geometry" },
  { text: "What is 6.4 + 3.75?", answer: 10.15, topic: "Decimals" },
  { text: "What is 12.5 − 4.75?", answer: 7.75, topic: "Decimals" },
  { text: "What is 144 ÷ 12?", answer: 12, topic: "Division" },
  { text: "What is 96 ÷ 8?", answer: 12, topic: "Division" },
  { text: "What is 450 + 275?", answer: 725, topic: "Addition" },
  { text: "What is 120 − 47?", answer: 73, topic: "Subtraction" }
];

const challengeForm = document.querySelector("#challenge-form");
const questionText = document.querySelector("#question-text");
const answerInput = document.querySelector("#answer-input");
const feedback = document.querySelector("#feedback");

let currentQuestion = 0;

function showQuestion(index) {
  const current = questions[index];
  questionText.textContent = current.text;
  answerInput.value = "";
  answerInput.setAttribute("aria-label", `Answer for ${current.topic} question`);
}

challengeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = Number(answerInput.value);
  const correct = Number(answer) === questions[currentQuestion].answer;

  feedback.textContent = correct
    ? "That's right — brilliant work! Here's another one."
    : "Not quite. Have another go — you've got this!";
  feedback.classList.toggle("incorrect", !correct);

  if (correct) {
    currentQuestion = (currentQuestion + 1) % questions.length;
    showQuestion(currentQuestion);
  }
});

showQuestion(currentQuestion);