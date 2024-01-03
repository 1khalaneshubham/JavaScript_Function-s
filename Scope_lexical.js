function outerFunc(){
   let x = 5;
   let y = 7;

   function innerFunction(){
      console.log(x);
      console.log(y);
   }
   innerFunction();  
}