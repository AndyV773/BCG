let slideIndex = 0;
let hero = document.getElementById("hero");
let servicesBanner = document.getElementById("services-banner");

function showSlidesIndex() {
    let i;
    let dots = document.getElementsByClassName("dot");

    // Array of background images
    const backgroundImages = [
        "url('assets/images/under-construction.webp')",
        "url('assets/images/buildings.webp')",
        "url('assets/images/architrave.webp')"
    ];
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slideIndex++;
    if (slideIndex > backgroundImages.length) {
        slideIndex = 1;
    }
    hero.style.backgroundImage = backgroundImages[slideIndex - 1];
    dots[slideIndex - 1].className += " active-dot";

    // Change image every 2 seconds
    setTimeout(showSlidesIndex, 5000);
}

function showSlidesService() {
    let i;
    let dots = document.getElementsByClassName("dot");

    // Array of background images
    const backgroundImages = [
        "url('assets/images/under-construction.webp')",
        "url('assets/images/buildings.webp')",
        "url('assets/images/architrave.webp')"
    ];
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slideIndex++;
    if (slideIndex > backgroundImages.length) {
        slideIndex = 1;
    }
    servicesBanner.style.backgroundImage = backgroundImages[slideIndex - 1];
    dots[slideIndex - 1].className += " active-dot";

    // Change image every 2 seconds
    setTimeout(showSlidesService, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    if (hero) {
        showSlidesIndex();
    }

    if (servicesBanner) {
        showSlidesService();
    }
});
