// const myVar1 = 5
// const myVar2 = 10
// if (myVar1 > myVar2) {
//     console.log(`${meVar1}больше ${myVar2}`);
// } else if (myVar1 < meVar2) {
//     console.log (`${myVar1} меньше ${meVar2}`);
// } else {
//     console.log("end")
// }

// let result = myVar1 > myVar2 ? console.log(true) : console.log(false);

// Конструкция Switch

// const userRole = 'admin'

// switch(userRole) {
//     case "student":
//         console.log("Текущий пользователь - student");
//     case "admin":
//         console.log("Текущий пользователь - админ");
//         break;
//     case "normal_user":
//         console.log("Текущий пользователь - normal_user");
//         break;
//         default:
//             console.log("Нет токого типа пользователя")
//             break;
// }

//логические операторы
// && - оогические И - возвращает первое значение FALSE
// || - логическое ИЛИ возвращает первое значение TRUE
// ! - логическое НЕ

// console.log(0 || 0 || "")
// console.log(1 && 2 && "строка" && 0 && 1)

// console.log(null || 0 || "" || undefined): void
// console.log("яблоко" && true && null && 1): void
 
//1 (Практика - Задача 1)

// const intervalOne = 5
// const intervalTwo = 8
// const intervalThree = 18
// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//     console.log(`${intervalOne} - самый большой отрезок`)
// } else if (intervalTwo > intervalOne && intervalThree > intervalTwo) {
//     console.log(`${intervalThree} - самый большой отрезок`)
// }

// //2 
// const currentTmp = 4
    
// if (currentTmp <= -30) {
//     console.log("Оставайтесь дома")
// } else if (currentTmp > -30 && currentTmp <= -10) {
//     console.log("Сегодня холодно")
// } else if (currentTmp > -10 && currentTmp <=5) {
//     console.log("Не холодно")
// } else if (currentTmp > 5 && currentTmp <=15) {
//     console.log("Тепло")
// } else if (currentTmp > 15 && currentTmp <= 25) {
//     console.log("Очень тепло")
// } else if (currentTmp > 25 && currentTmp < 35) {
//     console.log("Жакро")
// }
// let myVar = 0
// while (myVar >=0 && myVar <= 10) {
//     console.log(myVar += 1);
// }