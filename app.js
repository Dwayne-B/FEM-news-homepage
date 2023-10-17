// Get hamburger element and nav elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const root = document.querySelector('html');
let isScrollDisabled = false;

hamburger.addEventListener('click', () => {
    // Toggle hamburger animation
    hamburger.classList.toggle('is-active');

    // Toggle nav visibility
    nav.classList.toggle('toggle-nav');

    // Toggle dark overlay
    root.classList.toggle('overlay');

    // Toggle scrolling
    if (isScrollDisabled) {
        enableScroll();
    } else {
        disableScroll();
    }

    // Update scroll state
    isScrollDisabled = !isScrollDisabled;
});

// Disable scrolling function
function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Prevent the default behavior of scrolling
    window.onscroll = function () {
        window.scrollTo(0, scrollY);
    };
}

// Enable scrolling function
function enableScroll() {
    // Restore the default behavior of scrolling
    window.onscroll = function () {};
}
