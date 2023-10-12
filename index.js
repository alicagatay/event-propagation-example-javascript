const divs = document.querySelectorAll("div");

const body = document.querySelector("body");

function logText(e) {
  console.log(this.classList.value);
}

divs.forEach((div) => div.addEventListener("click", logText));

body.addEventListener("click", logText);
