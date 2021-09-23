//Script para menus -----------------------------------------------------------
const nav = () => {
    const menu =  document.querySelector('.main-menu__icon');
    const navMenu = document.querySelector('.main-menu__nav ul');


    menu.addEventListener('click', ()=>{
        navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', ()=>{
      navMenu.classList.toggle('active');
  });
  
}
nav();

/*
var slides=document.querySelector('.banner__imgs').children;
var nextSlide=document.querySelector(".banner__next");
var prevSlide=document.querySelector(".banner__back");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

setInterval(next,8000);
*/