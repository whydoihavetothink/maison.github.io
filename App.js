const navLinks = document.querySelector(".nav--links");
const navToggle = document.querySelector(".nav--toggle");
var navBurger = document.querySelector(".nav--toggle div");
var navLinkItems = document.querySelector(".nav--links li");

const mainColor = "#4b5320";
const secondaryColor = "#d6a559";

navToggle.addEventListener("click", function(){
   // from burger to x toggle
   navToggle.classList.toggle("lineToggle");

   let i = 0;
   
   if(navLinks.getAttribute("data-visibility") === "hidden"){
      navLinks.setAttribute("data-visibility", "visible");
      // individual links animation
      for(navLinkItems of navLinks.children){
         i+=1;                                              //animation timing
         navLinkItems.style.animation = "navLinkItemsFade "+(i/5+0.3)+"s ease";
      }
      //color reset (so the color doesnt change for mobile devices)
      for(navBurger of navToggle.children){
         navBurger.style.backgroundColor = secondaryColor;
      }

   } else { //data visibility is visible
      navLinks.setAttribute("data-visibility", "hidden");
      // animation reset
      for(navLinkItems of navLinks.children){
         navLinkItems.style.animation = "";
      }
      //color reset (so the color doesnt change for mobile devices)
      for(navBurger of navToggle.children){
         navBurger.style.backgroundColor = secondaryColor;
      }
   }

})

// mouse hover animation over burger
navToggle.addEventListener("mouseenter", function () {
   for(navBurger of navToggle.children){
      navBurger.style.backgroundColor = "red";
   }
})
navToggle.addEventListener("mouseleave", function () {
   for(navBurger of navToggle.children){
      navBurger.style.backgroundColor = secondaryColor;
   }
})