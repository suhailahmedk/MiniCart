let obj = {};

let names = ['Blue Pen', 'Book', 'Pancel', 'Sharpner', 'Eraser', 'Compass', 'Divider', 'Protractor'];
let Prices = ['200', '100', '50', '350', '300', '250', '100', '250'];
let urls = ['https://source.unsplash.com/400x300/?Pen', 'https://source.unsplash.com/400x300/?book', 'https://source.unsplash.com/400x300/?Pancel', 'https://source.unsplash.com/400x300/?sharpener', 'https://source.unsplash.com/400x300/?eraser', 'https://source.unsplash.com/400x300/?compass', 'https://source.unsplash.com/400x300/?divider', 'https://source.unsplash.com/400x300/?protractor'];
function addRows() {
  let i = 0;
  for (i=0;i < names.length; i++) {
    str = "<div class='col-md-3' id='id_" + (i + 1) + "'>";
    str += "<div class='card-body'><div class='d-flex' style='width:18rem;'><div class='p-2 align-self-start'>";
    str += "<a href='#' class='btn btn-danger glyphicon glyphicon-minus' onclick=\"Removequntities('id_" + (i + 1) + "')\"></a></div>";
    str += "<div class='p-2 align-self-center' id='tid'><h5 class='card-title'>" + names[i] + "</h5></div> <div class='p-2 align-self-end'>";
    str += "<a href='#' class='btn btn-success glyphicon glyphicon-plus' onclick=\"addToCart(document.getElementById('id_" + (i + 1) + "'))\"></a></div></div>";
    str += "<div class='card' style='width: 16rem;'><img src=" + urls[i] + " class='card-img-top' alt='...' id='img_1'></div> <div class='container'>";
    str += "<h4>Price: $<label>" + Prices[i] + "</label></h4> </div></div></diV>";
    document.querySelector(".row").innerHTML += str;
  }
}


function addToCart(el) {
  let name = el.querySelector("h5").innerHTML;
  let im = el.querySelector("img").getAttribute("src");
  let price = el.querySelector("h4 label").innerHTML;
  let iD = el.getAttribute("id");
  if (iD in obj) {
    addquntities(obj[iD]);
  }
  else {
    obj[iD] = iD + "1";
    let val = document.getElementById("table_1");
    let str = "<tr id='" + obj[iD] + "'><td><img src=" + im + " class='card-img-top' alt='...' id='img_1' style='width: 4rem;'>" + "</td><td>" + name + "</td><td>";
    str += "<div class='d-flex' style='width:18rem;'><div class='p-2 align-self-start'><a href='#' class='btn btn-danger glyphicon glyphicon-minus' onclick=\"Removequntities('" + iD + "')\"></a></div><div class='p-2 align-self-center'><label class='label text-dark Quant'>1</label></div><div class='p-2 align-self-end'><a href='#' class='btn btn-success glyphicon glyphicon-plus ' onclick=\"addquntities('" + obj[iD] + "')\"></a></div></div></td><td>$<label class='price'>" + price + "</label></td><td>$<label class='total'>" + price + "</label></td></tr>";
    val.innerHTML += str;

  }
}

function addquntities(iD) {
  let el = document.getElementById(iD);
  let quant = el.querySelector(".Quant");
  let num = parseInt(quant.innerHTML);
  quant.innerHTML = num + 1;
  let price = el.querySelector('.price');
  let total = el.querySelector('.total')
  total.innerHTML = parseInt(price.innerHTML) * parseInt(quant.innerHTML);

}

function Removequntities(iD) {
  if (iD in obj) {
    let el = document.getElementById(obj[iD]);
    let quant = el.querySelector(".Quant");
    let num = parseInt(quant.innerHTML);
    quant.innerHTML = num - 1;
    let price = el.querySelector('.price');
    let total = el.querySelector('.total')
    total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML);
    if (parseInt(total.innerHTML) == 0) {
      el.remove();
      delete obj[iD];
    }
  }
}

function EmptyCart(){
  for (const [key, value] of Object.entries(obj)) {
    let el = document.getElementById(value);
    el.remove();
    delete obj[key];
  }
}