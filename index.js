// Variables (global, because why not?)

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const letters = "QAZWSXEDCRFVTGBYHNUJMIKOLP";

// Functions

const enhance = id => {
  const element = document.getElementById(id);
  const text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");

    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");

    letter.className = "letter";

    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);

    outer.appendChild(inner);
    element.appendChild(outer);
  });
}

document.getElementById("tree").onmouseover = event => {
  let iteration = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {

        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 25);
}

// Declare functions

enhance("channel-link");
