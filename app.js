const menu = document.querySelector('#moblie-menu');
const menulinks = document.querySelector(".navbar-menu");
const navlogo = document.querySelector(".navbar-logo");

// display moblie menu

const mobliemenu = () => {
     menu.classList.toggle("is-active");
     menulinks.classList.toggle("active");            
};

menu.addEventListener("click" , mobliemenu);

//show active menu when scrolling

const highlightmenu = () => {

    const elem = document.querySelector(".highlight");
    const homemenu = document.querySelector("#home");
    const about = document.querySelector("#about");
    const service = document.querySelector("#service");
    // const sign = document.querySelector("#sign");

    let scrollpos = window.scrollY;
    // console.log(scrollpos);

    //Add "highlight" class  to my menu item

   if(window.innerWidth > 960 && scrollpos < 600){
      homemenu.classList.add("highlight");
      about.classList.remove("highlight");
      return
   }else if (window.innerWidth > 960 && scrollpos < 1400) {
      about.classList.add("highlight");
      homemenu.classList.remove("highlight");
      service.classList.remove("highlight");
      return
   }else if (window.innerWidth > 960 && scrollpos < 2100) {
      service.classList.add("highlight");
      about.classList.remove('highlight');
      return
   }

   if((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
       elem.classList.remove('highlight');
   }
};

window.addEventListener ('scroll', highlightmenu);
window.addEventListener ('click' , highlightmenu);

//closeing moblie menu when clicking on a menu item

const hidemobliemenu = () => {
    const barmenu = document.querySelector('is-active');

    if(window.innerWidth <= 768 && barmenu) {
        menu.classList.toggle("is-active");
        menulinks.classList.remove("active");
    }
};

menulinks.addEventListener('click' , hidemobliemenu);
navlogo.addEventListener('click' , hidemobliemenu);