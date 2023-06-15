const readlineSync = require("readline-sync");
const {
  generarNumeroAleatorio,
  verificarAdivinanza,
} = require("./adivinanza.js");

const numberByUser = () => {
  return readlineSync.question("Ingrese su numero: ");
};

const playGame = () => {
  const randomNumber = generarNumeroAleatorio();
  let userNumber = 0;

  console.log("¡Bienvenido a Adivina el número secreto!");
  console.log("Intenta adivinar el número del 1 al 100.\n");

  while (userNumber !== randomNumber) {
    userNumber = numberByUser(); //Puedo aplicar parseInt() para que userNumber sea numero
    verificarAdivinanza(randomNumber, userNumber)

    console.log(typeof randomNumber);
    console.log(typeof userNumber); 
  }
};

playGame()
