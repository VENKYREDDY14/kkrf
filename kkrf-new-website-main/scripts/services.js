document.addEventListener("DOMContentLoaded", function () {
  const erpSection = document.getElementById("erpServices");
  const cardsWrapper = document.getElementById("cardsWrapper");

  let isScrolling = false;
  let currentScrollPosition = 0;
  let targetScrollPosition = 0;
  let maxScrollWidth = 0;
  let lastScrollTop = 0;
  let isMobile = window.innerWidth <= 768;
  let reachedEnd = false;
  let reachedStart = true; // Track if we are at the first card
  const smoothingFactor = isMobile ? 0.15 : 0.10;

  // Update the maximum scrollable width
  function updateMaxScrollWidth() {
    maxScrollWidth = cardsWrapper.scrollWidth - cardsWrapper.clientWidth;
    targetScrollPosition = Math.min(targetScrollPosition, maxScrollWidth);
    currentScrollPosition = Math.min(currentScrollPosition, maxScrollWidth);
  }

  // Update scrolling based on page scroll
  function updateScrollPosition() {
    const rect = erpSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.top < viewportHeight && rect.bottom > 0) {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollDirection = currentScrollTop > lastScrollTop ? 1 : -1;
      lastScrollTop = currentScrollTop;

      // Only update horizontal scroll position when scrolling down and not at end
      if (scrollDirection > 0 && !reachedEnd) {
        // Scroll right while going down
        targetScrollPosition = Math.min(maxScrollWidth, targetScrollPosition + 5);
      }
      // Removed auto-scrolling left when scrolling up

      // Check if we've reached the end or start
      checkScrollLimits();
    }
  }

  // Check if we've reached scroll limits
  function checkScrollLimits() {
    // If at max width, allow normal vertical scrolling
    if (targetScrollPosition >= maxScrollWidth - 5) {
      reachedEnd = true;
    } else {
      reachedEnd = false;
    }

    // If at start, allow normal vertical scrolling
    if (targetScrollPosition <= 5) {
      reachedStart = true;
    } else {
      reachedStart = false;
    }
  }

  function smoothScroll() {
    if (!isScrolling) return;

    updateScrollPosition();
    const delta = targetScrollPosition - currentScrollPosition;
    currentScrollPosition += delta * smoothingFactor;

    cardsWrapper.style.transform = `translateX(-${Math.round(currentScrollPosition)}px)`;

    // Continue animation if we're still scrolling horizontally
    if (Math.abs(delta) > 0.5) {
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling = false;
    }
  }

  function checkVisibility() {
    const rect = erpSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !isScrolling) {
      isScrolling = true;
      smoothScroll();
    }
  }

  // Mouse wheel scrolling - completely disable vertical scrolling when in middle of cards
  cardsWrapper.addEventListener(
    "wheel",
    function (e) {
      // If we're in the middle (not at start or end), prevent all vertical scrolling
      if (!reachedEnd && !reachedStart) {
        e.preventDefault();
        targetScrollPosition = Math.max(0, Math.min(maxScrollWidth, targetScrollPosition + e.deltaY * 0.5));
        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      }
      // Otherwise, handle horizontal scrolling when appropriate
      else if (e.deltaY > 0 && !reachedEnd) {
        // Scrolling down and not at the end yet
        e.preventDefault();
        targetScrollPosition = Math.min(maxScrollWidth, targetScrollPosition + e.deltaY * 0.5);
        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      } else if (e.deltaY < 0 && !reachedStart) {
        // Scrolling up and not at the start yet
        e.preventDefault();
        targetScrollPosition = Math.max(0, targetScrollPosition + e.deltaY * 0.5);
        if (!isScrolling) {
          isScrolling = true;
          smoothScroll();
        }
      }
      // If we're at the end/start, don't preventDefault so vertical scroll works

      checkScrollLimits();
    },
    { passive: false }
  );

  // Touch controls for mobile - modified to allow vertical scroll at limits
  let isTouching = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let lastTouchX = 0;
  let isHorizontalSwipe = false;

  cardsWrapper.addEventListener("touchstart", function (e) {
    isTouching = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    lastTouchX = touchStartX;
    isScrolling = false;
    isHorizontalSwipe = false; // Reset on new touch
  });

  cardsWrapper.addEventListener("touchmove", function (e) {
    if (!isTouching) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = lastTouchX - currentX;
    const deltaY = touchStartY - currentY;

    // If in middle of cards, prevent all vertical scrolling
    if (!reachedEnd && !reachedStart) {
      e.preventDefault();
      
      lastTouchX = currentX;
      targetScrollPosition = Math.max(0, Math.min(maxScrollWidth, targetScrollPosition + deltaX));
      currentScrollPosition += (targetScrollPosition - currentScrollPosition) * 0.3;
      cardsWrapper.style.transform = `translateX(-${Math.round(currentScrollPosition)}px)`;
    }
    // Otherwise, determine if this is primarily a horizontal swipe
    else {
      if (!isHorizontalSwipe && Math.abs(deltaX) > Math.abs(deltaY)) {
        isHorizontalSwipe = true;
      }

      if (isHorizontalSwipe) {
        // Only handle horizontal scrolling if we're not at the limits
        // or if we're moving in the right direction to return from a limit
        if ((deltaX > 0 && !reachedEnd) || (deltaX < 0 && !reachedStart)) {
          e.preventDefault();
          lastTouchX = currentX;
          targetScrollPosition = Math.max(0, Math.min(maxScrollWidth, targetScrollPosition + deltaX));
          currentScrollPosition += (targetScrollPosition - currentScrollPosition) * 0.3;
          cardsWrapper.style.transform = `translateX(-${Math.round(currentScrollPosition)}px)`;
        }
      }
    }
    
    checkScrollLimits();
  });

  cardsWrapper.addEventListener("touchend", function () {
    isTouching = false;
    checkVisibility();
  });

  // Window resize handling
  window.addEventListener("resize", function () {
    isMobile = window.innerWidth <= 768;
    updateMaxScrollWidth();
    checkScrollLimits();
    checkVisibility();
  });

  // Page scroll event to update horizontal scrolling
  window.addEventListener("scroll", function() {
    if (!isScrolling) {
      isScrolling = true;
      smoothScroll();
    }
  });

  // Initialize
  updateMaxScrollWidth();
  checkScrollLimits();
  checkVisibility();
});


