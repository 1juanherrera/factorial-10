//Hallar el factorial de 10 con una bucle while, una bifurcacion if y una sentencia break

let dato = 10;
let resultado = dato;
let i = 1;
while(true){
    if(i < dato){
    resultado = resultado * i;
    i++;
    console.log(resultado)
}
}