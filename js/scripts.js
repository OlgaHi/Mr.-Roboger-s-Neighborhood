let result = [];

function beepBoop(number) {
  for (let i=0; i <= number; i++) {
    result.push(i.toString());

    const modifiedResult = result.map(function(element) {
      if (element.includes("3")) {
       return "Won't you be my neighbor?";
      } else if (element.includes("2")) {
       return "Boop";
      } else if (element.includes("1")) {
       return "Beep";
      } else {
       return element;
      }
      });

    return modifiedResult.toString();
  }
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
 

