function toggleFAQ(element) {
    // Initialize all FAQ items with arrows on page load
    function initializeArrows() {
        const allFAQItems = document.querySelectorAll('.faq-item');
        allFAQItems.forEach(item => {
            // Check if this item already has an arrow
            let arrow = item.querySelector('.faq-arrow');
            if (!arrow) {
                // Create and append arrow if it doesn't exist
                arrow = document.createElement('span');
                arrow.className = 'faq-arrow';
                arrow.textContent = '>'; // Right-pointing angle bracket
                arrow.style.position = 'absolute';
                arrow.style.right = '15px';
                arrow.style.top = '50%';
                arrow.style.transform = 'translateY(-50%)';
                arrow.style.fontSize = '16px'; // Make sure arrow is visible
                arrow.style.fontWeight = 'bold'; // Make it more visible
                arrow.style.userSelect = 'none'; // Prevent selection
                
                // Make the parent position relative if it's not already
                const firstChild = item.firstElementChild;
                if (firstChild) {
                    if (getComputedStyle(firstChild).position !== 'relative') {
                        firstChild.style.position = 'relative';
                    }
                    firstChild.appendChild(arrow);
                } else {
                    // If no child element exists, append to the item itself
                    if (getComputedStyle(item).position !== 'relative') {
                        item.style.position = 'relative';
                    }
                    item.appendChild(arrow);
                }
                
                // Set initial arrow state and background color based on active class
                if (item.classList.contains('active')) {
                    arrow.style.transform = 'translateY(-50%) rotate(90deg)'; // Rotated to point down
                    item.style.backgroundColor = 'black'; // Set background color for active item
                }
            }
        });
    }
    
    // Call initialize function if this is the first click
    if (!window.faqArrowsInitialized) {
        initializeArrows();
        window.faqArrowsInitialized = true;
        
        // Also initialize arrows when DOM content is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeArrows);
        }
    }
    
    // Close all other FAQ items
    const allFAQItems = document.querySelectorAll('.faq-item');
    allFAQItems.forEach(item => {
        if (item !== element && item.classList.contains('active')) {
            item.classList.remove('active');
            // Update arrow for closed items
            const arrow = item.querySelector('.faq-arrow');
            if (arrow) {
                arrow.style.transform = 'translateY(-50%)'; // Reset rotation
            }
            // Reset background color for inactive items
            item.style.backgroundColor = ''; // Reset to default/CSS-defined color
        }
    });
    
    // Then toggle the clicked element
    element.classList.toggle('active');
    
    // Update the arrow based on the active state
    const arrow = element.querySelector('.faq-arrow');
    if (arrow) {
        if (element.classList.contains('active')) {
            arrow.style.transform = 'translateY(-50%) rotate(90deg)'; // Rotated to point down
            element.style.backgroundColor = 'black'; // Set background color for active item
        } else {
            arrow.style.transform = 'translateY(-50%)'; // Reset rotation
            element.style.backgroundColor = ''; // Reset to default/CSS-defined color
        }
    }
}

// Initialize arrows on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const allFAQItems = document.querySelectorAll('.faq-item');
        if (allFAQItems.length > 0) {
            // Just call the function with the first item to initialize all arrows
            // without actually toggling anything
            window.faqArrowsInitialized = false;
            toggleFAQ(allFAQItems[0]);
            // Restore original state if needed
            if (!allFAQItems[0].classList.contains('active')) {
                const arrow = allFAQItems[0].querySelector('.faq-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateY(-50%)'; // Reset rotation
                    allFAQItems[0].style.backgroundColor = ''; // Reset background color
                }
            }
        }
    });
} else {
    // If DOM is already loaded, initialize immediately
    const allFAQItems = document.querySelectorAll('.faq-item');
    if (allFAQItems.length > 0) {
        window.faqArrowsInitialized = false;
        toggleFAQ(allFAQItems[0]);
        // Restore original state if needed
        if (!allFAQItems[0].classList.contains('active')) {
            const arrow = allFAQItems[0].querySelector('.faq-arrow');
            if (arrow) {
                arrow.style.transform = 'translateY(-50%)'; // Reset rotation
                allFAQItems[0].style.backgroundColor = ''; // Reset background color
            }
        }
    }
}



