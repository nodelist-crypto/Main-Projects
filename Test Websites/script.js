document.addEventListener("DOMContentLoaded", function () {
    // Toggle navigation menu on mobile
    const navLinks = document.getElementById("navLinks");
    const menuIcon = document.querySelector(".fa-bars");
    const closeIcon = document.querySelector(".fa-times");
  
    menuIcon.addEventListener("click", () => navLinks.classList.add("active"));
    closeIcon.addEventListener("click", () => navLinks.classList.remove("active"));
  });
  
  // Optional: If you want smooth scrolling functionality
  let sections = document.querySelectorAll('section');
  let currentSection = 0;
  
  function scrollToSection() {
    if (currentSection < sections.length) {
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.addEventListener("wheel", function (event) {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection();
    } else if (event.deltaY < 0 && currentSection > 0) {
      currentSection--;
      scrollToSection();
    }
  });
  