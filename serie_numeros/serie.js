let numbers = [5];

for (i = 0; i < 5; i++) {
   numbers[i] = parseInt(prompt((i+1)+". Ingrese Número"));
}

// variable que ordena los numeros crecientemente
let creciente = numbers.sort(function(a,b){
    return a-b;
})
// variable que ordena los numeros decrecientemente
let decreciente = numbers.sort(function(a,b){
    return b-a;
})

// slice devuelve una parte del arreglo en otro arreglo
document.write("Mayor : "+decreciente.slice(0,1)+" Menor : "+creciente.slice(4,5));