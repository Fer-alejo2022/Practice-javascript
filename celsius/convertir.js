const num = prompt("Desea Convertir a Celsius a Fahrenheit presione 1,  de Fahrenheit a Celsius presione 2");

if (num == 1) {
    let c = prompt("Ingrese Temperatura en Celsius");
    let f = parseFloat((c*1.8) + 32);
    document.write("LA TEMPERATURA EN FAHRENHEIT ES "+f);

} else if (num == 2) {
    let f = prompt("Ingrese Temperatura en Fahrenheit");
    let c = parseFloat(((f-32)/1.8));
    document.write("LA TEMPERATURA EN CELSIUS ES "+c);

} else {
    document.write("ERRROR ERROR");
}