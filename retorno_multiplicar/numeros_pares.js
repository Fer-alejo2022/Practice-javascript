const numbers = parseInt(prompt("Ingrese un Número mayor que 0"));

function acumulador(n1) {
    let contador=1;
    let acum = 1;

    for (i = 1; i <= n1; i++) {
           if (i%2 == 0) {
            //    me selecciona solo los numeros pares, y los multiplica cada uno de ellos
                 contador = contador * i;
            }
    }
    return `Multiplicador acumulativo : ${acum = acum * contador}`;
    
}

document.write(acumulador(numbers));