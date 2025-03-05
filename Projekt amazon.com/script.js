/* alert('witaj'); // to jest mój pierwszy komentarz, alert oznacza wyswietlenie sie komunikatu na stronie o wiadomosci witaj

console.log(2+2);

let variable1 = 3;
console.log(variable1);

let message = 'hello'
console.log(message);

variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1); */

let wartosc1 = 0;

const button = document.getElementById("sprawdzenie");
const output = document.getElementById("output");
const p1 = document.getElementById("1");
const dodano1 = document.getElementById("dodano1");
const p2 = document.getElementById("2");
const dodano2 = document.getElementById("dodano2");
const p3 = document.getElementById("3");
const dodano3 = document.getElementById("dodano3");
const reset = document.getElementById("reset");
const reset1 = document.getElementById("reset1");

p1.addEventListener("click", function(){
    wartosc1 = wartosc1 + 1;
    dodano1.textContent = 'Dodano przedmiot'
})

p2.addEventListener("click", function(){
    wartosc1 = wartosc1 + 2;
    dodano2.textContent = 'Dodano przedmiot x2'
})

p3.addEventListener("click", function(){
    wartosc1 = wartosc1 + 3;
    dodano3.textContent = 'Dodano przedmiot x3'
})

reset.addEventListener("click", function(){
    wartosc1 = wartosc1 * 0;
    dodano3.textContent = 'Wyczyszczono koszyk'
})

button.addEventListener("click", function(){
    output.textContent = wartosc1;
})
