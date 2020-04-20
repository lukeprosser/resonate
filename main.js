// Navigation
const menuIcon = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-shift');
  menuIcon.classList.toggle('line-transition');
});

navLink.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-shift');
    menuIcon.classList.toggle('line-transition');
  });
});

// Slide in elements
const sliders = document.querySelectorAll('.slide-in');

const slideOptions = {
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const slideOnScroll = new IntersectionObserver(function(
  entries,
  slideOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  })
}, slideOptions);

sliders.forEach(slider => {
  slideOnScroll.observe(slider);
});

// Fade in elements
const faders = document.querySelectorAll('.fade-in');

const fadeOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px'
};

const fadeOnScroll = new IntersectionObserver(function(
  entries,
  fadeOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  })
}, fadeOptions);

faders.forEach(fader => {
  fadeOnScroll.observe(fader);
});