function check()
{
  let Password = document.getElementById("Password")
  let again = document.getElementById("again")
  if (Password.value != again.value)
  {
    alert("Password entered not same")
  }
  else if (Password.value.length < 8)
  {
    alert("the passwords are not at least 8 characters long")
  }
  else
  {
    alert("password ckeck suessful")
  }
}
