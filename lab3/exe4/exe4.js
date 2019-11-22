function make()
{
  let text = document.getElementById("text")
  let boderR = document.getElementById("boderR")
  let boderG = document.getElementById("boderG")
  let boderB = document.getElementById("boderB")
  let boderW = document.getElementById("boderW")
  let backR = document.getElementById("backR")
  let backG = document.getElementById("backG")
  let backB = document.getElementById("backB")
  text.style.borderColor = "rgb("+boderR.value+","+boderG.value+","+boderB.value+")"
  text.style.borderWidth = boderW.value +"px"
  text.style.BackgroundColor = "rgb("+backR.value+","+backG.value+","+backB.value+")"
}
