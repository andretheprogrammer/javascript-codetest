import "./index.scss";
import { products } from "./api";
let { loadProduct, loadProducts } = products;

let onLoad = (ev) => {
  let { response, status } = ev.target;
  if (status !== 200) throw new Error("Bad result");

  showProducts(response);
};

loadProducts(onLoad);

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
    const productTitle = document.createElement("p");
    productTitle.classList.add("product-title");
    const productPrice = document.createElement("p");
    const productCurrency = document.createElement("p");
    const myList = document.createElement("ul");

    productTitle.textContent = products[i].name;
    productPrice.textContent = products[i].price + " " + products[i].currency;

    productItem.appendChild(myList);
    productItem.appendChild(productTitle).querySelector(".productTitle");
    productItem.appendChild(productPrice).querySelector(".productPrice");
    productItem.appendChild(productCurrency);
    let imgDOM = document.createElement("img");
    imgDOM.src = products[i].thumbnail;
    // Clicked Product
    imgDOM.onclick = function () {
      modal.style.display = "block";

      let productModalName = document.getElementById("modal-name");
      let productModalImg = document.getElementById("modal-img");
      let productModalDesc = document.getElementById("modal-desc");
      let productModalPrice = document.getElementById("modal-price");
      let productModalCurrency = document.getElementById("modal-currency");
      let activateBuyButton = document.getElementById("buy-btn");

      loadProduct(i).then((res) => {
        (productModalDesc.textContent = res.description),
          (productModalCurrency.textContent = res.currency);
      });

      productModalName.textContent = products[i].name;
      productModalImg.src = products[i].thumbnail;
      productModalPrice.textContent = "Price: " + products[i].price;
      activateBuyButton.style.display = "block";
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
  aboutImg.src =
    "https://images.ctfassets.net/fqa5nayer5tz/1fAN9sUD1T4N8o6clNRbD1/4113fab7def6b9da1d8c924dfe2d91d6/Panagora-office-5.jpg?fm=jpg&q=75&w=2560";
  aboutDesc.textContent =
    "We always bring passion, curiosity and solid teamwork to the table. All of this, coupled with our expertise in our respective fields, ensures we deliver truly unique solutions. We pride ourselves in having diverse skills, cultural backgrounds and personalities. We make sure that community and individual development is at the heart of everything that we do.  We are Panagora.";
  aboutPrice.textContent = "";
  aboutCurrency.textContent = "";
  disableBuyButton.style.display = "none";
};

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
