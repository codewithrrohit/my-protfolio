function openInstagram(){

window.open("https://instagram.com/codewithrrohit","_blank");

}

function openGithub(){

window.open("https://github.com/codewithrrohit","_blank");

}


/* TYPING EFFECT */

const text = [

"App Developer",

"Website Developer",

"UI Designer"

];

let i = 0;

let j = 0;

let currentText = "";

let isDeleting = false;

function type(){

currentText = text[i];

if(isDeleting){

document.querySelector(".typing").textContent =
currentText.substring(0,j--);

}

else{

document.querySelector(".typing").textContent =
currentText.substring(0,j++);

}

if(!isDeleting && j === currentText.length){

isDeleting = true;

setTimeout(type,1000);

}

else if(isDeleting && j === 0){

isDeleting = false;

i++;

if(i === text.length) i = 0;

}

setTimeout(type,100);

}

type();
