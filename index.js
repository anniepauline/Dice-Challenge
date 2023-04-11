"use strict"

let random1 =  Math.floor(Math.random() *6+1);
let imageFile1 = "images/dice" + random1 + ".png";
let image1 = document.querySelectorAll('img')[0].src = imageFile1;

let random2 =  Math.floor(Math.random() *6+1);
let imageFile2 = "images/dice" + random2 + ".png";
let image2 = document.querySelectorAll('img')[1].src = imageFile2;

let header = document.querySelector('h1');

if(random1 > random2)
{
  header.innerHTML = "Player 1 wins ";
  let div = document.createElement('div');
  let image = document.createElement('img');
  image.className = "img";
  image.src = "file:///D:/Tutorials/Web%20development/WEB%20PROJECTS/Dicee%20Challenge%20-%20Starting%20Files/images/flag.png";
  div.appendChild(image);
  div.className = "header";
  div.appendChild(header);
  let dicElement = document.querySelectorAll('.dice')[0];
  let container = document.querySelector('.container');
  container.insertBefore(div, dicElement);
}
else if (random2 > random1)
{
    header.innerHTML = "Player 2 wins ";
    let div = document.createElement('div');
    div.className = "header";
    div.appendChild(header);
    let image = document.createElement('img');
    image.src = "file:///D:/Tutorials/Web%20development/WEB%20PROJECTS/Dicee%20Challenge%20-%20Starting%20Files/images/flag.png";
    div.appendChild(image);
    let dicElement = document.querySelectorAll('.dice')[0];
    let container = document.querySelector('.container');
    container.insertBefore(div, dicElement);
}
else if (random1 === random2)
{
  header.innerHTML = "Draw!";
}
