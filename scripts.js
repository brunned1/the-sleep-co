$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle()
    });

    AOS.init();

    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });
});