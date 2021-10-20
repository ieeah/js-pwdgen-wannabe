/*
PASSWORD GENERATOR
*/

// ottenere nome dall'utente e assegnarlo ad una costante
const name = prompt("Per iniziare a creare la tua password facci sapere qual è il tuo nome!");

// ottenere cognome dall'utente e assegnarlo ad una costante
const lastName = prompt("e il tuo cognome?");

// ottenere colore preferito dall'utente e assegnarlo ad una costante
const favColor = prompt("per ultima cosa, qual è il tuo colore preferito?");

// dichiarare una nuova costante e assegnarle il valore
    // usando una literal template
const newPassword = `${name}${lastName}${favColor}21`;

    // usando una regolare stringa
// const newPassword = name + lastName+favColor+"21";

// output selezionare un elemento HTML e modificarne il contenuto
document.getElementById("newPassword").innerHTML = newPassword;

//modificare l'intestazione della pagina per personalizzare l'esperienza
document.getElementById("hello").innerHTML = `Ciao ${name}!`;
