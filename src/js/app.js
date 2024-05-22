// TASK 1 // Array'in methodlarından istifadə edərək [23, 45, 12, 56, 67, 34, 89, 14] bu array'i console'da "89, 67, 56, 45, 34, 23, 14, 12" bu formada yazdirmaq


let num =  [23, 45, 12, 56, 67, 34, 89, 14];
num.sort(function(a, b){return a- b});
console.log(num.reverse().toString());


// TASK 2 // ["cat", "lion", "dog", "elephant"] arrayin uzunlugu  3-den boyuk olan ilk elementini console'da yazdirmaq .



let animal = ["cat","lion","dog","elephant"];
let animals = animal.find(element=>element.length>3);
console.log(animals);


// TASK 3 // [5, 29, -3, 42, -1] arraydaki ilk menfi elementi console yazdir.


let num3 = [5, 29, -3, 42, -1];
let num4 = num3.find((element)=>element<0);
console.log(num4);


// TASK 4  //  [21, 24, 3, 67, 85, 60]  arraydaki son cüt ededi console yazdir.



let num1 = [21, 24, 3, 67, 85, 60];
let num2 = num1.findLast((element) => element % 2 ===0);
console.log(num2);