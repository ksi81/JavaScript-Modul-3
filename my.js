'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит.

    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.

    4) Если логин валиден, проверить уникальность логина с помощью 
       функции checkIfLoginExists(logins, login), которая проверяет наличие 
       логина в массиве logins, возвращая false если такого логина
       в массиве еще нет, и true если есть.
     
    5) Если checkIfLoginExists вернет false, добавить новый логин 
       в logins и вернуть строку 'Логин успешно добавлен!'. 
       Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'.
*/

const login = prompt('Input login');
const addLogin = function(logins, login){
  
  const checkLoginValidity = function(login){

    if (login !== null && login.length>= 4 && login.length <=16){
      console.log (true);
      
      const  checkIfLoginExists = function(logins, login){
        if (login !== null) {
          const hasName = logins.includes(login);
        
          if (hasName) {
            // const idx = logins.indexOf(login);
            console.log('Такой логин уже используется!');
          } else {
            
            logins.push(login);
            alert(`Логин ${login} успешно добавлен`);
          }
        }
      }
      checkIfLoginExists(logins, login);
return true;
    }
    alert ('Ошибка! Логин должен быть от 4 до 16 символов');
    console.log (false);
  };
  checkLoginValidity(login);
};

addLogin(logins, login);
console.log(logins);









