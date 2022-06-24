/*
PASSWORD GENERATOR
*/
const values = {};
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specials = '`!@#$%^&*(){}_+-=[]{};\':",.<>/?~°"';
const specialsArray = specials.split("");
const equivocabili = "ìlI1oO0";
let password = "";
const display = document.getElementById("final_pass");
display.value = "";


function getValues() {
  console.log("### GETTING VALUES ###");
  const length = document.getElementById("length").value;
  const special = document.getElementById("special").checked;
  const numbers = document.getElementById("numbers").checked;
  const upper = document.querySelectorAll(".radio_maiuscole");
  const simili = document.getElementById("simili").checked;

  upper.forEach((radio) => {
    if (radio.checked) {
      values.upper = radio.value;
    }
  });

  values.length = length;
  values.special = special;
  values.numbers = numbers;
  values.simili = simili;

  generateAllChars();
}

function generateAllChars() {
  console.log("### GENERATING PASSWORD ###");
  let temp = "";
  while (temp.length < values.length) {
    temp += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  values.upper === "true" ? (temp = temp.toUpperCase()) : null;
  values.upper === "false" ? (temp = temp.toLowerCase()) : null;
  values.upper === "mix" ? (temp = mixUpTheCases(temp)) : null;
  password = temp;
}

function mixUpTheCases(temp) {
  console.log("### MIXING UP CASES ###");
  let newTemp = "";
  for (let j = 0; j < temp.length; j++) {
    let i = Math.floor(Math.random() * 2);
    i === 0
      ? (newTemp += temp[j].toUpperCase())
      : (newTemp += temp[j].toLowerCase());
  }
  return newTemp;
}

function displayPassword() {
  display.value = password;
}

function generate() {
  generateAllChars();
  if (values.numbers) putNumbers();
  if (values.special) putSpecials();
  if (values.simili) deleteSimili();
  if (values.upper === "true") password = password.toUpperCase();
  if (values.upper === "false") password = password.toLowerCase();
  if (values.upper === "mix") password = mixUpTheCases(password);
  displayPassword();
}

function putNumbers() {
  console.log("### PUTTING NUMBERS IN ###");
  let temp = "";

  for (let j = 0; j < password.length; j++) {
    let i = Math.floor(Math.random() * 2);
    i === 0
      ? (temp += Math.floor(Math.random() * 10))
      : temp += password[j];
  }
  password = temp;
}


function putSpecials() {
  console.log("### PUTTING SPECIALS IN ###");
  let temp = "";
  let max = Math.floor(password.length / 3);
  let counter = 0;
  while (temp.length < password.length) {
    let i = 0;
    let j = Math.floor(Math.random() * alphabet.length);
    let k = Math.floor(Math.random() * 2);
    if (k === 0) {
      if (counter <= max) {
        temp += specialsArray[j];
        counter++;
      }
    } else {
      temp += alphabet[j];
    }
  }
  password = temp;
}

function deleteSimili() {
  console.log("### DELETING SIMILI ###");
  let temp = "";
  for (let i = 0; i < password.length; i++) {
    if(equivocabili.includes(password[i])){
      temp += alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(i, "preso", password[i]);
    } else {
      console.log(i, "non preso", password[i]);
      temp += password[i];
    }
  }
  password = temp;
}

function generatePassword() {
  getValues();
  generate();
}
