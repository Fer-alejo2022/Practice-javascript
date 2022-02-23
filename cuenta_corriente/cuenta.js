class Cuenta{
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(ingreso) {
         this.cantidad = ingreso;
             if (this.cantidad <= 0) {
             return "no hay valor";
            } else {
             return "$"+this.cantidad+" <br> ";
            }
    }

    retirar(retiro) {
        this.cantidad = retiro;
        if (this.cantidad <= 0) {
               return"Cantidad de cuenta $0 <br>";
        } else{
            if (this.cantidad > 0) {
                  let  resta = parseInt(prompt("Ingrese cuanto desea retirar de su cuenta corriente, que sea menos que $"+this.cantidad));
                  let total = this.cantidad - resta;
                  return "$"+resta+" <br> Sueldo Actual en su Cuenta Corriente $"+total;
            }
        }
    }

    visualizar() {
        return `Titular : ${this.titular} <br>
                Cantidad en Cuenta Corriente : $${this.cantidad} <br> `;
    }

    retiroIngreso() {
        return `Cantidad Ingresada : ${this.ingresar(this.cantidad)} <br> 
                Cantidad Retirada :  ${this.retirar(this.cantidad)} <br> `;
    }

}

let sueldo = parseInt(prompt("¿De cuanto es su monto en su cuenta corriente"));
const cuenta = new Cuenta("Fernando",sueldo);

document.write(`Datos del Cliente ${cuenta.visualizar()}  <br> `);
document.write(`Actualización Cuenta Corriente <br> ${cuenta.retiroIngreso()} <br> `);
