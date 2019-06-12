// 'use strict';

// let num = 105;

// const result = num > 10 || num > 20;

// console.log(result);




// const hesName = prompt('choose games')
// console.log(typeof hesName)

// const password = 'admin';

// if (hesName !== null && hesName !== '' && hesName === password) {

//     const hesNumbers = Number(prompt('enter numbers')) {}
//     if (hesNumbers > 0 && hesNumbers < 25) {
//         console.log('больше 0 меньше 25')
//     } else if (hesNumbers > 25 && hesNumbers < 50) {
//         console.log('больше 25 меньше 50')
//     } else if (hesNumbers > 50 && hesNumbers < 75) {
//         console.log('больше 50 меньше 75')
//     } else('to much')
// }
// } else {
//     console.log('go away')
// }
// }

// const name = 'bond';

// name === 'bon' ? console.log(true) :
//     name === 'bond' ? console.log('yes i bond') : false
// let result; 

// const(dayWeek)
// const dayWeek = prompt('choose day')

// switch(dayWeek){
// case 'monday' :
//     result = 'monday'
//     break
//     case 'tuesday':
//     result = 'tuesday'
//     break
//     case 'wednesday':
//         result = 'wednesday'
//         break
//         default:
//             result = 'weekend'
// }
// }

// console.log(result)


//---------------cofeeshop-------------

const toGo = confirm('to go ?????')

let milk = 7;
let check;

if (toGo || !toGo) {
    const drink = prompt('choose what you want')
    let chooseResult = '';
    switch (drink) {
        case 'cola':
            chooseResult = '15';
            break;
        case 'cofee':
            chooseResult = '30';
            break;
    }

    let choose;
    if (drink === 'cofee') {
        const chooseMilk = confirm('with milk??')
        if (chooseMilk) {
            check = `you choose ${drink} ${chooseResult + $milk}`
        } else {
            check = `you choose ${drink} ${chooseResult}`
        }

    } else if (drink === 'cola') {
        const chooseIce = confirm('with ice??')
        if (chooseIce) {
            check = `you choose ${drink} with ice you need to pay ${chooseResult}`
        } else {
            check = `you choose ${drink} with ice you need to pay ${chooseResult}`
        }
    }
}