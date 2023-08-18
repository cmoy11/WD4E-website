console.log("Connected");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let width = screen.width;
    let wd4eElement = document.querySelector('.WD4E');
    let navElement = document.querySelector('nav');

    if (document.documentElement.scrollTop > 20) {
        navElement.style.position = "fixed";
        navElement.style.top = "0";

        if (width < 600) {
            wd4eElement.style.display = "flex";
        } else {
            wd4eElement.style.display = "none";
        }
    } else {
        wd4eElement.style.display = "flex";
        navElement.style.position = "unset";
    }
}





// console.log("Connected");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   let width = screen.width;
//   if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && (width < 600)) {
//     console.log("scrolling")
//     document.querySelector('.WD4E').style.display = "flex";
//     document.querySelector('nav').style.position = "fixed";
//     document.querySelector('nav').style.top = "0px";
//   } else if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && (width > 600)) {
//     console.log("scrolling small")
//     document.querySelector('.WD4E').style.display = "none";
//     document.querySelector('nav').style.position = "fixed";
//     document.querySelector('nav').style.top = "0px";
//   } else {
//     document.querySelector(".WD4E").style.display = "flex";
//     document.querySelector('nav').style.position = "unset";
//   }
// }

