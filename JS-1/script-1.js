'use strict'


// MASSIVE
//   1
// const arr= [1,2,3,[4,5,6,7],8,9, 'hello', 'pokasiki'];

// console.log(arr [arr.length -1]);
// ^^^^^^^^^
// Возможность выбрать последнее в массиве


//   2
// const arr= [1,2,3,[4,5,6,7],8,9, 'hello', 'pokasiki'];

// arr[arr.length -1] = 'one'

// arr[1] =121

// console.log(arr)
// ^^^^
// Заполнение и изменение элементов массива


// 3
// const arr= [1,2,3,4,5,6,7,8,9];

// arr.length = 3;
// ^^^^^^^
// Какие из массивов мы хотим показывать (или ограничение по длине массива)

// console.log(arr)



// 4
// let a = ['hello'];

// let b = a;

// b.push = ('my friends')

// console.log(a)
// console.log(b)

//    5

// const word = 'Еще одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается'

// const clone = word.split(' ')

// console.log(clone[1])

// Сплит разделяет по словам (если есть пробел)
// Если пробела нет - разделяет побуквенно 


//    6

// const word = 'Еще одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается'

// console.log(word)

// const clone = word.split(' ')

// console.log(clone.splice(2,4).join(' '))


//  7
// const word = 'Еще одно специальное значение. По умолчанию, когда переменная объявляется, но не инициализируется, ее значение не определено, ей присваивается'

// console.log(word)

// const clone = word.split(' ')

// clone.push('fail', 'salmon', 'ready') - добавление новых элементов в конец нашего списка 

// clone.pop() - удаление последнего добавленного элемента

// console.log(clone)


//--------------------Цыклы-----------

// let counter = 0;
// let arr = [];

// do{
// const user = Number(prompt(counter))
// counter += 1
// arr.push(user)
// } while(counter < 10)

// console.log(arr)



// let numbers;

// while(true) {

//     numbers = prompt('enter num')

//     if(numbers === null) {
//         break;
//     }

//     numbers = Number(numbers)

//     if(numbers >= 1 && numbers <= 5){
//         break;
//     }
// }
// switch(numbers) {
//     case 1:
//         console.log('one')
//         break;

// }

// console.log(numbers)



//-------------------for-----------


// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.length)

// const arr = 'Тело цикла будет выполняться для значения каждого отдельного элемента'

// const newArr = arr.split(' ')
// console.log(newArr)

// let i = 0;

// for(let i = 0; i < newArr.length; i+= 1) {

//     if(clients[i] === 'Tело') {
//         console.log(newArr[i])
//         console.log('we have this word')
//         break
//     } 
// }


// for(let key of newArr){
//     if(key === 'Тело') {
//         console.log('we have this word!!!!')
//         break;
//     }
// }


//--------------REVERSE PALINDROM----------

// const word = prompt('rotor');

// const reverseWord = word.split('').reverse() .join('');

// alert(word === reverseWord);

