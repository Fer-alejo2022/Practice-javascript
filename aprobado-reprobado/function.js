// variable name que es una constante que nos permite ingresar el nombre
const name = prompt("Ingrese su Nombre");
// console.log nos imprime el nombre ingresado de la variable name
console.log("El Nombre del Alumno : "+name);

// nos piden cuantas notas van a ser ingresadas
let amount = prompt("Ingrese Cantidad de Notas a Ingresar");
// acum en 0 por el momento
let acum = 0;

// bucle for con iterador inicial 0 e iterador final la cantidad de notas que se van ingresar, contador el i++
for(i = 0; i < amount; i++) {
    // ingresar las notas, si amount es 4, se ingresaran 4 notas, ya que es el iterador final
    let enter = parseFloat(prompt("Ingrese la nota "+(i+1)));

    // mostrar las notas por la consola    
    console.log("Nota "+(i+1)+" : "+enter);

    // nos suma las notas ingresadas hasta que termine de finalizar el ciclo for, tomando valor acum que se va aumentando en cada iteracion
    acum = acum + enter; 
}

// al finalizar el ciclo, las notas acumuladas se dividen por el valor ingresado en la variable amount, sacando así el promedio 
let average = parseFloat((acum)/amount);
// nos muestra por consola el resultado, y con el Math.round nos redondea
console.log("Promedio : "+Math.round(average));

// es una condicion if pero abreviada, average es menor que 4.0 el alumno reprueba, en caso contrario es aprobado, todo esto se guarda en una variable que es result
result = average < 4.0 ? "Reprobado" : "Aprobado";
// nos muestra si el alumno reprobo o no 
console.log("Aprobado o Reprobado : "+result);


