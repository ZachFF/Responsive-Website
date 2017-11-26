var nextButton = document.getElementById('next-button');
console.log(nextButton)
var signOptions = document.getElementsByClassName('sign-option');
console.log(signOptions)

var userChoice ="";
function setVisible(){
  nextButton.setAttribute('style','visibility:visible;')

}

signOptions[0].addEventListener('click',(e)=>{
  userChoice = signOptions[0].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice

})
signOptions[1].addEventListener('click',(e)=>{
  userChoice = signOptions[1].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
signOptions[2].addEventListener('click',(e)=>{
  userChoice = signOptions[2].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
signOptions[3].addEventListener('click',(e)=>{
  userChoice = signOptions[3].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
signOptions[4].addEventListener('click',(e)=>{
  userChoice = signOptions[4].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
signOptions[5].addEventListener('click',(e)=>{
  userChoice = signOptions[5].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
signOptions[6].addEventListener('click',(e)=>{
  userChoice = signOptions[6].childNodes[3].innerHTML;
  setVisible()
  localStorage.userChoice = userChoice
})
