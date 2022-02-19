let phrase = prompt("Ingrese una Frase");

// función que nos calcula el número de caracteres de la frase ingresada
// function that calculates the number of characters of the entered phrase
function num_caracter(x) {
     for (i = 1; i < x.length; i++) {
          alert(x.length);
          break;
    }
}
// condicion que nos permite calcular solo una cadena de texto ingresada
// condition that allows us to calculate only an entered text string
if (phrase == "" || !isNaN(phrase)) {
     alert("ERROR ERROR!!");
} else {
    // se llama a la funcion
    // the function is called
    num_caracter(phrase);
}

