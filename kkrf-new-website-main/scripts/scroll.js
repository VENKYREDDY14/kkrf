document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".arvr-card");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const containerHeight = windowHeight * 0.5; // Adjust height for smooth scroll effect.

    cards.forEach((card, index) => {
      const cardStart = index * containerHeight;
      const cardEnd = cardStart + containerHeight;

      if (scrollY >= cardStart && scrollY < cardEnd) {
        card.classList.add("visible");
        card.classList.remove("previous");
      } else if (scrollY >= cardEnd) {
        card.classList.add("previous");
        card.classList.remove("visible");
      } else {
        card.classList.remove("visible", "previous");
      }
    });
  });
});


let currentPage = 1;
  const totalPages = 2;
  
  function showPage(pageNum) {
    // Hide all tab content
    document.querySelectorAll('.kkrf-tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show the selected page content
    document.getElementById('page' + pageNum).classList.add('active');
    
    // Update active tab button
    document.querySelectorAll('.kkrf-tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById('tab' + pageNum).classList.add('active');
    
    // Update active page button
    document.querySelectorAll('.kkrf-page-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelectorAll('.kkrf-page-btn')[pageNum - 1].classList.add('active');
    
    currentPage = pageNum;
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  }
