/*
PASSWORD GENERATOR
*/

// ottenere nome dall'utente e assegnarlo ad una costante
const name = prompt('Come ti chiami?');

// ottenere cognome dall'utente e assegnarlo ad una costante
const lastName = prompt("Qual è il tuo cognome?");

// ottenere colore preferito dall'utente e assegnarlo ad una costante
const favColor = prompt("per ultima cosa, qual è il tuo colore preferito?");

// dichiarare una nuova costante e assegnarle il valore
const newPassword = `${name}${lastName}${favColor}21`;

// const newPassword = nome + lastName + favColor + '21';


// output selezionare un elemento HTML e modificarne il contenuto
document.getElementById('newPassword').innerHTML = newPassword;

//modificare l'intestazione della pagina per personalizzare l'esperienza
document.getElementById("hello").innerHTML = 'ciao ' + name + lastName
