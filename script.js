let display = document.getElementById("display");
let jokeBox = document.getElementById("jokeBox");

const jokes = [
  "Why did the calculator go broke? Because it couldn’t count on anyone!",
  "I asked my calculator if it had friends. It said: 'I'm too calculating for that.'",
  "Never trust math teachers with graphing calculators. They're plotting something!",
  "Why was the math book sad? It had too many problems.",
  "What’s a calculator’s favorite game? Number munchers!",
  "I told my calculator a joke. It said 'Error: Too Funny'.",
  "How do you comfort a calculator? You press its buttons gently!"
];

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  jokeBox.innerText = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
    showRandomJoke();
  } catch (e) {
    display.value = "Error";
    jokeBox.innerText = "";
  }
}

function showRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeBox.innerText = jokes[randomIndex];
}
