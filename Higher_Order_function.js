function multipleGreet(func,count){
   for(let i = 1; i <= count; i++){
      func();
   }
}

let greet = function(){
   console.log("Hello !");
}

multipleGreet(function(){console.log("Namaste")},1000);
multipleGreet(greet,9000); // yat nav send karta 