document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.htec-nav-item');
    const dropdowns = document.querySelectorAll('.htec-dropdown-menu');
    
    // Hide all dropdowns initially
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
    
    // Add hover functionality to each nav item
    navItems.forEach(item => {
        const dropdown = item.querySelector('.htec-dropdown-menu');
        
        // Show dropdown on mouseenter
        item.addEventListener('mouseenter', () => {
            // Hide all dropdowns
            dropdowns.forEach(d => {
                d.style.display = 'none';
            });
            
            // Show this dropdown
            if (dropdown) {
                dropdown.style.display = 'block';
            }
            
            // Update active state
            navItems.forEach(i => i.classList.remove('htec-active'));
            item.classList.add('htec-active');
        });
        
        // Add event listeners to the dropdown if it exists
        if (dropdown) {
            // Keep dropdown open when hovering over it
            dropdown.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block';
                navItems.forEach(i => i.classList.remove('htec-active'));
                item.classList.add('htec-active');
            });
            
            // Hide dropdown when mouse leaves it (unless hovering over nav item)
            dropdown.addEventListener('mouseleave', () => {
                // Small delay to check if mouse moved to the nav item
                setTimeout(() => {
                    if (!item.matches(':hover') && !dropdown.matches(':hover')) {
                        dropdown.style.display = 'none';
                        item.classList.remove('htec-active');
                    }
                }, 50);
            });
        }
    });
    
    // Set default active state
    navItems[0].classList.add('htec-active');
});

// Function to close all dropdowns
function closeAllDropdowns() {
  const dropdowns = [
    document.getElementById("dropdown-menu"),
    document.getElementById("dropdown-menu1"),
    document.getElementById("dropdown-menu2")
  ];
  dropdowns.forEach(dropdown => dropdown.classList.add("hidden"));
}

// Desktop Dropdown Menu
const dropdownBtns = [
  { btn: document.getElementById("dropdown-btn"), menu: document.getElementById("dropdown-menu") },
  { btn: document.getElementById("dropdown-btn1"), menu: document.getElementById("dropdown-menu1") },
  { btn: document.getElementById("dropdown-btn2"), menu: document.getElementById("dropdown-menu2") }
];

dropdownBtns.forEach(({ btn, menu }) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdowns();
    menu.classList.toggle("hidden");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  closeAllDropdowns();
});




document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuTrigger = document.getElementById('menuTrigger');
  const backBtn = document.getElementById('backBtn');
  const menuHeaderBackBtn = document.getElementById('menuHeaderBackBtn'); // New back button in the header
  const menuSections = document.querySelectorAll('.menu-section');
  const mainMenu = document.getElementById('mainMenu'); // Main menu section
  let navigationStack = [];

  // Open the menu
  menuTrigger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      updateHeaderBackBtnVisibility(); // Update visibility of the header back button
  });

  // Navigate to target menu section
  document.querySelectorAll('.menu-item[data-target]').forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              menuSections.forEach(section => section.classList.remove('active'));
              targetSection.classList.add('active');
              navigationStack.push(targetId);
              backBtn.classList.add('active');
              menuHeaderBackBtn.classList.add("hidden");
              updateHeaderBackBtnVisibility(); // Update visibility when navigating
          }
      });
  });

  // Existing back button functionality
  backBtn.addEventListener('click', () => {
      navigationStack.pop();

      // Determine which section to display
      const previousSection = navigationStack.length > 0
          ? document.getElementById(navigationStack[navigationStack.length - 1])
          : mainMenu;

      menuSections.forEach(section => section.classList.remove('active'));
      previousSection.classList.add('active');

      // Hide the back button if at the top level
      if (navigationStack.length === 0) {
          backBtn.classList.remove('active');
          menuHeaderBackBtn.classList.remove("hidden");
      }

      updateHeaderBackBtnVisibility(); // Update visibility on back navigation
  });

  // New functionality for menu-header back button
  menuHeaderBackBtn?.addEventListener('click', () => {
      closeMenu(); // Close the entire mobile menu
  });

  // Close menu function
  function closeMenu() {
      mobileMenu.classList.remove('active');
  }

  // Update visibility of the menuHeaderBackBtn
  function updateHeaderBackBtnVisibility() {
      if (navigationStack.length === 0) {
          // Show the header back button only if on the main menu
          menuHeaderBackBtn?.classList.add('active');
      } else {
          menuHeaderBackBtn?.classList.remove('active');
      }
  }

  // Reset menu to the initial state
  function resetMenu() {
      navigationStack = [];
      menuSections.forEach(section => section.classList.remove('active'));
      mainMenu.classList.add('active');
      backBtn.classList.remove('active');
      updateHeaderBackBtnVisibility(); // Ensure proper visibility
      closeMenu(); // Ensure the menu is closed
  }

  // Optionally, you can add a listener for an overlay click to close the menu
  document.getElementById('overlay')?.addEventListener('click', closeMenu);
});


