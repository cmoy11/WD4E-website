console.log('js linked')
const hamburger = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.nav-links-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('transform');
    mobileNav.classList.toggle('transform');
});

const wd4e = document.querySelector('.WD4E');

wd4e.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

(function() {

    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.isotope-item');

    const allButton = document.querySelector('.btn[data-filter="all"]');
    allButton.classList.add('active');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('button was clicked');

            const filter = button.dataset.filter;

            storeImages.forEach((item) => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.opacity = '1'; // Fade in
                    item.style.display = 'flex'; // Show the element
                } else {
                    item.style.opacity = '0'; // Fade out
                    item.style.display = 'none'; // Hide the element
                }
            });

            buttons.forEach((btn) => {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
})();


