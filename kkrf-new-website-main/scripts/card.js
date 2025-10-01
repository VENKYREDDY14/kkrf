const serviceItems = document.querySelectorAll(".service-item");
const serviceContents = document.querySelectorAll(".service-content");

serviceItems.forEach(item => {
    item.addEventListener("click", () => {
        // Update active class
        serviceItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Fetch service data
        const serviceKey = item.getAttribute("data-service");

        // Hide all service content
        serviceContents.forEach(content => content.classList.add("hidden"));

        // Show the clicked service content
        const activeContent = document.getElementById(serviceKey);
        if (activeContent) {
            activeContent.classList.remove("hidden");
        }
    });
});



const accordionHeaders = document.querySelectorAll('.bi-accordion-header');
        
// Add click event to each header
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Get the content and icon associated with this header
        const content = this.nextElementSibling;
        const icon = this.querySelector('.bi-accordion-icon');
        
        // Toggle the active class for the content and icon
        content.classList.toggle('active');
        icon.classList.toggle('active');
        
        // If this content is now active (open), close all other accordion items
        if (content.classList.contains('active')) {
            // Close all other accordion contents
            document.querySelectorAll('.bi-accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });
            
            // Reset all other accordion icons
            document.querySelectorAll('.bi-accordion-icon').forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.classList.remove('active');
                }
            });
        }
    });
});

// Initialize the second accordion item as open by default
window.addEventListener('DOMContentLoaded', () => {
    const secondAccordionIcon = document.querySelectorAll('.bi-accordion-icon')[1];
    secondAccordionIcon.classList.add('active');
});