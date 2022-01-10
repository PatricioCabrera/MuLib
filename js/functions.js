class Album{
  constructor(nombre, precio, año) {
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
  }
}
let subTotal = 0;
let precioTotal = 0;
let precioactual;
let cantidadAlbums = 0;

let albums = document.querySelectorAll(".albumTitle");
let albumTitles = [];

let albumColection = [];

for (let i = 0; i < albums.length; i++) {
  albumTitles.push(albums[i].innerHTML);
  let albumtemporal = new Album(nombre = albumTitles[i]);

  albumColection.push(albumtemporal);
}



function sumarPrecios(suma, posicion){
  cantidadAlbums += 1;
  precioactual = suma;
  calcularIva(subTotal += suma);
  return mostrarResultados(posicion);
}

function calcularIva(){
  let iva = subTotal * 0.21;
  return precioTotal = iva + subTotal;
}

function mostrarResultados(posicion){
  alert("$"+ precioactual + " añadidos. " + "\r\n" + "Album: " + albumTitles[posicion] + "\r\n" + "subtotal: $" + subTotal + "\r\n" + "total (iva incl.): $" + precioTotal);
}

function hamburgerMenu() {
  var x = document.getElementById("navList");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}