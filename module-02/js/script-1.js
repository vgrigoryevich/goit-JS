'use strict'

let input;

const numbers = [];

let total = 0;

let num = 0;



while (input !== null) {
    input = prompt('Введите ваше число');
    numbers.push(Number(input));
    num += 1;
}

console.log(numbers);


for (let k in numbers) {
    total += numbers[k];
}

console.log(`Общая сумма чисел равна ${total}`);


