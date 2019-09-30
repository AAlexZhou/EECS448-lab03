let choice = 0
let max = 4
let image =["picture/car1.jpg","picture/car2.jpg","picture/car3.jpg","picture/car4.jpg","picture/car5.jpg"]

function last()
{
  if (choice ==0)
  {
    choice= max
  }
  else
  {
    choice = choice - 1;
  }
  let picture = document.getElementById('image')
  picture.src = image[choice]
}

function next()
{
  if (choice==max)
  {
    choice = 0
  }
  else
  {
    choice = choice + 1
  }
  let picture = document.getElementById('image')
  picture.src = image[choice]
}
