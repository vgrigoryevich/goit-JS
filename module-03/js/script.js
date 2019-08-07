
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;


const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

const addLogin = function (allLogins, login) {
    let result= '';
    if (isLoginValid(login)) {
        if(isLoginUnique(allLogins, login)){
            allLogins.push(login)
            console.log(result = 'Логин успешно добавлен!');
        } else {
            console.log(result = 'Такой логин уже используется!');
        }
    } 
    else {
        console.log(result = 'Ошибка! Логин должен быть от 4 до 16 символов');
    }
    return result
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'