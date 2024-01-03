// Print the table of multiplication No.table

function table(a){
   console.log(`Table of ${a}`);
   for(let i = 1; i<=10; i= i+1){
      console.log(i*a);
   }
}
function PrintTable(n){
   for(let i = n; i <= n*10; i+= n){
      console.log(i);
   }
}
table(2);
PrintTable(8);