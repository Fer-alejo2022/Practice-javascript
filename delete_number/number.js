let vector = [];
for (i = 0; i < 10; i++) {
    vector[i] = parseInt(prompt((i+1)+". Ingrese Número"));
}
let deleted = parseInt(prompt("Posición de Número a eliminar"));
let cortar1 = vector.slice(0,(deleted-1));
let cortar2 = vector.slice(deleted,10);

document.write("ha seleccionado la posicion "+deleted+" <br> ");
document.write(cortar1+" "+cortar2);



