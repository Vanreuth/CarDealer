//active navbar
const allNavlink = document.querySelectorAll(".nav-link");
const allNavbar = document.querySelector(".navbar-nav"); 

allNavbar.addEventListener("mouseover",(e)=>{
    const navTarget = e.target.classList.contains("nav-link");
    allNavlink.forEach((nav)=>{
        if(navTarget){
            nav.classList.remove("active");
            e.target.classList.add("active");
        }

    });
});

//slider
var swiper = new Swiper(".silder", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

   var swiper = new Swiper('.card-client', {
     slidesPerView: 3,
     spaceBetween: 50,
    //  autoplay:{
    //     delay:2000,
    //     disableOnInteraction:false,
    //  },
        pagination: {
             el: '.swiper-pagination',
            clickable: true,
         },
     });