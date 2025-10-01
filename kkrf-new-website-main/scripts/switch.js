function switchTab(tab) {
    const arTab = document.getElementById("arTab");
    const vrTab = document.getElementById("vrTab");
    const arContent = document.getElementById("arContent");
    const vrContent = document.getElementById("vrContent");

    if (tab === "ar") {
        arTab.classList.add("arvr-custom-active-tab");
        arTab.classList.remove("arvr-custom-inactive-tab");
        vrTab.classList.add("arvr-custom-inactive-tab");
        vrTab.classList.remove("arvr-custom-active-tab");
        arContent.classList.remove("d-none");
        vrContent.classList.add("d-none");
    } else {
        vrTab.classList.add("arvr-custom-active-tab");
        vrTab.classList.remove("arvr-custom-inactive-tab");
        arTab.classList.add("arvr-custom-inactive-tab");
        arTab.classList.remove("arvr-custom-active-tab");
        vrContent.classList.remove("d-none");
        arContent.classList.add("d-none");
    }
}



// Additional script to enhance carousel behavior
document.addEventListener('DOMContentLoaded', function() {
    // Initialize both carousels with custom options
    const desktopCarousel = document.getElementById('carouselDesktop');
    if (desktopCarousel) {
      new bootstrap.Carousel(desktopCarousel, {
        interval: 5000,
        wrap: true,
        keyboard: true
      });
    }
    
    const mobileCarousel = document.getElementById('carouselMobile');
    if (mobileCarousel) {
      new bootstrap.Carousel(mobileCarousel, {
        interval: 4000,
        wrap: true,
        touch: true,
        keyboard: true
      });
    }
    
    // For mobile: show a loading indicator as images load
    if (window.innerWidth < 768) {
      const cards = document.querySelectorAll('#carouselMobile .scroll-card');
      cards.forEach(card => {
        // Add fade-in effect to each card
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
          card.style.opacity = '1';
        }, 300);
      });
    }
    
    // Handle swipe gestures for mobile
    const touchSurface = document.getElementById('carouselMobile');
    if (touchSurface) {
      let startX = 0;
      let endX = 0;
      
      touchSurface.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
      }, false);
      
      touchSurface.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
      }, false);
      
      function handleSwipe() {
        // Detect left or right swipe
        const threshold = 50; // Minimum distance for swipe
        const swipeDistance = endX - startX;
        
        if (Math.abs(swipeDistance) >= threshold) {
          if (swipeDistance > 0) {
            // Swiped right - go to previous
            bootstrap.Carousel.getInstance(mobileCarousel).prev();
          } else {
            // Swiped left - go to next
            bootstrap.Carousel.getInstance(mobileCarousel).next();
          }
        }
      }
    }
    
    // Adjust card heights to be equal in desktop view
    function equalizeCardHeights() {
      if (window.innerWidth >= 768) {
        const rows = document.querySelectorAll('#carouselDesktop .carousel-item .row');
        
        rows.forEach(row => {
          const cards = row.querySelectorAll('.scroll-card');
          let maxHeight = 0;
          
          // Reset heights first
          cards.forEach(card => {
            card.style.height = 'auto';
          });
          
          // Find the tallest card
          cards.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
          });
          
          // Set all cards to the tallest height
          if (maxHeight > 0) {
            cards.forEach(card => {
              card.style.height = maxHeight + 'px';
            });
          }
        });
      }
    }
    
    // Fix for mobile indicators (sometimes they don't appear correctly)
    function adjustMobileIndicators() {
      if (window.innerWidth < 768) {
        const indicatorsContainer = document.querySelector('#carouselMobile .carousel-indicators');
        if (indicatorsContainer) {
          indicatorsContainer.style.position = 'relative';
          indicatorsContainer.style.marginTop = '20px';
        }
      }
    }
    
    // Run on load and resize
    equalizeCardHeights();
    adjustMobileIndicators();
    window.addEventListener('resize', function() {
      equalizeCardHeights();
      adjustMobileIndicators();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Get all tech category tabs
    const techCategories = document.querySelectorAll('.tech-category');
    
    // Get all tech tools content sections
    const techToolsContents = document.querySelectorAll('.tech-tools-content');
    
    // Add click event to each tech category
    techCategories.forEach(category => {
      category.addEventListener('click', function() {
        // Remove active class from all categories
        techCategories.forEach(cat => {
          if (cat.classList.contains('blue-accent') && !this.classList.contains('blue-accent')) {
            cat.classList.remove('blue-accent');
          }
          cat.classList.remove('active');
        });
        
        // Add active class to clicked category
        this.classList.add('active');
        
        // If it's the "Analytics and Payments" tab, add blue-accent class
        if (this.getAttribute('data-category') === 'analytics') {
          this.classList.add('blue-accent');
        }
        
        // Get data category value
        const categoryValue = this.getAttribute('data-category');
        
        // Hide all tech tools content
        techToolsContents.forEach(content => content.classList.remove('active'));
        
        // Show the relevant tech tools content
        document.getElementById(`${categoryValue}-tools`).classList.add('active');
      });
    });
  });


  // blog

  document.addEventListener('DOMContentLoaded', function() {
    // Get all pagination items
    const paginationItems = document.querySelectorAll('.dark-theme-blog-pagination-item');
    
    // Get all blog pages
    const blogPages = document.querySelectorAll('.dark-theme-blog-page');
    
    // Add click event listeners to each pagination item
    paginationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the target page id from the data-page attribute
            const targetPageId = this.getAttribute('data-page');
            
            // If it's the "Next" button
            if (this.classList.contains('next')) {
                // Find the currently active page
                const activeItem = document.querySelector('.dark-theme-blog-pagination-item.active');
                const currentIndex = Array.from(paginationItems).indexOf(activeItem);
                
                // Calculate the next index (excluding the "Next" button)
                const nextIndex = (currentIndex + 1) % (paginationItems.length - 1);
                
                // Get the next pagination item
                const nextItem = paginationItems[nextIndex];
                
                // Simulate a click on the next item
                if (nextItem) {
                    nextItem.click();
                }
                
                return;
            }
            
            // Hide all pages
            blogPages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the target page
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Update active state on pagination items
            paginationItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to the clicked item
            this.classList.add('active');
            
            // Scroll to the top of the blog section
            const blogMain = document.querySelector('.dark-theme-blog-main');
            if (blogMain) {
                blogMain.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        // Right arrow key for next page
        if (event.key === 'ArrowRight') {
            const nextButton = document.querySelector('.dark-theme-blog-pagination-item.next');
            if (nextButton) {
                nextButton.click();
            }
        }
        
        // Left arrow key for previous page
        if (event.key === 'ArrowLeft') {
            const activeItem = document.querySelector('.dark-theme-blog-pagination-item.active');
            const currentIndex = Array.from(paginationItems).indexOf(activeItem);
            
            // Calculate the previous index (excluding the "Next" button)
            const totalPageItems = paginationItems.length - 1; // Exclude the "Next" button
            const prevIndex = (currentIndex - 1 + totalPageItems) % totalPageItems;
            
            // Get the previous pagination item
            const prevItem = paginationItems[prevIndex];
            
            // Simulate a click on the previous item
            if (prevItem) {
                prevItem.click();
            }
        }
    });
    
    // Optional: URL hash navigation
    function checkHashAndNavigate() {
        const hash = window.location.hash;
        if (hash) {
            const pageNumber = hash.replace('#page-', '');
            const pageItem = document.querySelector(`.dark-theme-blog-pagination-item[data-page="page-${pageNumber}"]`);
            if (pageItem) {
                pageItem.click();
            }
        }
    }
    
    // Check for hash on page load
    checkHashAndNavigate();
    
    // Listen for hash changes
    window.addEventListener('hashchange', checkHashAndNavigate);
});