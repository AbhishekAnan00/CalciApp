let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

let string = "";
let arr = Array.from(buttons);
arr = arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerHTML == "c") {
      string = "";
      screen.value = string;
    } else {
      string += e.target.innerHTML;
      screen.value = string;
    }
  });
});
