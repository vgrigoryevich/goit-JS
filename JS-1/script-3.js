'use strict'

//---------------RANDoM---------------

// const arr = ['viktor','kirill','dasha','malorik']

// const result = Math.floor(Math.random() * arr.length)

// console.log(arr[result]);


//----------object----------

// const gun = 'Makarov'

// const agent = [{
//     name : 'Bond',  
//     age : 50,
//     hobbies : 'agent',
//     isActive : true ,
//     car : ['audi', 'bmw'],
//     childrens : [1,2,3,4],
//     girls : {
//         USA : 'Anna',
//         Ukraine : 'Katya'
//     },
//     showName : function() {
//         return this.name
//     },

//     plusAge (age) {
//         console.log(this.age + age);
//     },
//     deleteChildrens() {
//         delete this.childrens
//     },
//     showThis(){
// console.log(this);

//     }
// },
// {
//     name : 'Baand',  
//     age : 122,
//     hobbies : 'killer',
//     isActive : true ,
//     car : ['audi', 'bmw'],
//     childrens : [1,2,3,4],
//     girls : {
//         USA : 'Anna',
//         Ukraine : 'Katya'
//     },
//     showName : function() {
//         return this.name
//     },
//     showThis(){
// console.log(this);

//     }
// }
// ]

// BOND.car[1] = 'aston martin'

// const result = BOND.showName()

// BOND.deleteChildrens()


//--------------SHOP!-----------

// const shop = {
//     name: 'VASYL',
//     time : new Date().toLocaleTimeString(),
//     products: {
//         apple: 3,
//         bananas: 7,
//         mango: 1,
//     },
//     countProduct() {
//         const summ = Object.values(this.products)
//         return summ;
//     },
//     plusProduct() {
//         let total = 0;
//         let result;
//         const number = this.countProduct()
//         for (
//             let key of number) {
//             result = total += key
//         }
//         return result
//     }
// }

// const res = shop.plusProduct()

// console.log(shop.name, shop.time, res);


//--------NEXT-------

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const newObj = { ...b, ...a };

console.log(newObj);
