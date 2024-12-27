let sections = document.querySelectorAll('section'); // Select all sections
let currentSection = 0; // Track the current section

// Function to scroll to the next section smoothly
function scrollToSection() {
    // Ensure the current section is within bounds
    if (currentSection < sections.length) {
        sections[currentSection].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Detect the wheel scroll event
document.addEventListener("wheel", function (event) {
    // If scrolling down
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++; // Move to the next section
        scrollToSection();
    } 
    // If scrolling up
    else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--; // Move to the previous section
        scrollToSection();
    }
});
