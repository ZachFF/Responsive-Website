  //DOM element variables
  var questions = document.getElementsByClassName('question');
  var nextButton = document.getElementById('next-button');

  //project name variables
  var projectName = questions[0].childNodes[5];
  var project_name ="";

  //brief description variables
  var briefDescription = questions[1].childNodes[5];
  var brief_description ="";

  //color variables
  var color_choice ="";

  //portfolio example
  var portfolioExample = questions[3].childNodes[3];
  var portfolio_example ="";

  //indoor/outdoor variables
  var inside_outside="";

  //sign-location varaiables
  var sign_location="";

  //sign-portable variables
  var sign_portable="";

  //sign dimensions variables
  var signDimensions = questions[7].childNodes[3]
  var sign_dimensions =""

  //sign quantity variables
  var signQuantity = questions[8].childNodes[5]
  var sign_quantity ="1";
  //budget variables
  var budget = questions[9].childNodes[3]
  var budget_amount ="Not sure";

  //FUCNTIONS
  //this functions verifies if all the require fields are filled
  function verifyFields(){
    if(project_name && brief_description && color_choice
      && inside_outside && sign_location && sign_portable
      && sign_dimensions && sign_quantity && budget_amount){
        return true
      }
      else{
        return false
      }
  }







  //JQUERY because its easier to write input radio even listeners with jquery than vanilla js
  $(document).ready(function(){
        $('.color-option input[type=radio]').click(function(){
            color_choice = this.value;
            console.log(color_choice)
        });
        $('#out-or-in input[type=radio]').click(function(){
          inside_outside = this.value;
          console.log(inside_outside)

        });
        $('#sign-location input[type=radio]').click(function(){
          sign_location = this.value;
        })
        $('#sign-portable input[type=radio]').click(function(){
          sign_portable = this.value;
        })
    });





    //plain JS event listeners
  projectName.addEventListener('input',(e)=>{
    project_name = projectName.value;
  })

  briefDescription.addEventListener('input',(e)=>{
    brief_description = briefDescription.value;

  })
  portfolioExample.addEventListener('input',(e)=>{
    portfolio_example = portfolioExample.value;
  })

  signDimensions.addEventListener('input',(e)=>{
    sign_dimensions = signDimensions.value
  })
  signQuantity.addEventListener('input',(e)=>{
    console.log(signQuantity.value)
    sign_quantity = signQuantity.value
  })
  budget.addEventListener('input',(e)=>{
    budget_amount = budget.value
  })


  nextButton.addEventListener('click',(e)=>{
    console.log('lol')
    if(verifyFields()){
      var userInfo = {
        projectName: project_name,
        briefDescription: brief_description,
        colorChoice:color_choice,
        portfolioExample: portfolio_example,
        insideOutside: inside_outside,
        signLocation: sign_location,
        signPortable: sign_portable,
        signDimensions: sign_dimensions,
        signQuantity: sign_quantity,
        budget: budget_amount,
      }
      localStorage.user =JSON.stringify(userInfo,null,2)
      location.href = "../recommendation2/recommendation2.html"
    }
    else{
      alert('please fill all fields')
    }

  })
