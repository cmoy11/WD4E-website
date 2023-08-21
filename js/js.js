// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Connected");

//     window.onscroll = function() {
//         scrollFunction();
//     };

//     function scrollFunction() {
//         let width = screen.width;
//         if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && (width > 600)) {
//           console.log("scrolling")
//           document.querySelector('.WD4E').style.display = "flex";
//           document.querySelector('nav').style.position = "fixed";
//           document.querySelector('nav').style.top = "0px";
//         } else {
//           console.log("I'm too small to scroll")
//           document.querySelector(".WD4E").style.display = "flex";
//           document.querySelector('nav').style.position = "unset";
//         }
//       }
// });

const hamburger = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.nav-links-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('transform');
    mobileNav.classList.toggle('transform');
});


