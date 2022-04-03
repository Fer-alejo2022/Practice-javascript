class Circulo {
      constructor(x,y) {
          this.x = x;
          this.y = y;
      }
       
      cuadrante() {
           if (this.x > 0 && this.y > 0) {
                 return "Primer Cuadrante";
           } else if (this.x < 0 && this.y > 0) {
                 return "Segundo Cuadrante"; 
           } else if (this.x < 0 && this.y < 0) {
                 return "Tercer Cuadrante";
           } else if (this.x > 0 && this.y < 0) {
                 return "Cuarto Cuadrante"; 
           } else {
                  return "Punto Inicial";
           }
      }
}

const x1 = prompt("Ingrese Coordenada 1");
const y1 = prompt("Ingrese Coordenada 2");
const circulo_2 = new Circulo(x1,y1);
alert(circulo_2.cuadrante());