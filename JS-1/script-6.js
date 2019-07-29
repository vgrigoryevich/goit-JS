'use strict'

// const container = document.querySelector(".container");

// const handleClick = evt => {
// if (evt.target.textContent === "btnOne") {
//     evt.target.remove();
// } 
// };

// container.addEventListener("click", handleClick)


const containerInput = document.querySelector(".containerInput")
console.log(containerInput.children);

const [text, input] = containerInput.children;

console.log(text);
console.log(input);

const handleInput = evt =>  {
text.textContent = "Default text";

    if (evt.target.value !== "") {
        text.textContent = evt.target.value
    }
    if (evt.target.value.lenght > 5){
        text.style.color === "red";
    }
}
input.addEventListener('input', handleInput);


const submitForm = document.querySelector('.submitForm')


