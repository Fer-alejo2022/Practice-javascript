class Paciente{
     constructor(nombre,apellido,peso,talla,edad) {
         this.nombre = nombre;
         this.apellido = apellido;
         this.peso = peso;
         this.talla = talla;
         this.edad = edad;
     }

     calcularImc() {
        return `Indice Masa Corporal : ${parseFloat(this.peso / Math.pow(this.talla * 2,2))}`;  
     }

     mayorEdad() {
         if (this.edad >= 18) {
             return true;
         } else {
             return false;
         }
     }

    mostrar_datos() {
        return `Nombre : ${this.nombre} <br>
                Apellido : ${this.apellido} <br>
                Peso : ${this.peso} <br> 
                Talla : ${this.talla} <br> 
                Edad : ${this.edad} <br> 
                ${this.calcularImc()} <br>
                Mayor de Edad : ${this.mayorEdad()}`;
    } 
}

let name = prompt("Ingrese Nombre");
let surname = prompt("Ingrese Apellido");
let peso = parseInt(prompt("Ingrese su peso"));
let talla = parseFloat(prompt("Ingrese su talla"));
let age = parseInt(prompt("Ingrese edad"));

const paciente1 = new Paciente(name,surname,peso,talla,age);

document.write(paciente1.mostrar_datos());