document.addEventListener('DOMContentLoaded', function () {
    const tabMenu = document.getElementById('tabMenu1');
    const menuTrigger = document.getElementById('menuTriggerTab');
    const backBtn = document.getElementById('backBtn1');
    const closeBtn = document.getElementById('closeBtn1');
    const menuSections = document.querySelectorAll('.tabtab-menu-section');
    const mainMenu = document.getElementById('mainMenu1');
    
    let navigationStack = [];
    
    menuTrigger.addEventListener('click', () => {
        tabMenu.classList.add('tabtab-active');
        updateBackButton();
        tabMenu.style.width = '100vw'; // Set width to 100% of viewport
        document.body.style.overflow = 'hidden'; // Disable background scroll
    });
    
    closeBtn.addEventListener('click', () => {
        tabMenu.classList.remove('tabtab-active');
        resetMenu();
        tabMenu.style.width = '100vw'; // Reset width explicitly
        document.body.style.overflow = 'auto'; // Re-enable background scroll
    });
    
    document.querySelectorAll('.tabtab-menu-item[data-target]').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                menuSections.forEach(section => section.classList.remove('tabtab-active'));
                targetSection.classList.add('tabtab-active');
                navigationStack.push(targetId);
                updateBackButton();
                tabMenu.style.width = '100vw'; // Maintain consistent width
            }
        });
    });
    
    backBtn.addEventListener('click', () => {
        navigationStack.pop();
        const previousSection =
            navigationStack.length > 0
                ? document.getElementById(navigationStack[navigationStack.length - 1])
                : mainMenu;
        
        menuSections.forEach(section => section.classList.remove('tabtab-active'));
        previousSection.classList.add('tabtab-active');
        updateBackButton();
        tabMenu.style.width = '100vw'; // Maintain consistent width
    });
    
    function updateBackButton() {
        if (navigationStack.length > 0) {
            backBtn.classList.add('tabtab-active');
            closeBtn.classList.add('hidden');
        } else {
            backBtn.classList.remove('tabtab-active');
            closeBtn.classList.remove('hidden');
        }
    }
    
    function resetMenu() {
        navigationStack = [];
        menuSections.forEach(section => section.classList.remove('tabtab-active'));
        mainMenu.classList.add('tabtab-active');
        updateBackButton();
        tabMenu.style.width = '100vw'; // Reset width explicitly
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && tabMenu.classList.contains('tabtab-active')) {
            closeBtn.click(); // Trigger close button click event
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar menu items
    const sidebarItems = document.querySelectorAll('.htec-sidebar-item a');
    
    // Function to handle content change
    function changeContent(contentId) {
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected content section
        document.getElementById(contentId).style.display = 'grid';
        
        // Update active state for sidebar items
        document.querySelectorAll('.htec-sidebar-item').forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`.htec-sidebar-item a[data-content="${contentId}"]`);
        if (activeItem) {
            activeItem.parentElement.classList.add('active');
        }
    }
    
    // Add click event listener to each sidebar item
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the content ID from data attribute
            const contentId = this.getAttribute('data-content');
            changeContent(contentId);
        });
        
        // Add hover event listener to each sidebar item
        item.parentElement.addEventListener('mouseenter', function() {
            const contentId = this.querySelector('a').getAttribute('data-content');
            changeContent(contentId);
        });
    });
});





