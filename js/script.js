"use strict";

// Задание № 1

let userAge = +prompt("Введите ваш возраст", "");

if (userAge > 0 && userAge <= 18) {
    alert("Вы ещё молоды. Вам нужно учиться");
} else if (userAge > 18 && userAge <= 50) {
    alert("Вам нужно работать");
} else if (userAge > 50 && userAge <= 59) {
    alert("Вам скоро на пенсию");
} else if (userAge > 59 && userAge <= 100) {
    alert("Вы пенсионер");
} else {
    alert("Что-то пошло не так");
}

// Задание № 2

let currentTime = +prompt("Введите текущее время", "");

switch(true) {
    case (currentTime >= 0 && currentTime <= 6):
        alert(`${currentTime} часа ночи`);
        break;
    case (currentTime >= 7 && currentTime <=10):
        alert(`${currentTime} часа утра`);
        break;
    case (currentTime >= 11 && currentTime <= 17):
        alert(`${currentTime} часов дня`);
        break;
    case (currentTime >= 18 && currentTime <= 23):
        alert(`${currentTime} часов вечера`);
        break;
    default:
        alert("Вы ввели неправильное значение");
}