function getColor() {

let a = Math.floor(Math.random() * 250);
let b = Math.floor(Math.random() * 250);
let c = Math.floor(Math.random() * 250);

const color = `rgb(${a},${b},${c})`;

  document.body.innerHTML = `<h2>${color}</h2>`
  document.querySelector("body").style.background = color;
}

  setInterval((getColor), 3000);
