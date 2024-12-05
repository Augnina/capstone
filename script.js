// Event listeners for the download buttons
document.getElementById('downloadWindows').addEventListener('click', function () {
    setTimeout(showInfographic, 3000); // Show infographic after 3 seconds
});

document.getElementById('downloadMac').addEventListener('click', function () {
    setTimeout(showInfographic, 3000); // Show infographic after 3 seconds
});

// Function to show the floating infographic
function showInfographic() {
    const infographic = document.createElement('div');
    infographic.className = 'infographic-container';
    infographic.innerHTML = `
        <h2>Thank You!</h2>
        <p>Thank you so much for downloading the app! We hope it serves you well in analyzing blood spatters effectively.</p>
        <button class="btn-close" onclick="closeInfographic(this)">Close</button>
    `;
    document.body.appendChild(infographic);
}

// Function to close the infographic
function closeInfographic(button) {
    const infographic = button.parentElement;
    infographic.style.animation = "slide-in 0.5s ease-out reverse";
    setTimeout(() => infographic.remove(), 500);
}

// Add hover effect to images in contact section
const images = document.querySelectorAll('.image-anim');
images.forEach(image => {
    image.addEventListener('mouseenter', function () {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseleave', function () {
        image.style.transform = 'scale(1)';
    });
});
