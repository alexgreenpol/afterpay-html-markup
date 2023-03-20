const image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  orientation: 'top',
  delay: 0.6,
  transition: 'cubic-bezier(0,0,0,1)',
});

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

const toggleButton = document.querySelector('.toggle-menu');
const header = document.querySelector('.header');
toggleButton.addEventListener('click', function () {
  header.classList.toggle('toggle');
});

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
