// Wait for DOM to fully load before running scripts
ocument.addEventListener('DOMContentLoaded', function() {
    try {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
         // Form submission handling
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                try {
                    // Get form data
                    const formData = {
                        name: this.querySelector('input[type="text"]')?.value || '',
                        email: this.querySelector('input[type="email"]')?.value || '',
                        course: this.querySelector('select')?.value || '',
                        message: this.querySelector('textarea')?.value || ''
                    };
                    
                    // Here you would typically send the data to a server
                    console.log('Form submitted:', formData);
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                } catch (error) {
                    console.error('Error in form submission:', error);
                }
            });
        }
         // Dropdown menu animation
        document.querySelectorAll('.nav-bottom li').forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                item.addEventListener('mouseenter', function() {
                    submenu.style.display = 'block';
                    setTimeout(() => {
                        submenu.style.opacity = '1';
                    }, 10);
                });
                
                item.addEventListener('mouseleave', function() {
                    submenu.style.opacity = '0';
                    setTimeout(() => {
                        submenu.style.display = 'none';
                    }, 200);
                });
            }
        });
         // Course card hover effect
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
         // Create and add scroll-to-top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '↑';
        scrollButton.className = 'scroll-to-top';
        document.body.appendChild(scrollButton);
         // Handle scroll events for scroll-to-top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
         scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
     } catch (error) {
        console.error('Error initializing scripts:', error);
    }
});
