let result = [];

function beepBoop(number) {
  for (let i=0; i <= number; i++) {
    result.push(i.toString());

    if (result[i].includes("3")){
    result[i] = "Won't you be my neighbor?";
    } else if (result[i].includes("2")) {
    result[i] = "Boop";
    } else if (result[i].includes("1")){
      result[i] = "Beep";
    }
   }
  return result.toString();
}


$(document).ready(function() {
  $("form#transform_number").submit(function(event) {
    event.preventDefault();
    const number = $("#number").val();

    if (isNaN(number) || number < 0) {
      $("#alert").show()
    } else {
      const displayResult = beepBoop(number)
      console.log(displayResult)
      $("#displayResult").append(displayResult)
    };
  })
}
)
 

