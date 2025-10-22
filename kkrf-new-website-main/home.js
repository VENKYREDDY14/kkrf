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
       }, 25000);
 
       closeBtn.addEventListener("click", () => {
           popup.classList.remove("active");
       });
 
       popup.addEventListener("click", (e) => {
           if (e.target === popup) {
               popup.classList.remove("active");
           }
       });
 
 
 
   }
 
   // ===============================
 // Sidebar Hover for Services Section
 // ===============================
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
 
 // ===============================
 // Navbar Dropdown Hover Logic
 // ===============================
 const allDropdownItems = document.querySelectorAll(
   '.kkrf-main-new-navbar-services-dropdown, .kkrf-main-new-navbar-industries-dropdown, .kkrf-main-new-navbar-ourfirm-dropdown'
 );
 
 const dropdowns = [
   { 
     item: document.querySelector('.kkrf-main-new-navbar-services-dropdown'), 
     wrapper: document.querySelector('.kkrf-main-new-services-hover-wrapper'),
     link: document.querySelector('.kkrf-main-new-navbar-services-dropdown > a')
   },
   { 
     item: document.querySelector('.kkrf-main-new-navbar-industries-dropdown'), 
     wrapper: document.querySelector('.kkrf-main-new-industries-hover-wrapper'),
     link: document.querySelector('.kkrf-main-new-navbar-industries-dropdown > a')
   },
   { 
     item: document.querySelector('.kkrf-main-new-navbar-ourfirm-dropdown'), 
     wrapper: document.querySelector('.kkrf-main-new-ourfirm-hover-wrapper'),
     link: document.querySelector('.kkrf-main-new-navbar-ourfirm-dropdown > a')
   }
 ];
 
 // ===============================
 // Dropdown Open/Close Functions
 // ===============================
 const closeAllDropdowns = () => {
   allDropdownItems.forEach(item => item.classList.remove('is-active'));
   
   // Restore scroll when all dropdowns are closed
   document.body.style.overflow = '';
 };
 
 const openDropdown = (dropdown) => {
   closeAllDropdowns();
   dropdown.item.classList.add('is-active');
 
   // Disable background scroll while dropdown is active
   document.body.style.overflow = 'hidden';
 };
 
 // ===============================
 // Persistent Hover Logic
 // ===============================
 function applyPersistentHover(dropdown) {
   let hasBeenVisited = false;
 
   const handleOpen = () => openDropdown(dropdown);
   const handleClose = () => {
     dropdown.item.classList.remove('is-active');
     hasBeenVisited = false;
 
     // If no dropdown remains active, re-enable scrolling
     const anyActive = Array.from(allDropdownItems).some(item => item.classList.contains('is-active'));
     if (!anyActive) {
       document.body.style.overflow = '';
     }
   };
 
   dropdown.item.addEventListener('mouseenter', handleOpen);
   dropdown.wrapper.addEventListener('mouseenter', () => (hasBeenVisited = true));
   dropdown.wrapper.addEventListener('mouseleave', handleClose);
 
   dropdown.link.addEventListener('click', (e) => {
     if (dropdown.item.classList.contains('is-active')) {
       e.preventDefault();
       handleClose();
     }
   });
 }
 
 dropdowns.forEach(applyPersistentHover);
 
 
 
    // blogs-page increase and decrease page numbers
    const pageInput = document.querySelector(".kkrf-main-new-blogPage-pagination-input");
    const arrowUp = document.querySelector(".page-arrow.up");
    const arrowDown = document.querySelector(".page-arrow.down");
 
    if (pageInput && arrowUp && arrowDown) {
      const max = parseInt(pageInput.max);
      const min = parseInt(pageInput.min);
 
      // Increase page number
      arrowUp.addEventListener("click", () => {
        let current = parseInt(pageInput.value) || min;
        if (current < max) {
          pageInput.value = current + 1;
        }
      });
 
      // Decrease page number
      arrowDown.addEventListener("click", () => {
        let current = parseInt(pageInput.value) || min;
        if (current > min) {
          pageInput.value = current - 1;
        }
      });
 
      // Prevent invalid values (like negatives or above max)
      pageInput.addEventListener("input", () => {
        let value = parseInt(pageInput.value);
        if (value > max) pageInput.value = max;
        if (value < min) pageInput.value = min;
      });
    }
   
 
    //home page form popup - mobile
 
    const popupOverlay = document.querySelector('.kkr-main-new-hero-form-popup-overlay');
     const closeButn = document.querySelector('.kkr-main-new-hero-popup-close');
   
     // Only show on mobile (<= 576px)
     if (window.innerWidth <= 576) {
       setTimeout(() => {
         popupOverlay.style.display = 'flex';
         document.body.style.overflow = 'hidden'; // prevent background scroll
       }, 10000); // 10 seconds
     }
   
     // Close popup
     closeButn.addEventListener('click', () => {
       popupOverlay.style.display = 'none';
       document.body.style.overflow = ''; // re-enable scrolling
     });
 });
 
 // =============================
 // BLOCKCHAIN SERVICES SECTION
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsBC = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.bc");
   const contentBC = document.getElementById("service-content-bc");
   const serviceImageBC = document.getElementById("service-image-bc");
   const imageWrapperBC = serviceImageBC?.parentElement;
 
   const serviceDataBC = [
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
       text: "We design extremely safe, user-friendly bitcoin management solutions with multi-currency interoperability, real-time trading features, sophisticated authentication methods, and complete regulatory compliance. Our complete solutions promise effective management of digital assets, flawless exchanges, and safe storage.",
       image: "assets/images/mingcute_wallet-2-fill.png",
     },
     {
       title: "Layer-2 Development",
       text: "Our Layer-2 solutions specialize in improving current blockchain systems using cutting-edge scaling technologies that drastically increase transaction speeds and lower costs. We apply modern state channels, sidechains, and roll-up designs that preserve security while greatly improving overall network performance.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "Smart Contract Audit and Development",
       text: "Being a leading blockchain application and software development company, KKRF provides strategic roadmaps and expert advice as well as launching complex blockchain solutions. Whether expanding current systems or from the ground up, our seasoned blockchain developers offer strong, safe solutions exactly matched with your strategic corporate objectives.",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Asset Tokenization Platform Development",
       text: "As a leader in blockchain consultancy, we offer feature-rich tokenization technologies to convert conventional assets into digital tokens. Through the conversion of assets into tradable digital securities available across several blockchain markets, our enterprise-grade tokenization solutions help companies to open new financial possibilities.",
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
     },
   ];
 
   function showContentBC(index) {
     itemsBC.forEach((item) => item.classList.remove("active"));
     itemsBC[index].classList.add("active");
 
     contentBC.style.opacity = "0";
     imageWrapperBC.style.opacity = "0";
 
     setTimeout(() => {
       contentBC.innerHTML = `
         <h3>${serviceDataBC[index].title}</h3>
         <p>${serviceDataBC[index].text}</p>
       `;
       serviceImageBC.src = serviceDataBC[index].image;
 
       contentBC.style.opacity = "1";
       imageWrapperBC.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentBC = showContentBC;
 
   // Initialize first
   showContentBC(0);
 });
 
 
 // =============================
 // NFT SERVICES SECTION
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsNFT = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.nft");
   const contentNFT = document.getElementById("service-content-nft");
   const serviceImageNFT = document.getElementById("service-image-nft");
   const imageWrapperNFT = serviceImageNFT?.parentElement;
 
   const serviceDataNFT = [
     {
       title: "NFT Marketplace Design",
       text: "Our team designs and builds NFT marketplace platforms that are user-centric. We follow the right standards (ERC-721 and ERC-1155) for the creation of IPFS protocols and smart contracts where the users can smoothly trade and create NFTs.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "NFT Development",
       text: "We create customized NFT solutions across various blockchains including Ethereum, Binance Smart Chain, Solana, and Polygon. Our team handles everything from token creation to deployment, ensuring your NFTs meet the highest standards of quality and security.",
       image: "assets/images/icon-park-solid_blockchain.png",
     },
     {
       title: "NFT Smart Contract Development and Audit",
       text: "Our expert developers create secure, optimized smart contracts that power your NFT marketplace. We conduct thorough audits to identify vulnerabilities and ensure your smart contracts are secure, gas-efficient, and fully compliant with blockchain standards.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "NFT Marketplace Support and Maintenance",
       text: "We provide comprehensive post-launch support and maintenance services for your NFT marketplace. Our team handles regular updates, performance optimization, security monitoring, and rapid issue resolution to keep your platform running smoothly.",
       image: "assets/images/mingcute_wallet-2-fill.png",
     },
     {
       title: "NFT Marketplace Integration",
       text: "We seamlessly integrate NFT capabilities into your existing platforms and applications. Our solutions connect with wallets, payment gateways, and other essential services to create a cohesive ecosystem for minting, buying, and selling digital assets.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "Digital Asset Tokenization",
       text: "We transform real-world assets into digital tokens through our advanced tokenization services. Our solutions enable businesses to represent artwork, real estate, collectibles, and other valuable assets as NFTs, opening up new markets and investment opportunities.",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Multi-Chain NFT Solutions",
       text: "We build cross-chain NFT platforms that operate across multiple blockchain networks. Our multi-chain solutions provide flexibility, lower gas fees, and expanded market reach by allowing users to interact with NFTs on various popular blockchains.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "Metaverse NFT Development",
       text: "We create immersive NFT experiences for metaverse environments. Our solutions enable the creation, display, and trading of 3D assets, virtual land, wearables, and other digital items that can be integrated into various metaverse platforms and virtual worlds.",
       image: "assets/images/ant-design_code-filled (1).png",
     },
     {
       title: "White-Label NFT Marketplace",
       text: "We provide ready-to-launch white-label NFT marketplace solutions that can be customized with your branding and specific requirements. These cost-effective platforms allow you to enter the NFT market quickly with a professional, feature-rich marketplace.",
       image: "assets/images/hugeicons_blockchain-03.png",
     },
   ];
 
   function showContentNFT(index) {
     itemsNFT.forEach((item) => item.classList.remove("active"));
     itemsNFT[index].classList.add("active");
 
     contentNFT.style.opacity = "0";
     imageWrapperNFT.style.opacity = "0";
 
     setTimeout(() => {
       contentNFT.innerHTML = `
         <h3>${serviceDataNFT[index].title}</h3>
         <p>${serviceDataNFT[index].text}</p>
       `;
       serviceImageNFT.src = serviceDataNFT[index].image;
 
       contentNFT.style.opacity = "1";
       imageWrapperNFT.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentNFT = showContentNFT;
 
   // Initialize first
   showContentNFT(0);
 });
 
   // =============================
 // DAPP SERVICES SECTION
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsDAPP = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.dapp");
   const contentDAPP = document.getElementById("service-content-dapp");
   const serviceImageDAPP = document.getElementById("service-image-dapp");
   const imageWrapperDAPP = serviceImageDAPP?.parentElement;
 
   const serviceDataDAPP = [
     {
       title: "Tokenization Platform",
       text: "As a pioneering dApp development services company, we offer you feature-rich tokenization solutions for blockchain asset digitization. With our enterprise-grade asset tokenization platform development services, we help businesses unlock new avenues of financial assets and make them tradeable across multiple digital platforms. Our expertise in tokenization empowers organizations to leverage blockchain technology for asset management and liquidity enhancement.",
       image: "assets/images/icon-park-solid_blockchain.png",
     },
     {
       title: "DAO Development",
       text: "Our team specializes in developing Decentralized Autonomous Organization (DAO) solutions that enable community-led governance and decision-making on the blockchain. We create robust DAO platforms with transparent voting mechanisms, proposal systems, and treasury management features to help organizations transition to decentralized governance models.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "DeFi Application Development",
       text: "We build advanced Decentralized Finance (DeFi) applications that revolutionize traditional financial services through blockchain technology. Our DeFi solutions include lending platforms, decentralized exchanges, yield farming applications, and staking services that provide users with secure, transparent, and efficient alternatives to conventional financial systems.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "NFT Marketplace Development",
       text: "Our team creates custom NFT marketplace platforms that enable the creation, buying, selling, and trading of unique digital assets. We implement advanced features such as auction systems, royalty mechanisms, and multi-chain support to deliver comprehensive NFT ecosystems that cater to various industries including art, gaming, and entertainment.",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Smart Contract Development",
       text: "We develop secure, efficient, and audited smart contracts that automate business processes and agreements on blockchain networks. Our smart contract development services include custom contract creation, security auditing, optimization for gas efficiency, and integration with existing systems to ensure reliable and cost-effective operation.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
   ];
 
   function showContentDAPP(index) {
     itemsDAPP.forEach((item) => item.classList.remove("active"));
     itemsDAPP[index].classList.add("active");
 
     contentDAPP.style.opacity = "0";
     imageWrapperDAPP.style.opacity = "0";
 
     setTimeout(() => {
       contentDAPP.innerHTML = `
         <h3>${serviceDataDAPP[index].title}</h3>
         <p>${serviceDataDAPP[index].text}</p>
       `;
       serviceImageDAPP.src = serviceDataDAPP[index].image;
 
       contentDAPP.style.opacity = "1";
       imageWrapperDAPP.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentDAPP = showContentDAPP;
 
   // Initialize first
   showContentDAPP(0);
 });
 
 
 // =============================
 // Android Development
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsAD = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.ad");
   const contentAD = document.getElementById("service-content-ad");
   const serviceImageAD = document.getElementById("service-image-ad");
   const imageWrapperAD = serviceImageAD?.parentElement;
 
   const serviceDataAD = [
     {
       title: "Android App Development Consultation",
       text: "Android applications, depending on the characteristics, are more suited for particular types of businesses. As a leading Android app development agency, we help businesses decide whether Android is a good fit for them and which tech stack best suits their needs.",
       image: "assets/images/icon-park-solid_blockchain.png",
     },
     {
       title: "Android UI/UX Design",
       text: "Our expert designers create intuitive, engaging, and visually appealing interfaces that align with Google's Material Design principles. We focus on creating seamless user experiences that enhance usability and drive user engagement while maintaining brand consistency across your Android application.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "Custom Android Application Development",
       text: "We develop tailored Android applications that perfectly match your business requirements and objectives. Our development team uses the latest Kotlin and Java programming techniques and Android frameworks to build high-performance, feature-rich applications that deliver exceptional user experiences on smartphones, tablets, and other Android devices.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "Android Software Testing",
       text: "Our comprehensive testing services ensure your Android applications meet the highest quality standards. We perform thorough functional, performance, compatibility, and security testing across different Android devices and versions to identify and resolve issues before deployment, ensuring a flawless user experience.",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Multi-platform Deployment",
       text: "We ensure seamless deployment of your Android applications across the Google ecosystem. Our deployment services include Google Play Store submission, compliance with Google's guidelines, version management, and continuous integration to keep your application updated with the latest Android features and security standards.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
   ];
 
   function showContentAD(index) {
     itemsAD.forEach((item) => item.classList.remove("active"));
     itemsAD[index].classList.add("active");
 
     contentAD.style.opacity = "0";
     imageWrapperAD.style.opacity = "0";
 
     setTimeout(() => {
       contentAD.innerHTML = `
         <h3>${serviceDataAD[index].title}</h3>
         <p>${serviceDataAD[index].text}</p>
       `;
       serviceImageAD.src = serviceDataAD[index].image;
 
       contentAD.style.opacity = "1";
       imageWrapperAD.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentAD = showContentAD;
 
   // Initialize first
   showContentAD(0);
 });
 
 
 // =============================
 //IOS Development
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsIOD = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.iod");
   const contentIOD = document.getElementById("service-content-iod");
   const serviceImageIOD = document.getElementById("service-image-iod");
   const imageWrapperIOD = serviceImageIOD?.parentElement;
 
   const serviceDataIOD = [
     {
       title: "iOS App Development Consultation",
       text: "iOS applications, depending on the characteristics, are more suited for particular types of businesses. As a leading iOS app development agency, we help businesses decide whether iOS is a good fit for them and which tech stack best suits their needs.",
       image: "assets/images/icon-park-solid_blockchain.png",
     },
     {
       title: "iOS UI/UX Design",
       text: "Our expert designers create intuitive, engaging, and visually appealing interfaces that align with Apple's design principles. We focus on creating seamless user experiences that enhance usability and drive user engagement while maintaining brand consistency across your iOS application.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "Custom iOS Application Development",
       text: "We develop tailored iOS applications that perfectly match your business requirements and objectives. Our development team uses the latest Swift programming techniques and iOS frameworks to build high-performance, feature-rich applications that deliver exceptional user experiences on iPhone and iPad devices.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "iOS Software Testing",
       text: "Our comprehensive testing services ensure your iOS applications meet the highest quality standards. We perform thorough functional, performance, compatibility, and security testing across different iOS devices and versions to identify and resolve issues before deployment, ensuring a flawless user experience.",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Multi-platform Deployment",
       text: " We ensure seamless deployment of your iOS applications across the Apple ecosystem. Our deployment services include App Store submission, compliance with Apple's guidelines, version management, and continuous integration to keep your application updated with the latest iOS features and security standards.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
   ];
 
   function showContentIOD(index) {
     itemsIOD.forEach((item) => item.classList.remove("active"));
     itemsIOD[index].classList.add("active");
 
     contentIOD.style.opacity = "0";
     imageWrapperIOD.style.opacity = "0";
 
     setTimeout(() => {
       contentIOD.innerHTML = `
         <h3>${serviceDataIOD[index].title}</h3>
         <p>${serviceDataIOD[index].text}</p>
       `;
       serviceImageIOD.src = serviceDataIOD[index].image;
 
       contentIOD.style.opacity = "1";
       imageWrapperIOD.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentIOD = showContentIOD;
 
   // Initialize first
   showContentIOD(0);
 });
 
 // =============================
 // BLOCKCHAIN SERVICES SECTION - AUSTIN
 // =============================
 document.addEventListener("DOMContentLoaded", () => {
   const itemsBCA = document.querySelectorAll(".kkrf-main-new-services-section-startup-item.bca");
   const contentBCA = document.getElementById("service-content-bca");
   const serviceImageBCA = document.getElementById("service-image-bca");
   const imageWrapperBCA = serviceImageBCA?.parentElement;
 
   const serviceDataBCA = [
     {
       title: "Blockchain Consulting and Strategy",
       text: "KKRF empowers businesses in Austin with tailored blockchain strategies that drive innovation, security, and growth. Our consultants work closely with you to identify opportunities, define clear objectives, and design scalable solutions that fit your vision. From launching a new blockchain platform to enhancing an existing one, our team ensures your system is robust, future-ready, and perfectly aligned with your business goals.",
       image: "assets/images/icon-park-solid_blockchain.png",
     },
     {
       title: "dApps Development",
       text: "At KKRF, we design and develop decentralized applications that are secure, scalable, and built for real-world impact. Our Austin-based team brings deep expertise in creating sophisticated dApps for diverse industries, ensuring each solution is tailored to deliver maximum value. From concept to deployment, we craft applications that give businesses a competitive advantage in the evolving blockchain landscape.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "Smart Contract Audit and Development",
       text: "KKRF helps businesses in Austin ensure the integrity, security, and efficiency of their smart contracts. Our expert auditors thoroughly review code to detect vulnerabilities, verify compliance with best practices, and strengthen overall reliability. With clear, transparent audit reports and actionable recommendations, we empower you to launch and maintain smart contracts with complete confidence.",
       image: "assets/images/mingcute_wallet-2-fill.png",
     },
     {
       title: "Ethereum Development",
       text: "KKRF provides tailored Ethereum development services in Austin, enabling businesses to build secure smart contracts and decentralized applications that meet specific goals. Our expertise in Ethereum-compatible programming languages ensures scalable, future-ready solutions that drive innovation and efficiency in your business processes.",
       image: "assets/images/material-symbols_code-blocks-rounded.png",
     },
     {
       title: "Layer-2 Development",
       text: "KKRF delivers advanced Layer-2 blockchain solutions in Austin, enhancing scalability and performance by building efficient secondary protocols on top of existing blockchains. Leveraging technologies like Polygon, we develop robust applications such as blockchain wallets, smart contracts, and NFT marketplaces — all designed for speed, security, and seamless user experience",
       image: "assets/images/icon-park-solid_audit.png",
     },
     {
       title: "Permissioned blockchain networks",
       text: "KKRF creates and builds custom permissioned blockchain networks in Austin, giving businesses complete control over who can access them and what they can do. Our custom solutions improve privacy, scalability, and operational efficiency, making them perfect for business-critical applications in a wide range of fields. We build enterprise-grade blockchain technologies that are safe and fast, and that people can trust and will last for a long time.",
       image: "assets/images/fluent_code-block-24-filled.png",
     },
     {
       title: "Private and Public Blockchain Development",
       text: "KKRF makes safe, high-performance blockchain solutions that are made just for your business needs. Our team can help you with either a permissioned private blockchain for your internal operations or a public blockchain for decentralized apps. We offer solutions that are both new and dependable. We know a lot about Ethereum, Hyperledger, Solana, and other popular blockchain networks, so we can make sure your project uses the proper technology.",
       image: "assets/images/ant-design_code-filled (1).png",
     },
     {
       title: "Asset Tokenization Platform Development",
       text: "KKRF gives businesses the tools they need to turn real-world assets into safe, blockchain-based digital tokens. Our asset tokenization solutions let people own parts of assets, make them easier to sell, and move them without any trouble, all while following all the rules set by the world's financial authorities. We design systems that are secure, scalable, and valuable over time, from planning to deployment.",
       image: "assets/images/hugeicons_blockchain-03.png",
     },
     {
       title: "Enterprise Blockchain Development",
       text: "We at KKRF make corporate blockchain software that is scalable and secure. It makes business operations easier, increases transparency, and keeps data safe. Our full-stack blockchain development services help businesses make their supply chain management, finance, and governance more efficient. testing to uncover hidden patterns and correlations that drive better business outcomes and strategic decision-making.",
       image: "assets/images/ant-design_code-filled (1).png",
     },
     {
       title: "Solidity Development",
       text: "At KKRF, our blockchain experts help you leverage Solidity to develop secure and efficient Ethereum-based applications. From smart contracts to dApps, our Solidity development services ensure your projects are robust, scalable, and perfectly aligned with your strategic objectives.",
       image: "assets/images/hugeicons_blockchain-03.png",
     },
   ];
 
   function showContentBCA(index) {
     itemsBCA.forEach((item) => item.classList.remove("active"));
     itemsBCA[index].classList.add("active");
 
     contentBCA.style.opacity = "0";
     imageWrapperBCA.style.opacity = "0";
 
     setTimeout(() => {
       contentBCA.innerHTML = `
         <h3>${serviceDataBCA[index].title}</h3>
         <p>${serviceDataBCA[index].text}</p>
       `;
       serviceImageBCA.src = serviceDataBCA[index].image;
 
       contentBCA.style.opacity = "1";
       imageWrapperBCA.style.opacity = "1";
     }, 300);
   }
 
   // Expose to global scope for inline onclick handlers
   window.showContentBCA = showContentBCA;
 
   // Initialize first
   showContentBCA(0);
 });
 
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
 
 // =============== iOS Mobile Accordion ===============
document.addEventListener("DOMContentLoaded", function () {
  const iodCards = document.querySelectorAll(".iod-card");

  iodCards.forEach((card) => {
    const header = card.querySelector(".kkrf-main-new-services-block-section-mobile-header");
    const toggleImg = card.querySelector(".kkrf-main-new-services-block-section-mobile-card-toggle img");

    header.addEventListener("click", () => {
      // Close all other cards
      iodCards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("active");
          const img = c.querySelector(".kkrf-main-new-services-block-section-mobile-card-toggle img");
          if (img) img.src = "assets/images/ic_round-plus.png";
        }
      });

      // Toggle current card
      card.classList.toggle("active");
      if (toggleImg) {
        toggleImg.src = card.classList.contains("active")
          ? "assets/images/remove.png"
          : "assets/images/ic_round-plus.png";
      }
    });
  });
});

 
 
 
   // =============== Android Mobile Accordion ===============
document.addEventListener("DOMContentLoaded", function () {
  const adCards = document.querySelectorAll(".ad-card");

  adCards.forEach((card) => {
    const header = card.querySelector(".kkrf-main-new-services-block-section-mobile-header");
    const toggleImg = card.querySelector(".kkrf-main-new-services-block-section-mobile-card-toggle img");

    header.addEventListener("click", () => {
      // Close all other cards
      adCards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("active");
          const img = c.querySelector(".kkrf-main-new-services-block-section-mobile-card-toggle img");
          if (img) img.src = "assets/images/ic_round-plus.png";
        }
      });

      // Toggle current card
      card.classList.toggle("active");
      if (toggleImg) {
        toggleImg.src = card.classList.contains("active")
          ? "assets/images/remove.png"
          : "assets/images/ic_round-plus.png";
      }
    });
  });
});

 
 // =============== Blockchain Mobile Accordion ===============
 document.addEventListener("DOMContentLoaded", function () {
   const bcCards = document.querySelectorAll('.bc-card');
 
   bcCards.forEach(card => {
     const header = card.querySelector('.kkrf-main-new-services-block-section-mobile-header');
     const toggleImg = card.querySelector('.kkrf-main-new-services-block-section-mobile-card-toggle img');
 
     header.addEventListener('click', () => {
       bcCards.forEach(c => {
         if (c !== card) {
           c.classList.remove('active');
           const img = c.querySelector('.kkrf-main-new-services-block-section-mobile-card-toggle img');
           if (img) img.src = "assets/images/ic_round-plus.png";
         }
       });
 
       card.classList.toggle('active');
       if (toggleImg) {
         toggleImg.src = card.classList.contains('active')
           ? "assets/images/remove.png"
           : "assets/images/ic_round-plus.png";
       }
     });
   });
 });
 
 
 
 // Services - Why Choose KKRF - Mobile
 
 
   const featureItems = document.querySelectorAll('.kkrf-main-new-services-mobile-why-feature-item');
   const contentItems = document.querySelectorAll('.kkrf-main-new-services-mobile-why-content-item');
 
   featureItems.forEach(item => {
     item.addEventListener('click', () => {
       // Remove active class from all
       featureItems.forEach(f => f.classList.remove('active'));
       contentItems.forEach(c => c.classList.remove('active'));
 
       // Add active to clicked feature
       item.classList.add('active');
       const targetId = item.getAttribute('data-target');
       document.getElementById(targetId).classList.add('active');
     });
   });
 
   document.addEventListener("DOMContentLoaded", () => {
    const featureItems = document.querySelectorAll(".kkrf-main-new-services-mobile-why-feature-item");
    
    featureItems.forEach(item => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);

        // Remove 'active' class from all feature items
        featureItems.forEach(f => f.classList.remove("active"));

        // Add 'active' to clicked item
        item.classList.add("active");

        // Hide all content items
        document.querySelectorAll(".kkrf-main-new-services-mobile-why-content-item")
          .forEach(content => content.classList.remove("active"));

        // Show the matching content by ID
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  });
 
 //faq
 
 const faqItemsList = document.querySelectorAll(".kkrf-main-new-services-faq-section-item");
 
 
 
 faqItemsList.forEach((item) => {
   const question = item.querySelector(".kkrf-main-new-services-faq-section-question");
   const icon = item.querySelector(".kkrf-main-new-services-faq-section-icon");
 
   
   icon.src = "assets/images/faq-plus-img.png";
 
   question.addEventListener("click", () => {
     
     item.classList.toggle("active");
 
     
     if (item.classList.contains("active")) {
       icon.src = "assets/images/faq-remove-img.png"; 
     } else {
       icon.src = "assets/images/faq-plus-img.png"; 
     }
   });
 });
 
 
 


 

 document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".kkrf-main-new-services-reviews-section-cards");
  const prevBtn = document.getElementById("kkrfPrevBtn");
  const nextBtn = document.getElementById("kkrfNextBtn");

  let currentIndex = 0;
  let cardWidth = 370; 
  if (window.innerWidth <= 576) {
    cardWidth = 320; // 
  }
    const totalCards = document.querySelectorAll(".kkrf-main-new-services-reviews-section-card").length;
  const visibleCards = 3;

  // Function to update slider position
  function updateSlide() {
    cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Function to handle active button styling
  function setActiveButton(activeBtn) {
    [prevBtn, nextBtn].forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  // Next button logic
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0; // loop back to start
    }
    updateSlide();
    setActiveButton(nextBtn);
  });

  // Previous button logic
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalCards - visibleCards; // loop to end
    }
    updateSlide();
    setActiveButton(prevBtn);
  });
});



// Carousel - MAD

document.addEventListener('DOMContentLoaded', function() {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('kkrfNewMainMobileApplicationSuitePrevBtn');
  const nextBtn = document.getElementById('kkrfNewMainMobileApplicationSuiteNextBtn');
  
  let currentIndex = 0;
  const totalSlides = slides.length;

  
  function updateCarousel() {

    const offset = -currentIndex * 100; 
    carouselWrapper.style.transform = `translateX(${offset}%)`;
    updateNavigationButtons();
  }

  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel();
  }

 
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel();
  }

  function updateNavigationButtons() {
  }



  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  updateCarousel();
});