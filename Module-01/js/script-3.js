'use strict'

let country = prompt('Выберите страну для доставки');

let price;


if (country) {
    
    const chooseCountry = country.toLowerCase();

    switch (chooseCountry) {
        case 'китай':
        price = 100;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'южная америка':
        price = 250;
         alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'австралия':
        price = 170;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'индия':
        price = 80;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'ямайка':
        price = 120;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        default: 
        alert('В вашей стране доставка не доступна');
    }
}