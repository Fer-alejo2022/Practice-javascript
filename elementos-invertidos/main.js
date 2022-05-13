let num = [];

for (i = 0; i < 10; i++) {
   num[i] = parseInt(prompt((i+1)+". Ingrese Número"));
}

let invertir = num.reverse();

document.write("Números Invertidos : "+invertir+"<br>");
