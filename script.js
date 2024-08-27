 //Open Modal
 function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

//Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

//Global slide index each modal
let slideIndexes = {};

//Show the specific slide in the modal
function showSlides(modalId, n) {
    let slides = document.querySelectorAll(`#${modalId} .mySlides`);
    let dots = document.querySelectorAll(`#${modalId} .demo`);
    let captionText = document.querySelector(`#${modalId} #caption`);
    
    // Initialize the slide index for the modal if not already
    if (!slideIndexes[modalId]) {
        slideIndexes[modalId] = 1;
    }

    if (n > slides.length) {
        slideIndexes[modalId] = 1;
    }
    if (n < 1) {
        slideIndexes[modalId] = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the 'active' class from all thumbnail dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and update the caption
    slides[slideIndexes[modalId] - 1].style.display = "block";
    dots[slideIndexes[modalId] - 1].className += " active";
    captionText.innerHTML = dots[slideIndexes[modalId] - 1].alt;
}

// Navigate to the next/previous slide
function plusSlides(modalId, n) {
    showSlides(modalId, slideIndexes[modalId] += n);
}

// Display the clicked thumbnail image
function currentSlide(modalId, n) {
    showSlides(modalId, slideIndexes[modalId] = n);
}