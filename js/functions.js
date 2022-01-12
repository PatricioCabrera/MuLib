// La clase guardará cada album en el html en forma de objeto.

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

let albumTitlesHtml = document.querySelectorAll(".albumTitle");
let albumTitles = [];

let albumPricesHtml = document.querySelectorAll(".albumPrice");
let albumPrices = [];

let albumYearsHtml = document.querySelectorAll(".albumYear");
let albumYears = [];

let albumObjCollection = [];
let albumSelectCollection = [];

for (let i = 0; i < albumTitlesHtml.length; i++) {
  albumTitles.push(albumTitlesHtml[i].innerHTML);
  albumPrices.push(albumPricesHtml[i].innerHTML.replace('$', ''));
  albumYears.push(albumYearsHtml[i].innerHTML);

  let temp = new Album(nombre = albumTitles[i], precio = albumPrices[i], año = albumYears[i]);

  albumObjCollection.push(temp);
}

function selectAlbum(number){
  return albumSelectCollection.push(albumObjCollection[number])
}

function countAlbums(){
  return cantidadAlbums += 1;
}

function sumPrices(){
  for (price of albumSelectCollection){
    precioTotal += parseInt(price.precio);
  }
  return precioTotal;
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