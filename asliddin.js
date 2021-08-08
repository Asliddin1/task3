// Task 3
// Asliddin Abdujabborov

let date = new Date();

let hafta_kunlari = [
    "Yakshanba", // JavaScript kularni 0 - dan ya'ni Yakshanbadan hisoblab boshlaydi.
    "Dushanba", 
    "Seshanba", 
    "Chorshanba", 
    "Payshanba", 
    "Juma", 
    "Shanba" 
                    ]
let day = date.getDay();
let day1 = date.getMonth();
let hour = date.getHours();
let minut = date.getMinutes();
let second = date.getSeconds();

let vaqt = `Bugun: ${hafta_kunlari[day]} haftaning ${day1} - kuni.\nHozirgi aniq vaqt: ${hour} PM : ${minut} : ${second};`;

alert(vaqt);