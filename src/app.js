/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const initialize = () => {
  const colorName = document.querySelector(".color");
  const changeBtn = document.querySelector("#btn");

  function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    //change the body's background color to the new generated color and also show it the span text content
    document.body.style.backgroundColor = color;
    colorName.textContent = color;
  }

  //we call the changeColor function every time we click on the button

  changeBtn.addEventListener("click", changeColor);
};

//onlad function is really important as it ensures that the code starts running when the page has loaded
window.onload = initialize;

console.log("Hi there, thanks for checking me out!");
