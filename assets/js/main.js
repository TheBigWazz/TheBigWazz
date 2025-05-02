// Main JavaScript file for TheBigWazz.github.io

document.addEventListener('DOMContentLoaded', () => {
    // Initialize any necessary functionality
    initSmoothScroll();
    initMobileNavToggle();
    highlightCurrentPage();
    initProjectFilters();
});

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile navigation toggle - for future responsive improvements
function initMobileNavToggle() {
    // This is a placeholder for future mobile navigation functionality
    // You can expand this when adding a mobile menu toggle button
    
    // Example implementation:
    // const menuToggle = document.querySelector('.mobile-menu-toggle');
    // const navMenu = document.querySelector('nav ul');
    // 
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', () => {
    //         navMenu.classList.toggle('show');
    //         menuToggle.classList.toggle('active');
    //     });
    // }
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Default to index.html if no page is specified
    const activePage = currentPage || 'index.html';
    
    // Find the nav link that corresponds to the current page
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Project filtering functionality for the projects page
function initProjectFilters() {
    // This is a placeholder for future project filtering functionality
    // You can implement this when adding filter buttons to the projects page
    
    // Example implementation:
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // const projectCards = document.querySelectorAll('.project-card');
    // 
    // if (filterButtons.length && projectCards.length) {
    //     filterButtons.forEach(button => {
    //         button.addEventListener('click', () => {
    //             const filter = button.getAttribute('data-filter');
    //             
    //             // Remove active class from all buttons
    //             filterButtons.forEach(btn => btn.classList.remove('active'));
    //             
    //             // Add active class to clicked button
    //             button.classList.add('active');
    //             
    //             // Show/hide projects based on filter
    //             projectCards.forEach(card => {
    //                 if (filter === 'all' || card.classList.contains(filter)) {
    //                     card.style.display = 'block';
    //                 } else {
    //                     card.style.display = 'none';
    //                 }
    //             });
    //         });
    //     });
    // }
}

// Add a simple animation for project cards
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .update-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    });
}

// Initialize animations when scrolling
window.addEventListener('scroll', () => {
    animateOnScroll();
});
