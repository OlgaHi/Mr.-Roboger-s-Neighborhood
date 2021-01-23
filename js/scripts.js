let result = [];

function beepBoop(num) {
 if (isNaN(num) || num < 0) {
  console.log(false);
 } else { 
   for (let i=0; i <= num; i++) {
    result.push(i.toString());
   
   if (result[i].includes("1")){
   result[i] = "Beep";
   }
   }
   console.log(result)
  }
  }
 
 beepBoop(1)
 

