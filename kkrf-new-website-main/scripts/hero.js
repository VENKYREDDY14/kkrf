// Scroll animation logic using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInUp"); // Add animation class
        } else {
            entry.target.classList.remove("animate__fadeInUp"); // Remove animation class
        }
    });
});

// Target elements for animation
const elements = document.querySelectorAll(".breadcrumb, .heading, .subheading");
elements.forEach((el) => observer.observe(el));
