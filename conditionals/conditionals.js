//readline() is the method used to get the input

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Which way you want to login into cyphersource ?', name => {

//if conditionals are used to check which type you are login in  

   if(name == 'google_account') 
   {
   console.log('login succesful - ${name}!');
   }
   else if(name == 'mail')
   {
   console.log('login failed - ${name}!');
   }
   else
   {
   console.log('login failed - ${name}!');
   }

  readline.close();
});