document.addEventListener("DOMContentLoaded", function() {
  // Initialize Swiper
  const logoSwiper = new Swiper(".mobile-carousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Handle page visibility changes
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible' && window.innerWidth <= 768) {
      if (logoSwiper && logoSwiper.autoplay) {
        logoSwiper.autoplay.start();
      }
    } else if (document.visibilityState === 'hidden') {
      if (logoSwiper && logoSwiper.autoplay) {
        logoSwiper.autoplay.stop();
      }
    }
  });
});



document.querySelectorAll('.hexagon-header').forEach(header => {
  header.addEventListener('click', () => {
      const faqItem = header.closest('.faq-hexagon');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-hexagon').forEach(item => {
          if (item !== faqItem) {
              item.classList.remove('active');
          }
      });
      
      // Toggle current FAQ item
      faqItem.classList.toggle('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('productFeaturesSlider');
  const prevButton = document.getElementById('productFeaturesPrev');
  const nextButton = document.getElementById('productFeaturesNext');
  
  // Variables for drag functionality
  let isDragging = false;
  let startX;
  let scrollLeft;
  
  // Responsive card width based on screen size
  function getCardWidth() {
    if (window.innerWidth <= 480) {
      return slider.querySelector('.product-feature-card').offsetWidth + 20; // Include gap
    } else {
      return 320; // Default card width + gap
    }
  }
  
  // Scroll to next feature
  nextButton.addEventListener('click', function() {
    slider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });
  
  // Scroll to previous feature
  prevButton.addEventListener('click', function() {
    slider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });
  
  // Update arrow visibility based on scroll position
  function updateArrows() {
    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    
    // Show/hide previous arrow
    prevButton.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
    prevButton.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';
    
    // Show/hide next arrow
    nextButton.style.opacity = scrollLeft >= maxScroll ? '0.5' : '1';
    nextButton.style.pointerEvents = scrollLeft >= maxScroll ? 'none' : 'auto';
  }
  
  // Listen for scroll events
  slider.addEventListener('scroll', updateArrows);
  
  // Handle window resize
  window.addEventListener('resize', function() {
    updateArrows();
  });
  
  // Handle keyboard navigation
  slider.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      slider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      slider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    }
  });
  
  // For touch devices: Enable swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  slider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - show next
      slider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - show previous
      slider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    }
  }
  
  // DRAG FUNCTIONALITY
  // Mouse down event to start dragging
  slider.addEventListener('mousedown', function(e) {
    isDragging = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    
    // Prevent default behavior to avoid text selection during drag
    e.preventDefault();
  });
  
  // Mouse leave and mouse up events to stop dragging
  slider.addEventListener('mouseleave', function() {
    isDragging = false;
    slider.classList.remove('dragging');
  });
  
  document.addEventListener('mouseup', function() {
    isDragging = false;
    slider.classList.remove('dragging');
  });
  
  // Mouse move event to perform dragging
  slider.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    slider.scrollLeft = scrollLeft - walk;
    
    updateArrows();
  });
  
  // Make slider focusable for keyboard navigation
  slider.setAttribute('tabindex', '0');
  
  // Prevent click events during drag
  slider.addEventListener('click', function(e) {
    if (slider.classList.contains('dragging')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
  
  // Add CSS class for cursor styling
  slider.style.cursor = 'grab';
  
  // Initialize arrow visibility
  updateArrows();
});


document.addEventListener('DOMContentLoaded', function() {
  // Make sure the carousel is initialized
  const carousel = new bootstrap.Carousel(document.getElementById('desktopCarousel'));
  
  // Get all indicator buttons
  const indicators = document.querySelectorAll('[data-bs-target="#desktopCarousel"]');
  
  // Add click event listeners to each indicator
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      // Remove active class from all indicators
      indicators.forEach(ind => {
        ind.classList.remove('active');
        ind.removeAttribute('aria-current');
      });
      
      // Add active class to clicked indicator
      this.classList.add('active');
      this.setAttribute('aria-current', 'true');
      
      // Slide to the corresponding slide
      carousel.to(index);
    });
  });
  
  // Also listen for the carousel's own slide event
  document.getElementById('desktopCarousel').addEventListener('slide.bs.carousel', function(event) {
    // Update indicators when carousel changes slides
    indicators.forEach((indicator, index) => {
      if (index === event.to) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.classList.remove('active');
        indicator.removeAttribute('aria-current');
      }
    });
  });
});