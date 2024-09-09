let slideIndex = {};

// Open the modal and set the initial slide
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    if (slideIndex[modalId] === undefined) {
        slideIndex[modalId] = 1; // Default to the first slide if not set
    }
    showSlides(modalId, slideIndex[modalId]);
}

// Close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Show the current slide
function showSlides(modalId, n) {
    let i;
    const slides = document.querySelectorAll(`#${modalId} .mySlides`);
    if (n > slides.length) slideIndex[modalId] = 1;
    if (n < 1) slideIndex[modalId] = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[modalId] - 1].style.display = "block";
}

// Move to the next/previous slide
function plusSlides(modalId, n) {
    showSlides(modalId, slideIndex[modalId] += n);
}

// Set the current slide
function currentSlide(modalId, n) {
    slideIndex[modalId] = n;
    showSlides(modalId, n);
}
