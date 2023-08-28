console.log('js linked')
const hamburger = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.nav-links-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('transform');
    mobileNav.classList.toggle('transform');
    // document.querySelector('.object-non-visible').classList.toggle('transform')
});

const wd4e = document.querySelector('.WD4E');

wd4e.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

var acc = document.getElementsByClassName("accordion");
var i;
console.log(acc)

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log('Button Clicked')
    this.classList.toggle("acc-active");
    var panel = this.nextElementSibling;
    console.log(panel.classList)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
