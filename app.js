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
const showIn = document.querySelectorAll(".show-in");
console.log(sliders);
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -350px 0px"
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
//progress-line 
const progressLineOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px" 
}

const progressOnScroll = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add("progress-line");
    }
  })
},progressLineOptions);
showIn.forEach(show =>{
  progressOnScroll.observe(show);
})

//********smooth scroll *********/
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();

  //navigate to specific
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  console.log(element);
  
  //calculate the heights
  const navHeight = nav.getBoundingClientRect().height;
  const navMenuHeight = navMenu.getBoundingClientRect().height;
  const fixedNav = nav.classList.contains('active');
  let position = element.offsetTop - navHeight;
  
  if(!fixedNav){
    position = position - navHeight;
  }
  if(navHeight > 200){
    position = position + navMenuHeight;
  }
  window.scrollTo({
    left:0,
    top:position,
  });
  navMenu.classList.remove("active");
  });
});

//Top link
window.addEventListener("scroll", ()=>{
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 500){
    topLink.classList.add('show-links')
}
else{
    topLink.classList.remove('show-links')
}
})

//text-animation
// function([string1, string2],target id,[color1,color2])    
consoleText(['Im John Lyl', 'I love to code', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//stop loader