function toggleMenu(clickedElement) {
    // Only execute toggle functionality on mobile devices
    if (window.innerWidth <= 768) {
      const arrow = clickedElement.querySelector('span');
      const menuList = clickedElement.nextElementSibling;
      const isCurrentlyClosed = menuList.style.maxHeight === '0px' || menuList.style.maxHeight === '';
      
      // First, close all menus
      const allMenuHeaders = document.querySelectorAll('footer div[onclick]');
      allMenuHeaders.forEach(header => {
        const headerArrow = header.querySelector('span');
        const headerMenuList = header.nextElementSibling;
        
        // Reset all to closed state
        headerArrow.style.transform = 'rotate(0deg)';
        headerMenuList.style.maxHeight = '0px';
      });
      
      // If the clicked menu was closed, open it (otherwise it stays closed)
      if (isCurrentlyClosed) {
        arrow.style.transform = 'rotate(90deg)';
        menuList.style.maxHeight = '1000px';
      }
    } else {
      // On desktop devices, the menus should always be visible
      // This effectively makes the function do nothing on desktop
      return;
    }
  }
  
  // Additionally, you might want to initialize menus on page load/resize
  window.addEventListener('load', initMenus);
  window.addEventListener('resize', initMenus);
  
  function initMenus() {
    const allMenuHeaders = document.querySelectorAll('footer div[onclick]');
    const isMobile = window.innerWidth <= 768;
    
    allMenuHeaders.forEach(header => {
      const menuList = header.nextElementSibling;
      
      // On mobile, collapse all menus by default
      if (isMobile) {
        menuList.style.maxHeight = '0px';
      } else {
        // On desktop, ensure menus are always visible
        menuList.style.maxHeight = '1000px';
      }
    });
  }

  // Initialize menus as collapsed on mobile
  function initMenus() {
    if (window.innerWidth <= 768) {
      const menuHeaders = document.querySelectorAll('footer div[onclick]');
      menuHeaders.forEach(header => {
        const arrow = header.querySelector('span');
        const menuList = header.nextElementSibling;
        arrow.style.transform = 'rotate(0deg)';
        menuList.style.maxHeight = '0px';
      });
    }
  }

  // Run on page load
  window.addEventListener('load', initMenus);
  // Run on resize
  window.addEventListener('resize', initMenus);




  function showApplyForm() {
    document.getElementById('kkrf-apply-popup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function hideApplyForm() {
    document.getElementById('kkrf-apply-popup').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // File input display
  document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('resume');
    const fileLabel = document.querySelector('.kkrf-file-selected');
    
    if (fileInput) {
      fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
          fileLabel.textContent = this.files[0].name;
        } else {
          fileLabel.textContent = 'No file chosen';
        }
      });
    }
  });




  // bakground video

  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    
    // Force video to play even if page is not visible
    video.play();
    
    // Handle visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            // When tab is not visible
            video.play().catch(e => console.log('Play prevented:', e));
        } else {
            // When tab becomes visible again
            if (video.paused) {
                video.play().catch(e => console.log('Play prevented:', e));
            }
        }
    });
    
    // Handle page blur/focus events
    window.addEventListener('blur', function() {
        video.play().catch(e => console.log('Play prevented:', e));
    });
    
    window.addEventListener('focus', function() {
        if (video.paused) {
            video.play().catch(e => console.log('Play prevented:', e));
        }
    });
    
    // Prevent any automatic pausing
    setInterval(function() {
        if (video.paused) {
            video.play().catch(e => console.log('Play prevented:', e));
        }
    }, 1000);
});