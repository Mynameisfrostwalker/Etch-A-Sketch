"use strict"
let userInput = 16;
let numOfSquares = userInput * userInput;

const innerBody = document.querySelector("#innerBody");

for (let i = 1; i <= numOfSquares; i++) {
    innerBody.style["grid-template-columns"] = `repeat(${userInput}, 1fr)`;
    innerBody.style["grid-template-rows"] = `repeat(${userInput}, 1fr)`;
    const div = document.createElement("div");
    div.classList.add('cell');
    innerBody.appendChild(div);
}