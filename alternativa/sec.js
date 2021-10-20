/*
PASSWORD GENERATOR
*/

// ottenere nome dall'utente e assegnarlo ad una costante
const leftObject = prompt("Qual è il primo oggetto alla tua sinistra?");

// ottenere cognome dall'utente e assegnarlo ad una costante
const shoesColor = prompt("di che colore sono le tue scarpe preferite?");

// ottenere colore preferito dall'utente e assegnarlo ad una costante
const nickname = prompt("per ultima cosa, il soprannome che avevi alle medie?");

// dichiarare una nuova costante e assegnarle il valore
    // usando una literal template
const newPassword = `${leftObject}èdiCol0r3${shoesColor}elOchi4mo${nickname}#`;

// output selezionare un elemento HTML e modificarne il contenuto
document.getElementById("newPassword").innerHTML = newPassword;
