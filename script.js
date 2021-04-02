const get = element => document.getElementById(element);

const open = get('menu-btn');
const nav = get('nav');
const exit = get('exit-btn');

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

const tl = gsap.timeline({defaults: {duration: 1}}); // Each animation occurs right after the other and override the duration to 1 second

tl.from('.logo', {opacity: 0, scale: 0.1, ease: 'back'})
    .from('.main-copy', {y: 200, opacity: 0}, "-=.5")
    .from('.featured-cabins li', {y: -100, opacity: 0, stagger: .25}, "-=.5"); // "-=.5" is the position parameters and shifts when the animation begins. Negative makes it animate earlier and position makes add a delay
