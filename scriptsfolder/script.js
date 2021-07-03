"use strict"
let input = document.querySelector("input")
console.log(input)
console.log(input.value)
let userInput = parseInt(input.valueAsNumber);
let numOfSquares = userInput * userInput;

const innerBody = document.querySelector("#innerBody");

for (let i = 1; i <= numOfSquares; i++) {
    innerBody.style["grid-template-columns"] = `repeat(${userInput}, 1fr)`;
    innerBody.style["grid-template-rows"] = `repeat(${userInput}, 1fr)`;
    const div = document.createElement("div");
    div.classList.add('cell');
    innerBody.appendChild(div);
}

const sameDiv = document.querySelectorAll("div.cell");

function turnBlack(event) {
    event.target.style["background-color"] = "black"
}

function turnRainbow(event) {
    event.target.style["background-color"] = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 1)`
}

function reset(event) {
    event.target.style["background-color"] = "white"
}

function chooseColour(event) {
    if (event.target.id === "rainbow") {
        sameDiv.forEach((div) => {
            div.addEventListener("mouseenter", turnRainbow);
            div.addEventListener("touchstart", turnRainbow);
        })
    }
    if (event.target.id === "black") {
        sameDiv.forEach((div) => {
            div.addEventListener("mouseenter", turnBlack);
            div.addEventListener("touchstart", turnBlack);
        })
    }
    if (event.target.id === "reset") {
        sameDiv.forEach((div) => {
            div.style["background-color"] = "white"
        })
    }
}

const buttons = document.querySelectorAll(".buttons")

buttons.forEach((button) => (
    addEventListener("click", chooseColour)
))