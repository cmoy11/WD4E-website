console.log("Connected");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let width = screen.width;
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && (width < 600)) {
    console.log("scrolling")
    document.querySelector('.WD4E').style.display = "flex";
    document.querySelector('nav').style.position = "fixed";
    document.querySelector('nav').style.top = "0px";
  } else if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && (width > 600)) {
    console.log("scrolling small")
    document.querySelector('.WD4E').style.display = "none";
    document.querySelector('nav').style.position = "fixed";
    document.querySelector('nav').style.top = "0px";
  } else {
    document.querySelector(".WD4E").style.display = "flex";
    document.querySelector('nav').style.position = "unset";
  }
}