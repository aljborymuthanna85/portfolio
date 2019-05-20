
// Get the current year for the copyright

$('#year').text(new Date().getFullYear());

// Init Scrollspy

$('body').scrollspy({ target: "#myNavbar", offset: 50, });

// Smooth-Scroll

$(function() {
    var scroll = new SmoothScroll('a[href*="#section-"]');
});

