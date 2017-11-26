
var emailNode = document.getElementById('email-input')
var button = document.getElementById('subscribe-button')
var menu = document.getElementById('mobile-menu')
var menuContainer = document.getElementById('nav-container');
var desktopNav = document.getElementById('desktop-nav');

//creating the dropdown menu with javasript
var hiddenMenu = document.createElement('div');
var menuList = document.createElement('ul');
var optionsArray=['CHOOSE YOUR SIGN','EXPLORE','GET A QUOTE','PORTFOLIO','CUSTOMER','ABOUT']

optionsArray.forEach((element)=>{
  var x = document.createElement('li')
  var y = document.createElement('a')
  var z = document.createTextNode(element)
  y.appendChild(z)
  x.appendChild(y)
  $(x).addClass('pop-menu-item')
  menuList.appendChild(x)
})

console.log(menuList)

function sendEmail(email){
  var url= 'api-url'
  return(
    fetch(url,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(email,null,2)
      })
    .then((res)=>{
      return res
    })
    .catch((error)=>{
      return error
    })

  )

}

function verifyEmail(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

button.addEventListener('click',(e)=>{
  e.preventDefault()
  var email = emailNode.value
  if(verifyEmail(email)){
    sendEmail(email)
    .then((res)=>{
      console.log(res)
      alert('Thanks for signing up to our newsletter!')
    })
  }
  alert('please enter a valid email address')
})
console.log(menuContainer)
var mounted = false

menu.addEventListener('click',(e)=>{
  e.preventDefault()
  if(!mounted){
    console.log("mounted")
    $(menuList).addClass('pop-menu')
    menuContainer.insertBefore(menuList,desktopNav)
    $(menuContainer).removeClass('main-header')
    $(menuContainer).addClass('pop-header')
    mounted = true
  }
  else{
    console.log(" not mounted")
    $(".pop-menu").remove()
    $(menuContainer).removeClass('pop-header');
    $(menuContainer).addClass('main-header');
    mounted=false
  }
  //menuConatiner is an array, the first index is the div DOM object


})
console.log(localStorage)
