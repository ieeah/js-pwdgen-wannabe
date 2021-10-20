/*
PASSWORD GENERATOR
*/

// ottenere nome dall'utente e assegnarlo ad una costante
const name = prompt("Per iniziare a creare la tua password facci sapere qual è il tuo nome!");

// ottenere cognome dall'utente e assegnarlo ad una costante
const lastName = prompt("e il tuo cognome?");

// ottenere colore preferito dall'utente e assegnarlo ad una costante
const favColor = prompt("per ultima cosa, qual è il tuo colore preferito?");

// output selezionare un elemento HTML e modificarne il contenuto
document.writeln(name + lastName + favColor + "21");

//modificare l'intestazione della pagina per personalizzare l'esperienza
document.getElementById("hello").innerHTML = `Ciao ${name}!`;