 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('what is the temperature today ?', temp => {
  

   if(temp >= 23.5) 
   {
   console.log('Its a hot day - ${name}!');
   }
   
   else
   {
   console.log('its a cold day- ${name}!');
   }

  readline.close();
});


