    var exploreContainer = document.getElementById('explore-container');
    var exploreSearch = document.getElementById('explore-search');
    var solutionButton = document.getElementById('solution');
    var appearanceButton = document.getElementById('appearance');
    var useButton = document.getElementById('use');




    const solution =[
    {
      title:'OFFICE',
      src:'images/grail.jpg',
      list:['Lobby signage','Meeting room signs','Mission statements','Employee gifts and awards']

    },
    {
      title:'HEALTH & BEAUTY',
      src:'images/sweat-soul.jpg',
      list:['Salon and spas','Gyms and health clubs','Yoga and fitness studios'],

    },{
      title:'PERSONAL USE',
      src:'images/ugmonk.jpg',
      list:['Home offices','Nurseries','gifts']

    },{
      title:'TECH STARTUPS',
      src:'images/meerkat.jpg',
      list:['Lobby signs','Meeting room signs','Hack day awards'],
    },{
      title:'CHURCHES & ORGINIZATIONS',
      src:'images/church.jpg',
      list:['Lobby signage','Awards','Event signs']
    },{
      title:'RETAIL',
      src:'images/dualitas.jpg',
      list:['Checkout counter','Exterior signange','In store signage','Sidewalk signage','Window signage','Tradeshow signage'],
    },{
      title:'FOOD & BEVERAGE',
      src:'images/food.jpg',
      list:['Bars,restaraunts,cafes','Tabletop signage','Window and door signage','Social media signage'],
    },{
      title:'MEDICAL & DENTAL',
      src:'images/dentist.jpg',
      list:['Door signage','Hanging signage','Lobby signs'],
    }];
    const appearance=[
      {
        title:'RUSTIC',
        src:'images/rustic.jpg',
        list:['Rustic and reclaimed wood','Torched wood','Whitewashed signs','Distressed signs']

      },
      {
        title:'METAL SIGNS',
        src:'images/metal-signs.jpg',
        list:['Platinum,gold and bronze signs','Painted metal signs']

      }
    ];
    const use =[{
      title:'OUTDOOR SIGNAGE',
      src:'images/sole-space.jpg',
      list:['Exterior wall signage','Blade and hanging signs','A-frame and sidewalk signage','Weather-resistant wood,painted and metal signs']

    }];


    function createContent(array){
      array.forEach((element)=>{
        var div = document.createElement('div')
        $(div).addClass('explore-content')
        var span = document.createElement('span')
        span.innerHTML = element.title;
        var image = document.createElement('img');
        image.src=element.src;
        div.appendChild(image)
        div.appendChild(span)

          //another for loop to create the list element
          var list = document.createElement('ul')
          element.list.forEach((element)=>{
            var x = document.createElement('li')
            x.innerHTML=element
            list.appendChild(x)
          })
          div.appendChild(list)
          var button = document.createElement('button');
          button.innerHTML ='Learn more >';
          div.appendChild(button);
          exploreContainer.appendChild(div)

      })
    }


    $(document).ready(function(){
      createContent(solution);
    });


    solutionButton.addEventListener('click',(e)=>{
        while (exploreContainer.firstChild) {
        exploreContainer.removeChild(exploreContainer.firstChild);
    }
      createContent(solution);
      })
    appearanceButton.addEventListener('click',(e)=>{
        while (exploreContainer.firstChild) {
        exploreContainer.removeChild(exploreContainer.firstChild);
    }
      createContent(appearance)
      })

    useButton.addEventListener('click',(e)=>{
        while (exploreContainer.firstChild) {
        exploreContainer.removeChild(exploreContainer.firstChild);
    }
      createContent(use);

    })
