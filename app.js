var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Fixed navigation
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".menu_list");
const bar = document.getElementById("bar");
const closeBar = document.getElementById("close_bar");
window.addEventListener("scroll",()=>{
  const navHeight = nav.getBoundingClientRect().height;
  const windowHeight = window.pageYOffset;
  if(navHeight < windowHeight){
    nav.classList.add("active");
  }else{
    nav.classList.remove("active");
  }
})
//Nav menu toggle
bar.addEventListener("click", ()=>{
  navMenu.classList.add("active");
  
})
closeBar.addEventListener("click", ()=>{
  navMenu.classList.remove("active");
})


//Intersection observer
const sliders = document.querySelectorAll(".slide-in");
console.log(sliders);
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}
const appearOnScroll = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target); 
    }
  })
},appearOptions);
sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
})
