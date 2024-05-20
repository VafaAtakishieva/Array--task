// TASK 1 //

let num =  [23, 45, 12, 56, 67, 34, 89, 14];
num.sort(function(a, b){return a- b});
console.log(num.reverse().toString());


// TASK 2 //


let animal = ["cat","lion","dog","elephant"];
let animals = animal.find(element=>element.length>3);
console.log(animals);


// TASK 3 //

let num3 = [5, 29, -3, 42, -1];
let num4 = num3.find((element)=>element<0);
console.log(num4);


// TASK 4  //


let num1 = [21, 24, 3, 67, 85, 60];
let num2 = num1.findLast((element) => element % 2 ===0);
console.log(num2);