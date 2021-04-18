import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀');

let counter = document.querySelector('.hydrapp__counter');

let n=0;
console.log(n);

function addGlass(i)
{  
    n=n+1;
    counter.innerHTML=n; 
}


function removeGlass(i)
{ 
    if (n>0) n=n-1;
    counter.innerHTML=n; 
  }


const addButton = document.querySelector('.hydrapp__addbutton--js');
addButton.addEventListener('click',addGlass);

const removeButton = document.querySelector('.hydrapp__removebutton--js');
removeButton.addEventListener('click',removeGlass);