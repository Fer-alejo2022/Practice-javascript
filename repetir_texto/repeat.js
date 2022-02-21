let phrase = prompt("Ingrese Una Frase");
let repeat = parseInt(prompt("¿Cuantas veces desea repetir el Texto?"));

// funcion que nos va a repetir el texto que nosotros ingresemos
function text_repeat(ph,re) {
   for (i = 1; i <= re; i++) {
         alert((i)+". "+ph);
   }
}
// condicion que nos valida si se esta ingresando letras y numeros 
if (phrase == "" || !isNaN(phrase) || repeat == "" || isNaN(repeat)){
      alert("ERROR");
} else {
    // llamar a la funcion
    text_repeat(phrase,repeat)
}