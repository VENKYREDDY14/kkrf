document.addEventListener("DOMContentLoaded", function () {
 /*home-nav*/ 
const kkrfMainNewHomepageMobileMenu = document.getElementById('kkrfMainNewHomepageMobileMenu');
const kkrfMainNewHomepageMobileMenuOpen = document.getElementById('kkrfMainNewHomepageMobileMenuOpen');
const kkrfMainNewHomepageMobileMenuClose = document.getElementById('kkrfMainNewHomepageMobileMenuClose');

// Add null checks to prevent errors if elements don't exist
if (kkrfMainNewHomepageMobileMenuOpen && kkrfMainNewHomepageMobileMenu) {
    kkrfMainNewHomepageMobileMenuOpen.addEventListener('click', () => {
        kkrfMainNewHomepageMobileMenu.classList.add('active');
    });
}

if (kkrfMainNewHomepageMobileMenuClose && kkrfMainNewHomepageMobileMenu) {
    kkrfMainNewHomepageMobileMenuClose.addEventListener('click', () => {
        kkrfMainNewHomepageMobileMenu.classList.remove('active');
    });
}
  /*JavaScript for Carousel */
  const carousel = document.getElementById('kkr-main-new-carousel');
  
  // Make moveCarousel function available globally if needed elsewhere
  window.moveCarousel = function(direction) {
      if (!carousel) return; // Safety check
      
      const cardElement = carousel.querySelector('.kkr-main-new-card');
      if (!cardElement) return; // Safety check
      
      const cardWidth = cardElement.offsetWidth + 20; // Card + gap
      let scrollAmount = parseInt(carousel.dataset.scrollAmount || '0');
      scrollAmount += direction * cardWidth;

      const maxScroll = carousel.scrollWidth - carousel.offsetWidth;

      if (scrollAmount < 0) scrollAmount = 0;
      if (scrollAmount > maxScroll) scrollAmount = maxScroll;

      carousel.style.transform = `translateX(-${scrollAmount}px)`;
      carousel.dataset.scrollAmount = scrollAmount; // Store scroll position
  }

  /*Popup */
  const popup = document.getElementById("kkrfPopup");
  const closeBtn = document.getElementById("kkrfCloseBtn");
  let popupShown = false;

  if (popup && closeBtn) {
      setTimeout(function() {
          if (!popupShown && window.innerWidth >= 992) {
              popup.classList.add("active");
              popupShown = true;
          }
      }, 1000);

      closeBtn.addEventListener("click", () => {
          popup.classList.remove("active");
      });

      popup.addEventListener("click", (e) => {
          if (e.target === popup) {
              popup.classList.remove("active");
          }
      });
  }

   // Existing script for sidebar hover
   const menuItems = document.querySelectorAll('.kkrf-main-new-services-hover-section-sidebar ul li');
   const sections = document.querySelectorAll('.kkrf-main-new-services-hover-section-content');
 
   menuItems.forEach(item => {
     item.addEventListener('mouseover', () => {
       menuItems.forEach(i => i.classList.remove('active'));
       item.classList.add('active');
 
       const target = item.getAttribute('data-target');
       sections.forEach(sec => {
         sec.classList.remove('active');
         if (sec.id === target) {
           sec.classList.add('active');
         }
       });
     });
   });

   
});


//services start up container

