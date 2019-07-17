'use strict'



//---------DOM---------
   //  -----------------------querySelector----------------
// Старая Штучка
// const container = document.getElementsByClassName("container");

// console.log(container);

// Для выборки одного елемента вместо с составляющими !
// const newFindClassName = document.querySelector('.container');

// console.log(newFindClassName);

// Для выборки множества елементов используется !
// const newFindListItem = document.querySelectorAll('.list-item');

// console.log(newFindListItem);

// Выводит детский елемент !
const newFindClassName = document.querySelector('.container');
const btn = document.querySelector('.btn')
console.log(btn);

console.log(newFindClassName.children);


// Правильная запись детей !
const list = document.querySelector('.list')

btn.onclick = function() {
    list.firstElementChild.classList.add('firstElementColor')
};

// console.log(list.firstElementChild);

// const del = btn.closest("ul");

// console.log(del);
