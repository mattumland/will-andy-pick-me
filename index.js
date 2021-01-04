var answers = [
  `It is certain.`,
  `It is decidedly so.`,
  `Without a doubt.`,
  `Yes - definitely.`,
  `You may rely on it.`,
  `As I see it, yes.`,
  `Most likely.',
  'Outlook good.`,
  `Yes.`,
  `Signs point to yes.`,
  `Reply hazy, try again.`,
  `Ask again later.`,
  `Better not tell you now.`,
  `Cannot predict now.`,
  `Concentrate and ask again.`,
  `Don't count on it.`,
  `My reply is no.`,
  `My sources say no.`,
  `Outlook not so good.`,
  `Very doubtful.`
]

var input = document.querySelector("#question");
var answerButton = document.querySelector(".get-answer");
var eightBall = document.querySelector(".eight-ball");
var responseBox = document.querySelector("#response-box");
var placeholder = document.querySelector("placeholder");

answerButton.addEventListener('click', function() {
  var question = getQuestion();
  var answer = getAnswer();
  changeDisplay(question, answer);
});

function getQuestion() {
  return input.value;
}

function getAnswer(){
  return answers[getRandomIndex(answers)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function changeDisplay(question, answer) {
  eightBall.classList.toggle("hidden");
  input.value = `Ask your question here!`;
  var newText =
  `<p>"${question}"</p><p>${answer}</p>`
  responseBox.innerHTML = newText;
}
