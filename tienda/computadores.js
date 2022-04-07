let vendedores = [];
let acum = 0;
for (i = 0; i < 10; i++) {
     vendedores[i] = parseInt(prompt("Ingrese Monto de Venta del vendedor "+(i+1)));
     acum = acum + vendedores[i];    
}

function montoTotal(total) {
    if (total > 1000) {
        return `Monto total mayor que 1000, la comision es : $${parseFloat(Math.round((total * 15)/100))}`;
   } else if (total >= 500 && total <= 1000) {
        return `Monto total mayor o igual que 500 y menor e igual 1000, la comision es : $${parseFloat(Math.round((total * 5)/100))}`;
   } else if (total < 500) {
        return `No hay Comisión`;
   }

} 

alert(montoTotal(acum));
