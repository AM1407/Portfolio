
    document.addEventListener('DOMContentLoaded', () => {
        const dots = document.querySelectorAll('.dot');
        const sections = document.querySelectorAll('section');
        const headerHeight = 135;

        // --- PART 1: CLICK HANDLING (Keeps the smooth slide) ---
        // This part works, so we keep it exactly as is.
        dots.forEach(dot => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // --- PART 2: THE "LASER TRIPWIRE" (The Fix) ---

        // We create an observer that only looks at a thin line in the middle of the screen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all dots
                    dots.forEach(d => d.classList.remove('active'));

                    // Find the dot that matches this section ID
                    const activeDot = document.querySelector(`.dot[href="#${entry.target.id}"]`);
                    if (activeDot) {
                        activeDot.classList.add('active');
                    }
                }
            });
        }, {
            // This is the magic.
            // We shrink the detection zone to a single line in the middle of the screen.
            // It effectively ignores the top 50% and bottom 50% of the view.
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        });

        // Tell the observer to watch your sections
        sections.forEach(section => {
            observer.observe(section);
        });
    });