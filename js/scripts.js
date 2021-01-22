let result = []
function beepBoop(num) {
 if (isNaN(num)) {
   console.log(false)
 } else if (num >=0){
   for (let i=0; i<=num; i++)
   result.push(i)
   console.log(result.toString())
   }
}
beepBoop(5)


