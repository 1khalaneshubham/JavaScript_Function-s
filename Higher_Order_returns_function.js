



function oddOrEvenFactory(request){
   if(request == "Odd"){
      let odd = function(n){
         console.log(!(n%2 == 0));
      }
      return odd;
   }else if(request == "Even"){
      let even = function(n){
         console.log(n%2 == 0);
      }
      return even;
   }else{
      console.log("Wrong Request..!")
   }
   
}

let request = "odd"; // even