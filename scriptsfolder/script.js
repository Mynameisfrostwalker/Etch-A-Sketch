"use strict"
let input = document.querySelector("input");

input.addEventListener("click", grid)

function grid(event) {
    let userInput = parseInt(event.target.value);
    let numOfSquares = userInput * userInput;
    const cells = document.querySelectorAll("div.cell");
    const innerBody = document.querySelector("#innerBody");
    cells.forEach((cell) => innerBody.removeChild(cell));
    for (let i = 1; i <= numOfSquares; i++) {
        innerBody.style["grid-template-columns"] = `repeat(${userInput}, 1fr)`;
        innerBody.style["grid-template-rows"] = `repeat(${userInput}, 1fr)`;
        const div = document.createElement("div");
        div.classList.add('cell');
        innerBody.appendChild(div);
    }
}

grid({ target: { value: 16 } })

function turnBlack(event) {
    event.target.style["background-color"] = "black";
}

function turnRainbow(event) {
    event.target.style["background-color"] = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 1)`;
}

function reset(event) {
    event.target.style["background-color"] = "white";
}

function chooseColour(event) {
    const cells = document.querySelectorAll("div.cell");
    if (event.target.id === "rainbow") {
        cells.forEach((cell) => {
            cell.removeEventListener("mouseenter", turnBlack);
            cell.removeEventListener("touchstart", turnBlack)
            cell.addEventListener("mouseenter", turnRainbow);
            cell.addEventListener("touchstart", turnRainbow);
        })
    }
    if (event.target.id === "black") {
        cells.forEach((cell) => {
            cell.removeEventListener("mouseenter", turnRainbow);
            cell.removeEventListener("touchstart", turnRainbow);
            cell.addEventListener("mouseenter", turnBlack);
            cell.addEventListener("touchstart", turnBlack);
        })
    }
    if (event.target.id === "reset") {
        cells.forEach((cell) => {
            cell.style["background-color"] = "white";
        })
    }
}

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => (
    addEventListener("click", chooseColour)
));