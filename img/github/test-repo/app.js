const toggle = document.getElementById('toggle');
const navBar = document.getElementById('navbar');
const navMenu = document.querySelector('.nav_menu');
const hideToggle = document.getElementById('hideToggle');

toggle.addEventListener('click', ()=>{
   navMenu.classList.toggle('show_nav');
   navBar.classList.toggle('active');
   toggle.classList.toggle('active');
})

window.addEventListener('scroll', ()=>{
   const scrollHeight = window.pageYOffset;
   const navHeight = navBar.getBoundingClientRect().height;
   console.log(navHeight);
   if(scrollHeight > navHeight){
      navBar.classList.add('fixed-nav');
      navMenu.classList.add('fontColor');
   }else{
      navBar.classList.remove('fixed-nav');
      navMenu.classList.remove('fontColor');
   }
})

//SWIPER CAROUSEL
var swiper = new Swiper(".mySwiper", {
   autoplay: {
     delay: 20000,
   },
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
//END SWIPER CAROUSEL 