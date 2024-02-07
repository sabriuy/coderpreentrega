function crearLista(){ 

let listaDeCompras = [];
while (true) {
    let productoUsuario = prompt("Agregar un item a su lista de compras:");

         if (productoUsuario === null) {
        break;
       }
   listaDeCompras.push(productoUsuario);
}
alert(listaDeCompras);
console.log(listaDeCompras);
}


crearLista();