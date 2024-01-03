// {
//    let a = 25; //Block Scope
// }
// console.log(a); // a is not defined

for(let i = 1; i <= 5; i++){
   console.log(i); // Block Scope
}
// console.log(i); // i is not defined

let age = 29;

if(age >= 18){
   let str = "adult";
   console.log(str);
}