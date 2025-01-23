// JavaScript Document

// Set up event listener for scroll event, debounced with requestAnimationFrame
let ticking = false;
window.addEventListener('scroll', function(e) {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            scrollFunction();
            ticking = false;
        });
        ticking = true;
    }
});

/**
 * Toggles visibility of the 'Top' button based on scroll position.
 */
function scrollFunction() {
    var button = document.getElementById("myBtn");
    if (button) {
        button.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    }
}

/**
 * Scrolls the page back to the top when the 'Top' button is clicked.
 */
function topFunction() {
    if (window.scrollTo) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
