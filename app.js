const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the section is in view
        if (entry.isIntersecting) {
            // Add the class 'visible' to the section
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5 // Triggers when 50% of the section is visible
});

// 2. Target the About section
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    observer.observe(aboutSection);
};





