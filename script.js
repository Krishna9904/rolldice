var no = Math.floor(Math.random()*100) + 1


function guess(){
  if(document.getElementById('in').value == ""){
     document.getElementById('out').innerHTML ="Please enter a number to start the game"
    return
  }
   
  var n = parseInt(document.getElementById('in').value)
  if (n === no)
    document.getElementById('out').innerHTML = '<h1> Congrats! Your guess was right 🎊 </h1>'
  
   else if (n > no)
    document.getElementById('out').innerHTML = "Enter a small value"
  
  else 
    document.getElementById('out').innerHTML = "Enter a greater value"
}