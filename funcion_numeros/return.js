let a = parseInt(prompt("Ingrese un Número"));
let a2 = parseInt(prompt("Ingrese otro Número"));

function devolver(num1,num2) {
   if (num1 === num2) {
      return 0;
   } else {
        if (num1 > num2) {
            return 1;
        } else {
           return -1;
       }
   }
}

let call = devolver(a,a2);
alert(call);