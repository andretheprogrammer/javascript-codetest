import "./index.scss";

let requestURL = "./data/products.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const rawFile = request.response;
  if (rawFile) {
    showProducts(rawFile);
  } else {
    alert("no json found");
  }
};

function showProducts(obj) {
  const products = obj;

  for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement("section");
    const productTitle = document.createElement("h2");
    const productPrice = document.createElement("p");
    const myList = document.createElement("ul");

    productTitle.textContent = products[i].name;
    productPrice.textContent = "Price: " + products[i].price;

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
    let imgDOM = document.createElement("img");
    imgDOM.src = products[i].thumbnail;
    // Clicked Product 
    imgDOM.onclick = function () {
      modal.style.display = "block";
   
      
      let productModalImg = document.getElementById("modal-img");
      productModalImg.src = products[i].thumbnail;
      
    };
    myList.appendChild(imgDOM);

    section.appendChild(productItem);
  }
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
