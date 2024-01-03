let greet = "hello";

function changeGreet(){
   let greet = "namste";
   console.log(greet);
   function innnerGreet(){
      console.log(greet);
   }
}
console.log(greet);
changeGreet();