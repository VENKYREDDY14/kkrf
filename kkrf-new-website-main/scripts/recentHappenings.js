// Image and Tab Elements
const images = [
    document.getElementById('recentImage1'),
    document.getElementById('recentImage2'),
    document.getElementById('recentImage3'),
    document.getElementById('recentImage4')
];

const tabs = [
    document.getElementById('tab1'),
    document.getElementById('tab2'),
    document.getElementById('tab3'),
    document.getElementById('tab4')
];

// Function to Update Active Tab and Image
function updateActiveTab(index) {
    // Update Image
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('d-none');
            img.classList.add('d-inline');
        } else {
            img.classList.remove('d-inline');
            img.classList.add('d-none');
        }
    });

    // Update Tab Style
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('recent-happenings-active-tab');
            
            tab.classList.remove('recent-happenings-text');
        } else {
            tab.classList.remove('recent-happenings-active-tab');
           
            tab.classList.add('recent-happenings-text');
        }
    });
}

// Add Mouseover Event Listeners
tabs.forEach((tab, index) => {
    tab.addEventListener('mouseover', () => updateActiveTab(index));
});




document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    
    // Testimonials data
    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CTO, TechVision Inc.",
            text: "Working with KKRF Services has completely transformed our digital infrastructure. Their team showed exceptional expertise and dedication throughout the project. What impressed me most was their ability to understand our business needs and translate them into effective technical solutions. The results have exceeded our expectations, with a 43% increase in operational efficiency.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        {
            name: "Michael Chen",
            position: "Director, Global Solutions",
            text: "The support team at KKRF is simply outstanding. They're responsive, knowledgeable, and always go the extra mile. Our project was delivered ahead of schedule and the results have been fantastic.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            name: "Jessica Williams",
            position: "CEO, Innovate Corp",
            text: "KKRF Services delivered our project on time and under budget. Their technical expertise and project management skills are second to none. We're already planning our next collaboration.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "David Rodriguez",
            position: "VP of Operations, DataFlow",
            text: "Implementing KKRF's solution resulted in a 35% reduction in our operational costs while improving system reliability. Their team was professional, communicative, and extremely knowledgeable.",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    ];
    
    let currentTestimonialIndex = 0;
    const featuredTestimonialElement = document.getElementById('featuredTestimonial');
    const starRatingElement = featuredTestimonialElement.querySelector('.kkrf-star-rating');
    const testimonialTextElement = featuredTestimonialElement.querySelector('.kkrf-testimonial-text');
    const clientNameElement = featuredTestimonialElement.querySelector('.kkrf-client-name');
    const clientPositionElement = featuredTestimonialElement.querySelector('.kkrf-client-position');
    const clientAvatarElement = featuredTestimonialElement.querySelector('.kkrf-client-avatar');
    
    const nextArrow = document.getElementById('nextArrow');
    const prevArrow = document.getElementById('prevArrow');
    const paginationContainer = document.getElementById('testimonialPagination');
    
    // Create pagination dots
    function createPaginationDots() {
        // Clear existing dots first
        while (paginationContainer.firstChild) {
            paginationContainer.removeChild(paginationContainer.firstChild);
        }
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `kkrf-pagination-dot ${index === currentTestimonialIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Testimonial ${index + 1}`);
            dot.setAttribute('role', 'button');
            dot.setAttribute('tabindex', '0');
            dot.addEventListener('click', () => {
                if (index !== currentTestimonialIndex) {
                    pauseAutoScroll(); // Stop auto-scrolling when user interacts
                    updateTestimonial(index, true);
                }
            });
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    if (index !== currentTestimonialIndex) {
                        pauseAutoScroll(); // Stop auto-scrolling when user interacts
                        updateTestimonial(index, true);
                    }
                    e.preventDefault();
                }
            });
            paginationContainer.appendChild(dot);
        });
    }
    
    // Update pagination dots
    function updatePaginationDots() {
        const dots = paginationContainer.querySelectorAll('.kkrf-pagination-dot');
        dots.forEach((dot, index) => {
            if (index === currentTestimonialIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Function to update testimonial content with animation
    function updateTestimonial(index, animate = true) {
        const testimonial = testimonials[index];
        
        // Update current index
        currentTestimonialIndex = index;
        
        // Update pagination
        updatePaginationDots();
        
        // Check if we need to disable navigation arrows
        updateNavigationState();
        
        if (animate) {
            // Add fade out class
            featuredTestimonialElement.classList.add('kkrf-fade-out');
            
            // Wait for animation to complete before updating content
            setTimeout(() => {
                updateTestimonialContent(testimonial);
                
                // Remove fade out class and add fade in class
                featuredTestimonialElement.classList.remove('kkrf-fade-out');
                featuredTestimonialElement.classList.add('kkrf-fade-in');
                
                // Remove fade in class after animation completes
                setTimeout(() => {
                    featuredTestimonialElement.classList.remove('kkrf-fade-in');
                }, 500);
            }, 500);
        } else {
            updateTestimonialContent(testimonial);
        }
    }
    
   // Update testimonial content
   function updateTestimonialContent(testimonial) {
        // Update content
        starRatingElement.innerHTML = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        starRatingElement.setAttribute('aria-label', `${testimonial.rating} out of 5 star rating`);
        testimonialTextElement.textContent = `"${testimonial.text}"`;
        clientNameElement.textContent = testimonial.name;
        clientPositionElement.textContent = testimonial.position;
        clientAvatarElement.src = testimonial.image;
        clientAvatarElement.alt = testimonial.name;
    }
    
    // Update navigation state
    function updateNavigationState() {
        // For this implementation, we're allowing circular navigation
        // But you could disable buttons at ends if preferred
        /*
        prevArrow.disabled = currentTestimonialIndex === 0;
        nextArrow.disabled = currentTestimonialIndex === testimonials.length - 1;
        */
    }
    
    // Handle keyboard navigation for accessibility
    function handleKeyboardNavigation(e) {
        if (e.key === 'ArrowLeft') {
            navigatePrev();
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            navigateNext();
            e.preventDefault();
        }
    }
    
    // Navigate to previous testimonial
    function navigatePrev() {
        pauseAutoScroll(); // Stop auto-scrolling when user interacts
        const newIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(newIndex);
    }
    
    // Navigate to next testimonial
    function navigateNext() {
        pauseAutoScroll(); // Stop auto-scrolling when user interacts
        const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(newIndex);
    }
    
    // Initialize pagination dots
    createPaginationDots();
    
    // Initialize navigation state
    updateNavigationState();
    
    // Event listeners for navigation
    nextArrow.addEventListener('click', navigateNext);
    prevArrow.addEventListener('click', navigatePrev);
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Autoscroll testimonials
    let testimonialInterval;
    let autoScrollPaused = false;
    
    function startAutoScroll() {
        if (autoScrollPaused) return;
        
        stopAutoScroll(); // Clear any existing interval first
        testimonialInterval = setInterval(() => {
            const newIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial(newIndex);
        }, 6000); // Change every 6 seconds
    }
    
    function stopAutoScroll() {
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
            testimonialInterval = null;
        }
    }
    
    function pauseAutoScroll() {
        stopAutoScroll();
        autoScrollPaused = true;
    }
    
    function resumeAutoScroll() {
        autoScrollPaused = false;
        startAutoScroll();
    }
    
    // Start autoscroll
    startAutoScroll();
    
    // Pause autoscroll on hover/focus
    featuredTestimonialElement.addEventListener('mouseenter', pauseAutoScroll);
    featuredTestimonialElement.addEventListener('mouseleave', resumeAutoScroll);
    featuredTestimonialElement.addEventListener('focusin', pauseAutoScroll);
    featuredTestimonialElement.addEventListener('focusout', resumeAutoScroll);
    
    // Also pause on navigation area hover
    document.querySelector('.kkrf-testimonial-controls').addEventListener('mouseenter', pauseAutoScroll);
    document.querySelector('.kkrf-testimonial-controls').addEventListener('mouseleave', resumeAutoScroll);
    
    // Counter animation for stats
    function animateCounter(element, start, end, duration) {
        let startTime = null;
        
        // Don't animate if user prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            element.textContent = `${end}%`;
            return;
        }
        
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const value = Math.floor(start + (end - start) * progress);
            
            element.textContent = `${value}%`;
            
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // Start counter animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statsCounter = document.getElementById('statsCounter');
                animateCounter(statsCounter, 0, 98, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.kkrf-stats-card'));
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.querySelector('.kkrf-testimonials-page');
    const themeIcon = themeToggle.querySelector('svg');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        updateThemeIcon(true);
    } else if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        updateThemeIcon(false);
    } else if (!prefersDarkScheme) {
        // If no saved preference but system prefers light
        body.classList.add('light-mode');
        updateThemeIcon(true);
    }
    
    function updateThemeIcon(isLight) {
        if (isLight) {
            // Sun icon
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        } else {
            // Moon icon
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        
        // Save theme preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Update icon
        updateThemeIcon(isLight);
    });
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('.kkrf-gallery-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Set the source only when it enters viewport
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Define services
    const services = [
      'product',
      'digital',
      'ml',
      'sap',
      'data',
      'cloud',
      'nexgen'
    ];
    
    // Add click handlers
    services.forEach(service => {
      const menuBtn = document.getElementById(`ai-${service}-btn`);
      if (menuBtn) {
        menuBtn.addEventListener('click', function() {
          toggleMenu(service);
        });
      }
    });
    
    // Add hover effect to menu links
    const menuLinks = document.querySelectorAll('.ai-menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        const anchor = this.querySelector('a');
        if (anchor) {
          anchor.style.color = '#ffffff';
          anchor.style.fontWeight = 'bold';
        }
      });
      
      link.addEventListener('mouseleave', function() {
        const anchor = this.querySelector('a');
        if (anchor) {
          anchor.style.color = '';
          anchor.style.fontWeight = '';
        }
      });
    });
    
    // Toggle function that allows closing
    function toggleMenu(id) {
      const contentEl = document.getElementById(`ai-${id}-content`);
      const iconEl = document.getElementById(`ai-${id}-icon`);
      const isOpen = !contentEl.classList.contains('d-none');
      
      // If clicking the open menu, close it
      if (isOpen) {
        contentEl.classList.add('d-none');
        iconEl.classList.remove('bi-chevron-up');
        iconEl.classList.add('bi-chevron-down');
        
        // Hide the image too
        const imgEl = document.getElementById(`ai-${id}-img`);
        if (imgEl) {
          imgEl.classList.add('d-none');
        }
        
        return;
      }
      
      // Otherwise close all and open the clicked one
      services.forEach(service => {
        const content = document.getElementById(`ai-${service}-content`);
        const icon = document.getElementById(`ai-${service}-icon`);
        const img = document.getElementById(`ai-${service}-img`);
        
        if (content) content.classList.add('d-none');
        if (icon) {
          icon.classList.remove('bi-chevron-up');
          icon.classList.add('bi-chevron-down');
        }
        if (img) img.classList.add('d-none');
      });
      
      // Open the clicked menu
      contentEl.classList.remove('d-none');
      iconEl.classList.remove('bi-chevron-down');
      iconEl.classList.add('bi-chevron-up');
      
      // Show its image
      const imgEl = document.getElementById(`ai-${id}-img`);
      if (imgEl) {
        imgEl.classList.remove('d-none');
      }
    }
  });


  // Counter animation function
