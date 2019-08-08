'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let attemptsLeft = 3;

let inputPassword;

let attempts = 0;

do {
    inputPassword = prompt('Введите пароль');

    if (!inputPassword) {
        alert('Вход был отменен!');
        break;
    } else if (passwords.includes(inputPassword)) {
        alert('Добро пожаловать))');
        break;
    } else {
        alert(`Попробуйте еще, у вас осталось ${attemptsLeft - 1 - [attempts]} попыток`);
    }

    attempts += 1;
1
} while (attempts< attemptsLeft);

if (attempts >= attemptsLeft) {
    alert('У вас закончились попытки! Аккаунт заблокирован!')
};