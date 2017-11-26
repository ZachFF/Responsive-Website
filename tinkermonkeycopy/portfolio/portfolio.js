var portfolioGallery = document.getElementById('portfolio-gallery');

var showButton = document.getElementById('show-button');

var page2 =['images/kimono.jpg','images/mainstreet.jpg','images/onyx.jpg',
'images/paradox.jpg','images/root-science.jpg','images/rosenberg-wall.jpg',
'images/shapeup.jpg','images/smyte.jpg','images/themebeans.jpg','images/union.jpg'
];


function addImages(images){
  var counter =0;
  var secondLink='';
  images.forEach((element)=>{
    if(counter === 0){
      var x = document.createElement('div');
      $(x).addClass('one-image')
      var y = document.createElement('img');
      y.src = element
      x.appendChild(y)
      portfolioGallery.appendChild(x)
      console.log(element)
      console.log('single image')

      counter +=1
      return
    }
    if(counter ===1 ){
      console.log(element)
      console.log('saving link')
      secondLink = element
      counter +=1
      return

    }
    if(counter ===2){
      console.log(element)
      console.log('creating two images')
      var x = document.createElement('div');
      $(x).addClass('two-image');

      var y = document.createElement('img')
      y.src = element
      var z = document.createElement('img')
      z.src = secondLink;
      x.appendChild(y);
      x.appendChild(z)
      portfolioGallery.appendChild(x)


      counter=0
      secondLink=''
      return

    }
  })
}







showButton.addEventListener('click',(e)=>{
  console.log('press')
  addImages(page2)
})
