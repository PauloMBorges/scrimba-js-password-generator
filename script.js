const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPasswordEl = document.getElementById("first-password-el");
let secondPasswordEl = document.getElementById("second-password-el");
let generatePasswordBtn = document.getElementById("generate-password-btn");
var sliderEl = document.getElementById("slider-el");
var sliderValueEl = document.getElementById("slider-value-el");

generatePasswordBtn.addEventListener("click", renderRandomPassword);

/* slider */
sliderValueEl.innerHTML = sliderEl.value;

sliderEl.oninput = function () {
  sliderValueEl.innerHTML = this.value;
};

/* random characters index */
function getRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

/* generate random password with slider length */
function getRandomPassword() {
  let passwordLength = sliderEl.value;
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += characters[getRandomIndex()];
  }
  return randomPassword;
}

/* when the generate random password btn is clicked, calls getRandomPassword twice and set firstPw and secondPw text to these values */

function renderRandomPassword() {
  firstPasswordEl.textContent = getRandomPassword();
  secondPasswordEl.textContent = getRandomPassword();
}

/* copies password to clipboard */
const copyPassword = async (event) => {
    const button = event.target;
    const password = button.textContent;

    if (password !== "") {
        try {
            await navigator.clipboard.writeText(password);
            console.log("Content copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
};

document.querySelectorAll('.password-btn').forEach(button => {
    button.addEventListener('click', copyPassword);
});

