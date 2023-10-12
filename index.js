const div1 = document.getElementsByClassName("inner-inner-box1");
const div2 = document.getElementsByClassName("inner-inner-box2");
const div3 = document.getElementsByClassName("inner-box");
const div4 = document.getElementsByClassName("outer-box");
const body = document.querySelector("body");

function logText1(e) {
  console.log(this.classList.value);
  //e.stopPropagation();
}

function logText2(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

div1[0].addEventListener("click", logText1);
div2[0].addEventListener("click", logText2);
div3[0].addEventListener("click", logText1);
div4[0].addEventListener("click", logText1);
body.addEventListener("click", logText1);
