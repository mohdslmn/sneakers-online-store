// we have to make image slider functionality
// we will use transform property with translate

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currProductImg = document.querySelector(".productImg");
const currProductTitle = document.querySelector(".productTitle");
const currProductPrice = document.querySelector(".productPrice");
const currProductColors = document.querySelectorAll(".color");
const currProductSizes = document.querySelectorAll(".size");

// adding event listener
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change the text of current product
    currProductTitle.textContent = choosenProduct.title;
    currProductPrice.textContent = "$" + choosenProduct.price;
    // sliderBgElements.style.color = choosenProduct.style.background-color;
    currProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currProductImg.src = choosenProduct.colors[index].img;
  });
});

// this is for changing backgroundColor after we select size

currProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    // this code is for when we click size previous size style will disappear
    currProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

payment.style.display = "none";
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