const items = document.querySelectorAll(
    ".kkrf-main-new-services-section-startup-item"
  );
  const content = document.getElementById("service-content");
  const serviceImage = document.getElementById("service-image");

  const serviceData = [
    {
      title: "Blockchain Consulting and Strategy",
      text: "Being a leading blockchain application and software development company, KKRF provides strategic roadmaps and expert advice as well as launching complex blockchain solutions. Whether expanding current systems or from the ground up, our seasoned blockchain developers offer strong, safe solutions exactly matched with your strategic corporate objectives.",
      image: "assets/images/icon-park-solid_blockchain.png",
    },
    {
      title: "dApps Development",
      text: "Our specialist distributed application products enable companies with creative blockchain-based ideas. We design transparent, safe dApps that operate outside of central authority to enable direct peer-to-peer contacts and include smart contract features catered for various industry uses.",
      image: "assets/images/fluent_code-block-24-filled.png",
    },
    {
      title: "Cryptocurrency Wallet and Exchange Development",
      text: "We design extremely safe, user-friendly bitcoin management solutions with multi-currency interoperability, real-time trading features, sophisticated authentication methods, complete regulatory compliance. Our complete solutions promise effective management of digital assets, flawless exchanges, and safe storage.",
      image: "assets/images/mingcute_wallet-2-fill.png",
    },
    {
      title: "Layer-2 Development",
      text: "Our Layer-2 solutions specialize on improving current blockchain systems using cutting-edge scaling technologies that drastically increase transaction speeds and lower costs. We apply modern state channels, sidechains, and roll-up designs that preserve security while greatly improving general network performance.",
      image: "assets/images/material-symbols_code-blocks-rounded.png",
    },
    {
      title: "Smart Contract Audit and Development",
      text: "Being a leading blockchain application and software development company, KKRF provides strategic roadmaps and expert advice as well as launching complex blockchain solutions. Whether expanding current systems or from the ground up, our seasoned blockchain developers offer strong, safe solutions exactly matched with your strategic corporate objectives.",
      image: "assets/images/icon-park-solid_audit.png",
    },
    {
      title: "Asset Tokenization Platform Development",
      text: "As a leader in blockchain consultancy, we offer feature-rich tokenization technologies to convert conventional assets into digital tokens. Through the conversion of assets into tradable digital securities available across several blockchain markets, our enterprise-grade tokenization solutions help companies to open new financial possibilities.",
      image: "assets/images/fluent_code-block-24-filled.png",
    },
    {
      title: "ICO Development",
      text: "From token engineering and smart contract production to platform design and marketing strategy execution, our all-inclusive ICO development services cover the whole process. Through successful, compliant token sale campaigns that satisfy all legal criteria, we help both new businesses and existing companies.",
      image: "assets/images/ant-design_code-filled (1).png",
    },
    {
      title: "Solidity Development",
      text: "For Ethereum and similar blockchain systems, our dedicated Solidity development team generates painstakingly perfect, incredibly safe smart contracts. Throughout the development process, we apply industry-leading best practices to guarantee best efficiency, strong security mechanisms, and optimum gas economy.",
      image: "assets/images/hugeicons_blockchain-03.png",
    }
  ];

  function showContent(index) {
    items.forEach((item) => item.classList.remove("active"));
    items[index].classList.add("active");

    content.innerHTML = `
        <h3>${serviceData[index].title}</h3>
        <p>${serviceData[index].text}</p>
    `;

    serviceImage.src = serviceData[index].image;
  }

  // Set initial content and image on page load
  showContent(0);
   

// services - why choose us
(function () {
  const items = document.querySelectorAll('.kkrf-main-new-services-section-why-choose__item');
  const panes = document.querySelectorAll('.kkrf-main-new-services-section-why-choose__pane');
  function activateItem(item) {
    // deactivate all
    items.forEach(i => {
      i.classList.remove('kkrf-main-new-services-section-why-choose__item--active');
      i.setAttribute('aria-pressed', 'false');
    
    });
    panes.forEach(p => p.classList.add('kkrf-main-new-services-section-why-choose__pane--hidden'));
    // activate
    item.classList.add('kkrf-main-new-services-section-why-choose__item--active');
    item.setAttribute('aria-pressed', 'true');
    const targetId = item.dataset.target;
    const pane = document.getElementById(targetId);
    if (pane) pane.classList.remove('kkrf-main-new-services-section-why-choose__pane--hidden');
  }
  items.forEach(it => {
    it.addEventListener('click', () => activateItem(it));
    it.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        activateItem(it);
      }
    });
  });
  // initial active (first item found with active class)
  const initial = document.querySelector('.kkrf-main-new-services-section-why-choose__item--active') || items[0];
  if (initial) activateItem(initial);
})();


// carousel innovation section
const slider = document.querySelector('.kkrf-main-new-services-scetion-innovation-slider');
const cards = document.querySelectorAll('.kkrf-main-new-services-scetion-innovation-card');
const leftBtn = document.querySelector('.kkrf-main-new-services-scetion-innovation-arrow.left');
const rightBtn = document.querySelector('.kkrf-main-new-services-scetion-innovation-arrow.right');

function setActiveCard() {
  const sliderRect = slider.getBoundingClientRect();
  const sliderCenter = sliderRect.left + sliderRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(sliderCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) closestCard.classList.add('active');
}

// Scroll arrows
const cardWidth = 360 + 60; // width + gap
rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Active card detection
slider.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});
window.addEventListener('load', setActiveCard);
window.addEventListener('resize', setActiveCard);