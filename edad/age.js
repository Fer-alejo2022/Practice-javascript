let age = [10];

for (i = 0; i < 10; i++) {
      age[i] = prompt("Ingrese Edad del Alumno "+(i+1));
}

let mostrar = age.sort(function(a,b){return b-a});

document.write(mostrar);