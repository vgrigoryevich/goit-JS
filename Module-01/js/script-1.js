'use strict'

const ADMIN_PASSWORD ='m4ng0h4ckz';

let message

message = prompt ('ВВЕДИТЕ ПАРОЛЬ')

if(!message) {
  message = alert ('ОТМЕНЕНО ПОЛЬЗОВАТЕЛЕМ') 
} else if(message === ADMIN_PASSWORD) {
    message = alert ('ДОБРО ПОЖАЛОВАТЬ')
} else {
    message = alert ('ДОСТУП ЗАПРЕЩЕН! НЕВЕРНЫЙ ПАРОЛЬ!')
}