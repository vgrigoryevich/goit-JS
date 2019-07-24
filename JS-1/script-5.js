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
// const newFindClassName = document.querySelector('.container');
// const btn = document.querySelector('.btn')
// console.log(btn);

// console.log(newFindClassName.children);


// Правильная запись детей !
// const list = document.querySelector('.list')

// btn.onclick = function() {
//     list.firstElementChild.classList.add('firstElementColor')
// };

// console.log(list.firstElementChild);

// const del = btn.closest("ul");

// console.log(del);

// const container = document.querySelector(".container");

// const ul = document.createElement("ul")

// container.append(ul)
// ul.classList.add("newUl")

// const li = document.createElement("li");

// ul.append(li);
// li.classList.add("newLi");
// li.textContent = 'walk'

//--------------Функция, которая создаёт новые елементы!!---------------------

const elCreate = (tag, name, atr, src) => {
  const element = document.createElement( tag  )
  element.classList.add(name)
  element.setAttribute(atr, src)
  return element;
};

// const newElement = elCreate(
//     'img',
//     'logo',
//     'src',
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg'
// );
// document.body.prepend(newElement);

// Просто крутая штука

// const newElement = document.createElement("ul")

// const mass = ['html', 'css', 'Javascript', 'React', 'Redux'];
// const result = mass.reduce((acc, el) => acc + `<li>${el}</li>`, '' ); 
// newElement.innerHTML = result;

// document.body.prepend(newElement);

const newElement = document.createElement("ul")

const about = [{
        name: 'superman',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd234GaYy4atkAnEGFoG09Wa2eXksFsFgSDkNRqAP8ZjF8F0WiCQ'
    },
    {
        name: 'flash',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBBrufaFImRu09hf0wbI3KxH5dXeGhWMvz3bTGjthjgmCjpDMEkw'
    }

];

const draw = about.map(
    elem => (newElement.innerHTML += `<li><h1>${elem.name}</h1>
<img src="${elem.logo}" alt=""></li>`)
);

document.body.prepend(newElement);

const li = document.querySelectorAll("li");

li.forEach(elem => elem.classList.add("newClass"));