/* JavaScript functionality */
document.addEventListener('DOMContentLoaded', function() {
    const benefitItems = document.querySelectorAll('.appinv-benefit-item');
    const benefitContents = document.querySelectorAll('.appinv-benefit-content');
    
    benefitItems.forEach(item => {
      item.addEventListener('click', () => {
        const benefitId = item.getAttribute('data-benefit');
        
        // Update active class on items
        benefitItems.forEach(i => i.classList.remove('appinv-active'));
        item.classList.add('appinv-active');
        
        // Update active content
        benefitContents.forEach(content => {
          content.classList.remove('appinv-active');
          if (content.id === benefitId) {
            content.classList.add('appinv-active');
          }
        });
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('exitPopupOverlay');
    const popup = document.querySelector('.ep-popup');
    const closeBtn = document.getElementById('closePopup');
    const scheduleBtn = document.getElementById('epScheduleBtn');
    const captchaInput = document.getElementById('epCaptchaAnswer');
    const formInputs = document.querySelectorAll('.ep-input, .ep-textarea, .ep-phone-number');
    
    // CRITICAL: Add these styles to ensure centering immediately
    // This must happen before any other operations
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    
    // Initially hide the overlay
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    
    // Function to open the popup
    function openPopup() {
        // Make the overlay visible with center alignment
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
        overlay.classList.add('show');
        
        // Disable background scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Show popup after 10 seconds when page loads
    setTimeout(function() {
        openPopup();
    }, 10000);
    
    // Improved closing function that maintains positioning
    function closePopup() {
        // Start fade-out and prevent interaction
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        overlay.classList.remove('show');
        
        // Wait for animation to complete before hiding completely
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Rest of your code remains the same...
    
    // Close popup when close button is clicked
    closeBtn.addEventListener('click', closePopup);
    
    // Close popup when clicking outside the popup
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
    
    // Add focus and blur effects for form inputs
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Auto-check if field has value
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Form submission with validation
    scheduleBtn.addEventListener('click', function() {
        let isValid = true;
        const requiredInputs = document.querySelectorAll('.ep-input[required], .ep-phone-number[required]');
        
        // Check required fields
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('ep-error');
                isValid = false;
            } else {
                input.classList.remove('ep-error');
            }
        });
        
        // Validate captcha
        if (captchaInput.value !== '6') {
            captchaInput.classList.add('ep-error');
            alert('Please answer the math question correctly.');
            isValid = false;
        } else {
            captchaInput.classList.remove('ep-error');
        }
        
        // Validate email format if provided
        const emailInput = document.getElementById('epEmail');
        if (emailInput.value && !validateEmail(emailInput.value)) {
            emailInput.classList.add('ep-error');
            alert('Please enter a valid email address.');
            isValid = false;
        }
        
        if (isValid) {
            // Add loading state to button
            scheduleBtn.innerHTML = 'Processing...';
            scheduleBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(function() {
                alert('Thank you! We will contact you soon.');
                closePopup();
                
                // Reset form
                document.getElementById('epConsultationForm').reset();
                scheduleBtn.innerHTML = 'Schedule Free Consultation';
                scheduleBtn.disabled = false;
                
                // Reset form group focused states
                document.querySelectorAll('.ep-form-group').forEach(group => {
                    group.classList.remove('focused');
                });
            }, 1000);
        }
    });
    
    // Email validation helper
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Handle escape key to close popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closePopup();
        }
    });
    
    // Prevent closing when clicking on popup content
    popup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Exit intent detection (show popup when mouse leaves window)
    let showOnExit = false;
    
    // Only enable exit intent after 30 seconds to avoid annoying users too quickly
    setTimeout(() => {
        showOnExit = true;
    }, 30000);
    
    document.addEventListener('mouseleave', function(e) {
        // If mouse leaves the top of the page and popup isn't already shown
        if (e.clientY < 0 && showOnExit && !overlay.classList.contains('show') && !localStorage.getItem('epPopupClosed')) {
            openPopup();
        }
    });
    
    // Save state to avoid showing popup again in the same session
    closeBtn.addEventListener('click', function() {
        localStorage.setItem('epPopupClosed', 'true');
        closePopup();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all industry items
    const industryItems = document.querySelectorAll('.kkrf2-industry-item');
    
    // Industrial descriptions data - these would be populated with real content
    const industryDescriptions = {
        'Energy & Utilities': 'Digital solutions that enhance sustainability efforts, optimize capital efficiency, and transform your energy business for the future.',
        'Financial Services & Insurance': 'Modernize digital platforms, enhance customer experience, and navigate regulatory changes with innovative financial technology solutions.',
        'Healthcare & Life Sciences': 'Transform patient care, streamline operations, and accelerate research with advanced healthcare technology solutions.',
        'Industrials': 'Improve operational efficiency, enable predictive maintenance, and digitize manufacturing processes for Industry 4.0.',
        'Media & Entertainment': 'Create immersive digital experiences, optimize content delivery platforms, and develop new monetization strategies.',
        'Retail & CPG': 'Enhance omnichannel experiences, optimize supply chains, and leverage data analytics for personalized customer engagement.',
        'Technology': 'Accelerate digital innovation, develop scalable platforms, and integrate emerging technologies into your product ecosystem.',
        'Transportation & Mobility': 'Develop connected vehicle solutions, optimize fleet management, and create seamless mobility experiences.',
        'Telecommunications': 'Modernize network infrastructure, enhance service delivery platforms, and develop new digital services for the connected world.'
    };
    
    // Add click event listener to each industry item
    industryItems.forEach(item => {
        const industryLink = item.querySelector('.kkrf2-industry-link');
        const industryName = item.querySelector('.kkrf2-industry-name').textContent;
        
        // Ensure each item has a description paragraph
        let descriptionElement = item.querySelector('.kkrf2-industry-description');
        if (!descriptionElement) {
            descriptionElement = document.createElement('p');
            descriptionElement.className = 'kkrf2-industry-description';
            item.appendChild(descriptionElement);
        }
        
        // Set the description text based on industry name
        if (industryDescriptions[industryName]) {
            descriptionElement.textContent = industryDescriptions[industryName];
        }
        
        // Add click handler to the industry link
        industryLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if this item is already active
            const isCurrentlyActive = item.classList.contains('kkrf2-industry-active');
            
            // Remove active class from all items
            industryItems.forEach(i => i.classList.remove('kkrf2-industry-active'));
            
            // Only add active class if it wasn't already active (toggle behavior)
            if (!isCurrentlyActive) {
                item.classList.add('kkrf2-industry-active');
            }
            // If it was active, we just removed the class, effectively closing it
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Get elements using unique IDs
    const overlay = document.getElementById('kkrfCookieOverlay');
    const closeBtn = document.getElementById('kkrfCloseBtn');
    const customizeBtn = document.getElementById('kkrfCustomizeBtn');
    const declineBtn = document.getElementById('kkrfDeclineBtn');
    const acceptBtn = document.getElementById('kkrfAcceptBtn');
    const htmlElement = document.documentElement;
    
    // Show cookie consent when page loads
    showKkrfConsentPopup();
    
    // Function to show the cookie consent popup
    function showKkrfConsentPopup() {
        overlay.style.display = 'flex';
        // Use a more targeted approach to prevent scrolling
        htmlElement.classList.add('kkrf-no-scroll');
    }
    
    // Function to hide the cookie consent popup
    function hideKkrfConsentPopup() {
        overlay.style.display = 'none';
        htmlElement.classList.remove('kkrf-no-scroll');
    }
    
    // Handle close button click
    closeBtn.addEventListener('click', function() {
        console.log('User closed the cookie popup');
        hideKkrfConsentPopup();
    });
    
    // Handle button clicks
    customizeBtn.addEventListener('click', function() {
        console.log('User clicked Customize cookies');
        hideKkrfConsentPopup();
    });
    
    declineBtn.addEventListener('click', function() {
        console.log('User declined optional cookies');
        hideKkrfConsentPopup();
    });
    
    acceptBtn.addEventListener('click', function() {
        console.log('User accepted all cookies');
        hideKkrfConsentPopup();
    });
    
    // Prevent closing by clicking outside the popup
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            e.stopPropagation();
            // We don't close the cookie consent popup when clicking outside
            // as it requires explicit user consent
        }
    });
    
    // Handle escape key to close popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideKkrfConsentPopup();
        }
    });
});