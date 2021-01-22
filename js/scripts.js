let result = [];
function beepBoop(num) {
 if (isNaN(num) || num < 0) {
  console.log(false);
 } else { 
   for (let i=0; i<=num; i++) {
    result.push(i);
  };

  const modifiedResult = result.map(function(element) {
   if (element === 1) {
    return "Beep";
   } else if (element === 2) {
    return "Boop";
   } else if (element === 3) {
    return "Won't you be my neighbor?";
   } else {
    return element;
   }
   });

   console.log(modifiedResult.toString())
 } 
}

beepBoop(5)


