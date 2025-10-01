document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.biz-carousel-track');
    const cards = Array.from(document.querySelectorAll('.biz-card'));
    const nextBtn = document.querySelector('.biz-next-btn');
    const prevBtn = document.querySelector('.biz-prev-btn');
    const navDots = document.querySelector('.biz-carousel-nav');
    
    let cardWidth = cards[0].offsetWidth + 20; // card width + gap
    let cardsPerPage = Math.floor(track.offsetWidth / cardWidth);
    let currentSlide = 0;
    let totalSlides = Math.ceil(cards.length / cardsPerPage);
    
    // Create navigation dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('biz-carousel-dot');
        if (i === 0) dot.classList.add('biz-active');
        dot.dataset.slide = i;
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        navDots.appendChild(dot);
    }
    
    function updateDimensions() {
        // Get the actual card width including the gap
        const cardElement = cards[0];
        const cardStyle = window.getComputedStyle(cardElement);
        const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
        const cardMarginLeft = parseInt(cardStyle.marginLeft) || 0;
        
        cardWidth = cardElement.offsetWidth + cardMarginRight + cardMarginLeft + 20; // Adding the gap
        
        if (window.innerWidth >= 1200) {
            cardsPerPage = 3;
        } else if (window.innerWidth >= 768) {
            cardsPerPage = 2;
        } else {
            cardsPerPage = 1;
        }
        
        totalSlides = Math.ceil(cards.length / cardsPerPage);
        
        // Update navigation dots
        navDots.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('biz-carousel-dot');
            if (i === currentSlide) dot.classList.add('biz-active');
            dot.dataset.slide = i;
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            navDots.appendChild(dot);
        }
        
        // Ensure current slide is within bounds after resize
        if (currentSlide >= totalSlides) {
            currentSlide = totalSlides - 1;
            updateSlidePosition();
        }
    }
    
    function updateSlidePosition() {
        // Calculate the translate distance, accounting for the card width and gap
        const slideDistance = currentSlide * cardsPerPage * cardWidth;
        
        // Apply the transform with smooth easing
        track.style.transform = `translateX(-${slideDistance}px)`;
        
        // Update active dot
        document.querySelectorAll('.biz-carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('biz-active', index === currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlidePosition();
    }
    
    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlidePosition();
        } else {
            // Loop back to first slide
            currentSlide = 0;
            updateSlidePosition();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlidePosition();
        } else {
            // Loop to last slide
            currentSlide = totalSlides - 1;
            updateSlidePosition();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateDimensions();
        updateSlidePosition();
    });
    
    // Initial setup
    updateDimensions();
});
