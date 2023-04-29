var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')
var indexImg = 0;

    function showGallery(){
        if(indexImg == 0){
            prev.classList.add('hide')
        }else{
            prev.classList.remove('hide')
        }

        if(indexImg == images.length - 1){
            right.classList.add('hide')
        }else{
            right.classList.remove('hide')
        }

        galleryImg.src = images[indexImg].src
        gallery.classList.add('show')
    }

 images.forEach((item, index)=>{
    item.addEventListener('click', function(){ 
        indexImg = index
      showGallery()
    })
 })

 close.addEventListener('click', function(){
    gallery.classList.remove('show')
 })

 right.addEventListener('click', function(){
    if(indexImg < images.length){
    indexImg++
    showGallery()
}
 })

 prev.addEventListener('click', function(){
    if(indexImg > 0){
    indexImg--
    showGallery()
}
 })
 
 function closeGallery() {
    gallery.classList.remove('show');
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      closeGallery();
    }
  });
  
  
