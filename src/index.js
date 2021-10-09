import "./index.scss";

let request = new XMLHttpRequest();
let requestUrl = "./data/products.json";
request.open("GET", requestUrl);
request.responseType = "json";
request.send();

let jsonRequest = new XMLHttpRequest();
let jsonRequestURL1 = "./data/1.json";
let jsonRequestURL2 = "./data/2.json";
let jsonRequestURL3 = "./data/3.json";
let jsonRequestURL4 = "./data/4.json";
let jsonRequestURL5 = "./data/5.json";
let jsonRequestURL6 = "./data/6.json";
let jsonRequestURL7 = "./data/7.json";
let jsonRequestURL8 = "./data/8.json";


jsonRequest.onload = function () {
  const rawFile1 = jsonRequest.response;
  if (rawFile1) {
    showModalProducts(rawFile1);
  } else {
    alert("no json found");
  }
};

request.onload = function () {
  const rawFile = request.response;
  if (rawFile) {
    showProducts(rawFile);
  } else {
    alert("no json found");
  }
};

function showModalProducts(obj) {
  const modalProduct = obj;

  const productModalItem = document.createElement("section");
  const productModalTitle = document.createElement("h2");
  const productModalPrice = document.createElement("p");
  const productModalCurrency = document.createElement("p");

  productModalTitle.textContent = obj.name;
  productModalPrice.textContent = obj.price;
  productModalCurrency.textContent = "SEK";

  productModalItem.appendChild(productModalTitle);
  productModalItem.appendChild(productModalPrice);
  productModalItem.appendChild(productModalCurrency);

  section.appendChild(productItem);
}

function showProducts(obj) {
  const products = obj;



  for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement("section");
    const productTitle = document.createElement("h3");
    const productPrice = document.createElement("p");
    const productCurrency = document.createElement("p");
    const myList = document.createElement("ul");

    productTitle.textContent = products[i].name;
    productPrice.textContent = products[i].price + " " + products[i].currency;

    // const productNames = products[i].name;
    // for (let j = 0; j < productNames.length; j++) {
    //   const listItem = document.createElement("li");
    //   listItem.name = productNames[j];
    //   myList.appendChild(listItem);
    // }
    // const productImages = products[i].thumbnail;

    productItem.appendChild(myList);
    productItem.appendChild(productTitle).querySelector(".productTitle");
    productItem.appendChild(productPrice).querySelector(".productPrice");
    productItem.appendChild(productCurrency);
    let imgDOM = document.createElement("img");
    imgDOM.src = products[i].thumbnail;
    // Clicked Product
    imgDOM.onclick = function (  ) {
      modal.style.display = "block";
      let Url = 0;
      if (products[i].id == 1) {
        Url = jsonRequestURL1;
      }
      if (products[i].id == 2) {
        Url = jsonRequestURL2;
      }
      if (products[i].id == 3) {
        Url = jsonRequestURL3;
      }
      if (products[i].id == 4) {
        Url = jsonRequestURL4;
      }
      if (products[i].id == 5) {
        Url = jsonRequestURL5;
      }
      if (products[i].id == 6) {
        Url = jsonRequestURL6;
      }
      if (products[i].id == 7) {
        Url = jsonRequestURL7;
      }
      if (products[i].id == 8) {
        Url = jsonRequestURL8;
      }
      let productModalName = document.getElementById("modal-name");
      let productModalImg = document.getElementById("modal-img");
      let productModalDesc = document.getElementById("modal-desc");
      let productModalPrice = document.getElementById("modal-price");
      let productModalCurrency = document.getElementById("modal-currency");
      let activateBuyButton = document.getElementById("buy-btn");


      fetch(Url)
        .then(data => {return data.json()})
        .then(res => { productModalDesc.textContent = res.description, productModalCurrency.textContent = res.currency;})
        .catch(err => console.log(err))

        productModalName.textContent = products[i].name;
        productModalImg.src = products[i].thumbnail;
        productModalPrice.textContent = "Price: " + products[i].price;
        activateBuyButton.style.display = "block";

        // productModalDesc.textContent = selectedProduct.description;
    };
    myList.appendChild(imgDOM);

    section.appendChild(productItem);
  }
}
// On click about button
var aboutModalBtn = document.getElementById("about-modal-button");
aboutModalBtn.onclick = function () {
  modal.style.display = "block";
  let aboutTitle = document.getElementById("modal-name");
  let aboutImg = document.getElementById("modal-img");
  let aboutDesc = document.getElementById("modal-desc");
  let aboutPrice = document.getElementById("modal-price");
  let aboutCurrency = document.getElementById("modal-currency");
  let disableBuyButton = document.getElementById("buy-btn");

  
  aboutTitle.textContent = "About Panagora";
  aboutImg.src = "https://images.ctfassets.net/fqa5nayer5tz/1fAN9sUD1T4N8o6clNRbD1/4113fab7def6b9da1d8c924dfe2d91d6/Panagora-office-5.jpg?fm=jpg&q=75&w=2560";
  aboutDesc.textContent = "We always bring passion, curiosity and solid teamwork to the table. All of this, coupled with our expertise in our respective fields, ensures we deliver truly unique solutions. We pride ourselves in having diverse skills, cultural backgrounds and personalities. We make sure that community and individual development is at the heart of everything that we do.  We are Panagora.";
  aboutPrice.textContent = "";
  aboutCurrency.textContent = "";
  disableBuyButton.style.display = "none";
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