function animateCounter(elementId, targetValue, duration = 2000) {
    const counterElement = document.getElementById(elementId);
    if (!counterElement) return;
    
    let startValue = 0;
    let startTime = null;
    
    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Use easeOutExpo for smoother animation near the end
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      // Calculate current count value
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutExpo);
      
      // Update the element's text content
      counterElement.textContent = currentValue;
      
      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure the final value is set exactly
        counterElement.textContent = targetValue;
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
  
  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Animate all counters when they come into view
  function handleScrollAnimation() {
    const counterData = [
      { id: 'thirtyFive', value: 35 },
      { id: 'sixteenHundred', value: 1600 },
      { id: 'threeThousand', value: 3000 },
      { id: 'fiveHundred', value: 500 },
      { id: 'five', value: 5 }
    ];
    
    counterData.forEach(counter => {
      const element = document.getElementById(counter.id);
      if (element && isElementInViewport(element) && element.textContent === '0') {
        animateCounter(counter.id, counter.value);
      }
    });
  }
  
  // Initialize counters and scroll listener
  document.addEventListener('DOMContentLoaded', function() {
    // Initial check on page load
    handleScrollAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
  });

//   home page

// Clean carousel enhancement without visible controls
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carouselExampleSlidesOnly');
    
    // Initialize the carousel with custom options
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000,  // 5 seconds per slide for better readability
      pause: 'hover',  // Pause on hover
      wrap: true,      // Continuous looping
      keyboard: true,  // Allow keyboard navigation
      touch: true      // Enable swipe on touch devices
    });
    
    // Add smooth fade transitions
    carousel.classList.add('carousel-fade');
    document.querySelectorAll('.carousel-item').forEach(item => {
      item.classList.add('carousel-fade-item');
    });
    
    // Add button hover effects
    const readMoreButtons = document.querySelectorAll('.carousel-item .btn');
    readMoreButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.classList.remove('btn-outline-light');
        this.classList.add('btn-light', 'text-dark');
      });
      
      button.addEventListener('mouseleave', function() {
        this.classList.remove('btn-light', 'text-dark');
        this.classList.add('btn-outline-light');
      });
    });
  
    // Add subtle progress indicator at bottom (can be hidden with opacity: 0)
    const progressBarHTML = `
      <div class="carousel-progress-container position-absolute bottom-0 start-0 end-0">
        <div class="carousel-progress-bar"></div>
      </div>
    `;
    carousel.insertAdjacentHTML('beforeend', progressBarHTML);
    
    const progressBar = carousel.querySelector('.carousel-progress-bar');
    
    // Reset and animate progress bar on slide change
    carousel.addEventListener('slide.bs.carousel', function() {
      resetProgressBar();
      animateProgressBar();
    });
    
    function resetProgressBar() {
      progressBar.style.width = '0%';
      progressBar.style.transition = 'none';
    }
    
    function animateProgressBar() {
      setTimeout(() => {
        progressBar.style.transition = `width ${bsCarousel._config.interval}ms linear`;
        progressBar.style.width = '100%';
      }, 50);
    }
    
    // Start progress bar animation
    animateProgressBar();
  
    // Preload images for smoother transitions
    const preloadImages = () => {
      const carouselItems = carousel.querySelectorAll('.carousel-item');
      const slideImages = Array.from(carouselItems).map(item => {
        const carousel = item.querySelector('.custom-carousel-item');
        if (carousel) {
          const style = window.getComputedStyle(carousel);
          return style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        }
        return null;
      }).filter(Boolean);
      
      slideImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    // Preload images after a short delay
    setTimeout(preloadImages, 1000);
  });
  
  // Add this CSS to your stylesheet
  const carouselStyles = `
  .carousel-fade .carousel-item {
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  
  .carousel-fade .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-progress-container {
    height: 2px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 15;
  }
  
  .carousel-progress-bar {
    height: 100%;
    width: 0;
    background-color: rgba(255, 255, 255, 0.4);
  }
  
  .carousel-item .btn {
    transition: all 0.3s ease;
  }
  
  .custom-carousel-item {
    background-position: center;
    background-size: cover;
    height: 70vh;
    position: relative;
  }
  
  .custom-carousel-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
  }
  
  .custom-carousel-item > div {
    position: relative;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    .custom-carousel-item {
      height: 50vh;
    }
  }
  `;
  
  // You'll need to add this to your stylesheet
  console.log("Please add the following CSS to your stylesheet:", carouselStyles);





  // press and media

