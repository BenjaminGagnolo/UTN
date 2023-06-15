
//genero nro aleatorio
const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

//verifico estado
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) { // == porque los tipos de datos son distintos 
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
