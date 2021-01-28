function beepBoop(number) {
  
  let result = [];
  for (let i = 0; i <= number; i++) {
    result.push(i.toString());
  
    if (result[i].includes("3")) {
      result[i] = "Won't you be my neighbor?";
    } else if (result[i].includes("2")) {
      result[i] = "Boop!";
    } else if (result[i].includes("1")) {
      result[i] = "Beep!";
    }
  }
  return result;
}
    
  
$(document).ready(function() {
  $("form#transform_number").submit(function(event) {
    event.preventDefault();
    const number = $("#number").val();
     
    if (!number || number < 0) {
      $("#alert").show()
    } else {
      const display = beepBoop(number);
      $("#displayResult").text(display);
      $("#number").val("");
    };
  })
})
 

