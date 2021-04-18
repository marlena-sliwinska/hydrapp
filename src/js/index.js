import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */
// import moment from 'moment';

console.log("HELLO 🚀");

const counter = document.querySelector(".hydrapp__counter");
const addButton = document.querySelector(".hydrapp__addbutton--js");

const removeButton = document.querySelector(".hydrapp__removebutton--js");
const key = new Date().toLocaleString().slice(0, 10);

let n = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  n = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}
counter.innerHTML = localStorage.getItem(key);
function addGlass(i) {
  n++;
  counter.innerHTML = n;
  localStorage.setItem(key, n);
}

function removeGlass(i) {
  if (n > 0) n--;
  counter.innerHTML = n;
  localStorage.setItem(key, n);
}

addButton.addEventListener("click", addGlass);
removeButton.addEventListener("click", removeGlass);
