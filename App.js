const navLinks = document.querySelector(".nav--links");
const navToggle = document.querySelector(".nav--toggle");
var navBurger = document.querySelector(".nav--toggle div");
var navLinkItems = document.querySelector(".nav--links li");
var phoneIcons = document.querySelector(".phone-icons");
var iconsContainer = document.querySelector("#icons-container");
const body = document.querySelector("body");

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
      //disables scrolling in menu for mobile
      body.classList.add("fixed-position");

      //hides bottom navigation on mobile
      for(phoneIcons of iconsContainer.children){
         phoneIcons.style.display = "none";
         iconsContainer.style.border = "none";
      }
      

   } else { //data visibility is visible
      navLinks.setAttribute("data-visibility", "hidden");

      // enables scrolling
      body.classList.remove("fixed-position");

      //shows bottom navigation on mobile
      for(phoneIcons of iconsContainer.children){
         phoneIcons.style.display = "block";
         iconsContainer.style.border = "3px solid var(--secondary-color)";
      }

      // animation reset
      for(navLinkItems of navLinks.children){
         navLinkItems.style.animation = "";
      }
   }
})