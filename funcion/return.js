const number = parseFloat(prompt("Ingrese un Número"));

function solicitar_resultado(x) {
  let resultado;
   
    if (x < 1) {
        resultado = 2*x - 1;
    } else {
          if (1 > x || x < 2 ) {
                resultado = 3;
          } else {
                resultado = x + 1;
          }
    }

   return resultado; 
}

document.write("El resultado es : "+solicitar_resultado(number));