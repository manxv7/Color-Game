let numSquares = 6;
var colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let colorDisplay = document.querySelector("#colorDisplay");
let modeButtons = document.querySelectorAll(".mode"); //Both Buttons

init(); //this function is runned at starting 

resetButton.addEventListener("click", () => {
    reset();
})

function init() {
    modeButtonsSetup();
    squaresSetup();
    reset();
}

function modeButtonsSetup() {
    for (let i = 0; i < modeButtons.length; i++) {
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update the page to reflect changes
        modeButtons[i].addEventListener("click", () => {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[i].classList.add("selected");
            numSquares = modeButtons[i].textContent === "Easy" ? 3 : 6;
            reset();

        })
    }
}

function squaresSetup() {
    for (let i = 0; i < squares.length; i++) {
        //adding click listeners to divs

        squares[i].addEventListener("click", () => {
            const clickedColor = squares[i].style.backgroundColor;

            if (clickedColor === pickedColor) {
                message.textContent = "Correct!"
                changeColors(pickedColor);
                h1.style.backgroundColor = colors[i];
                resetButton.textContent = "Play Again..?";

            } else {
                squares[i].style.backgroundColor = "#232323";
                message.textContent = "Try Again!"
            }
        })
    }
}

function reset() {
    //generate all new color
    //pick a new random color from array
    //change color of squares
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors"
    message.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"; //Assuring that they are not hidden beacuse of easy mode
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
}

//to change colors of all div when we get the correct color
function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

//to pick one color out of our colors array
function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//to generate random colors array
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add random colors
    for (let i = 0; i < num; i++) {
        //get a random color and add to array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//to generate a single random color
function randomColor() {
    //pick red/blue/green from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}