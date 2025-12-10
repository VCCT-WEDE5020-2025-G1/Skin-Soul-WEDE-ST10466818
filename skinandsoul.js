/**
         * Displays a toast notification with the given message.
         * @param {string} message The message to display.
         */
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            
            // Hide the toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        document.addEventListener('DOMContentLoaded', () => {

            const navbar = document.getElementById('navigation');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const hamburgerIcon = document.getElementById('hamburgerIcon');
            const closeIcon = document.getElementById('closeIcon');
            const contactForm = document.getElementById('contactForm');

            // 1. Mobile Menu Toggle
            mobileMenuBtn.addEventListener('click', () => {
                const isActive = mobileMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');

                if (isActive) {
                    hamburgerIcon.style.display = 'none';
                    closeIcon.style.display = 'inline';
                } else {
                    hamburgerIcon.style.display = 'inline';
                    closeIcon.style.display = 'none';
                }
            });

            // 2. Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // 3. Contact Form Submission Handler 
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Simulate form submission success
                    const name = document.getElementById('name').value;
                    
                    showToast(`Thank you, ${name}! Your enquiry has been sent. Jonese will be in touch soon.`);
                    // Clear the form fields
                    contactForm.reset();
                });
            };
        });
