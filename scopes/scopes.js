//declaring global variable.

let globalLet = "This is a global variable"; 
   
function fun() { 
  let localLet = "This is a local variable"; 
   
  console.log(globalLet); // This is a global variable 
  console.log(localLet); // This is a local variable 
} 
fun(); 