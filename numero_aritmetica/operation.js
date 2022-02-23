class Operaciones{
    constructor(num1,num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    variable(num_1,num_2) {
      this.num1 = num_1;
      this.num2 = num_2;
    }

    sumar(s1,s2) {
       this.variable(s1,s2);
       return `Suma : ${this.num1 + this.num2}`;
    }

    resta(r1,r2) {
         this.variable(r1,r2);
         return `Resta : ${this.num1 - this.num2}`; 
    }

    multiplicar(m1,m2) {
         this.variable(m1,m2);
         return `Multiplicación : ${this.num1 * this.num2}`;
    }

    división(d1,d2) {
          this.variable(d1,d2);
          return `División : ${this.num1 / this.num2}`;
    }

    resto(rst1,rst2) {
          this.variable(rst1,rst2);
          return `Resto : ${this.num1 % this.num2}`;  
    }

    raiz(rz1,rz2) {
         this.variable(rz1,rz2);
         return `Raiz Cuadrada de ${this.num1} es ${Math.sqrt(this.num1)} <br> Raiz de Cuadrada ${this.num2} es ${Math.sqrt(this.num2)}`;
    }
    
    mostrar() {
        return `${this.sumar(this.num1,this.num2)} <br>
                ${this.resta(this.num1,this.num2)} <br>
                ${this.multiplicar(this.num1,this.num2)} <br>
                ${this.división(this.num1,this.num2)} <br> 
                ${this.resto(this.num1,this.num2)} <br> 
                ${this.raiz(this.num1,this.num2)}`;
    }
}

let numero1 = parseInt(prompt("Ingrese un Número"));
let numero2 = parseInt(prompt("Ingrese otro Número"));

const operacion1 = new Operaciones(numero1,numero2);
document.write(operacion1.mostrar());