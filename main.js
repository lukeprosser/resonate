const faders = document.querySelectorAll('.fade-in');
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