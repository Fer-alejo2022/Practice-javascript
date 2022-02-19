let phrase = prompt("Ingrese Una Frase");
let num = parseInt(prompt("Desde que número de caracter indicado desea cortar el texto"))

// Funcion que nos va cortar la Frase Ingresada
function cut(phr,nu) {
    let recortar = phr.substring(phr,nu);
    alert(recortar);
}
// condicion que nos permite calcular solo una cadena de texto ingresada e igual con Num que solo se ingrese números 
if (phrase == "" || !isNaN(phrase) || num == "" || isNaN(num)) {
     alert("ERROR");
} else {
    cut(phrase,num);
}

