const navLinks = document.querySelector(".nav--links");
const navToggle = document.querySelector(".nav--toggle");
var navLinkItems = document.querySelector(".nav--links li");


navToggle.addEventListener("click", function(){
   // from burger to x toggle
   navToggle.classList.toggle("lineToggle");

   let i = 0;
   
   if(navLinks.getAttribute("data-visibility") === "hidden"){
      navLinks.setAttribute("data-visibility", "visible");
      // individual links animation
      for(navLinkItems of navLinks.children){
         i+=1;                                              //animation timing
         navLinkItems.style.animation = "navLinkItemsFade "+(i/5+0.2)+"s ease-in";
      }

   } else { //data visibility is visible
      navLinks.setAttribute("data-visibility", "hidden");
      // animation reset
      for(navLinkItems of navLinks.children){
         navLinkItems.style.animation = "";
      }
   }

})