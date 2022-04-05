const year = prompt("Ingrese Año");
let si_no = year%4 == 0 ? "Bisiesto" : year%100 == 0 && year%400 == 0 ? "No bisiesto": "No bisiesto"

alert(""+si_no);