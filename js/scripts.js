let result = [];

function beepBoop(num) {
  if (isNaN(num) || num < 0) {
   console.log(false);
  } else { 
    for (let i=0; i <= num; i++) {
     result.push(i.toString());
    
      if (result[i].includes("3")){
      result[i] = "Won't you be my neighbor?";
      } else if (result[i].includes("2")) {
      result[i] = "Boop";
      } else if (result[i].includes("1")){
      result[i] = "Beep";
      }
    }
  }
    console.log(result);
}
beepBoop(12);
 

