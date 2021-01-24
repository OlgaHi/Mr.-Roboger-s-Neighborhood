let result = [];

function beepBoop(number) {
  for (let i=0; i <= number; i++) {
    result.push(i.toString());
  }
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

  return modifiedResult;
}

const reversedArray = [];
function reverse(modifiedResult) {
  for (i = modifiedResult.length-1; i>=0; i--) {
      reversedArray.push(modifiedResult[i])
    };
  return reversedArray;
}



$(document).ready(function() {
  $("form#transform_number").submit(function(event) {
    event.preventDefault();
    const number = $("#number").val();
     
    if (isNaN(number) || number < 0) {
      $("#alert").show()
    } else {
      const displayResult = beepBoop(number)
      $("#displayResult").text(displayResult);
    };
  })

  $("#reverseButton").click(function() {
    if (number && number > 0) {
    const reversedArray = reverse(beepBoop(number));
    $("#reversedArray").text(reversedArray).slideDown();
    } else {
      $("#alert").show()
    }
  }
  )


}
)
 

