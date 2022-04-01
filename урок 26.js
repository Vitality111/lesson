"use strict";

const box = document.getElementById("box"),
  buttons = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
box.style.width = "500px";

box.style.cssText = `background-color: red; with: 500px`;

buttons[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = "blue";
// }
hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');
div.style.width = '1000px';
div.style.height = '125px';

// oneHeart.append(div);
// wrapper.appendChild(div);
wrapper.prepend(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = `Hello`;

div.insertAdjacentHTML(`afterend`, `<h2>Hello</h2>`);