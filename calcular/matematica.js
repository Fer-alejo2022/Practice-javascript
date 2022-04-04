function Operar(operacion,n1,n2){
     let escoger = operacion;
     let x = n1;
     let y = n2;
     
     if(escoger == "Suma") {
        return "La suma : "+ parseFloat(x+y); 

     }else if (escoger == "Resta") {
        return "La resta : "+ parseFloat(x-y);

     }else if (escoger == "Multiplicacion") {
        return "La multiplicacion : "+ parseFloat(x*y);

     }else if (escoger == "Division") {
        return "La division : "+ parseFloat(x/y);

     }else if (escoger == "Exponenciacion") {
         return "La exponenciacion : "+ parseFloat(x**y);

     }else if (escoger == "Residuo") {
         return "El residuo : "+ parseFloat(x%y);

     }else {
         return -1;
     }
}

let aritmetica = prompt("¿Cual Operación desea realizar?");
let numero1 =  parseFloat(prompt("Ingrese Número 1"));
let numero2 = parseFloat(prompt("Ingrese Número 2"));

alert(Operar(aritmetica,numero1,numero2));