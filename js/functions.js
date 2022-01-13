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

let albumSelectCart = [];

for (let i = 0; i < albumTitlesHtml.length; i++) {
  albumTitles.push(albumTitlesHtml[i].innerHTML);
  albumPrices.push(albumPricesHtml[i].innerHTML.replace('$', ''));
  albumYears.push(albumYearsHtml[i].innerHTML);

  let temp = new Album(nombre = albumTitles[i], precio = albumPrices[i], año = albumYears[i]);

  albumObjCollection.push(temp);
}

function selectAlbum(number){
  albumSelectCollection.push(albumObjCollection[number]);
  return albumObjCollection[number];
}

function countAlbums(){
  cantidadAlbums = 0;
  for (album of albumSelectCollection){
    cantidadAlbums++
  }
  return cantidadAlbums;
}

function sumPrices(){
  for (price of albumSelectCollection){
    subTotal += parseInt(price.precio);
  }
  return subTotal;
}

function calcularIva(){
  let iva = subTotal * 0.21;
  return precioTotal = iva + subTotal;
}

function mostrarResultados(number){
  selectAlbum(number);
  sumPrices();
  calcularIva();
  countAlbums()
  alert("$"+ albumObjCollection[number].precio + " añadidos. " + "\r\n" + "Album: " + albumObjCollection[number].nombre + "\r\n" + "subtotal: $" + subTotal + "\r\n" + "total (iva incl.): $" + precioTotal + "\r\n" + "Cantidad albums: " + cantidadAlbums);
}

function showCart(){
  let arrayOfNombres = [];
  let string = "";

  for (nombre of albumSelectCollection){
    arrayOfNombres.push(nombre.nombre)
  }
  albumSelectCart = arrayOfNombres.sort();

  for (let i=0; i < albumSelectCart.length; i++){
    string += albumSelectCart[i]+" $" +albumSelectCollection[i].precio + "\r\n";
  }

  alert(string + "\r\n Albums: " + cantidadAlbums + "\r\n Subtotal: $" + subTotal + "\r\n Total: $"+ precioTotal);
}

function hamburgerMenu() {
  var x = document.getElementById("navList");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

alert("Click en un album para agregar al carrito");
alert("Al hacer click en carrito se muestran los albums seleccionados, ordenados alfabéticamente");