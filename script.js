function showTab(tabId) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding tab content
    document.querySelector(`.tab[onclick=\"showTab('${tabId}')\"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');
let autoSlideInterval;

// Function to move to the next or previous slide
function moveSlide(direction) {
    currentIndex += direction;

    // Loop through the slides
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel();
}

// Function to set the current slide to the clicked dot
function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Update carousel position and highlight active dot
function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Update dot styles
    dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Reset opacity for all images and apply to the current one
    slides.forEach((slide, idx) => {
        slide.style.opacity = (idx === currentIndex) ? 1 : 0;
    });
}

// Auto-rotation of slides every 3 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

// Pause auto-rotation on hover
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    startAutoSlide();
});

// Initialize the carousel
startAutoSlide();
updateCarousel();
document.getElementById('suggestion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the suggestion from the textarea
    const suggestionText = document.getElementById('suggestions').value;

    if (suggestionText) {
        // Display a confirmation message
        document.getElementById('confirmation-message').textContent = "Thank you for your suggestion!";
        
        // Clear the text area
        document.getElementById('suggestions').value = "";
    } else {
        document.getElementById('confirmation-message').textContent = "Please enter a suggestion.";
    }
});

