
function printName(name,roll_no){
   console.log(name,roll_no);
   console.log(`${name}'s Roll No is ${roll_no}.`);
}
printName("Shubham Khalane",100);
printName("Mayur Mali",99);
printName("Pushker Khalane",98);
printName(98); // order is most important thing in js in function-

function sum(a,b){
   console.log(`Sum of two No.${a+b}`);
   console.log(a+b);
}
sum(10,20);
sum(100,20);
sum(10,200);
sum(100,200);