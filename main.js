function scrollToSection(sectionId, closeMenu = false) {
            const element = document.getElementById(sectionId);
            if (element) {
                // Adjust scroll position to account for fixed navbar height
                const navbarHeight = document.getElementById('navigation').offsetHeight;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: elementPosition - navbarHeight - 20, // 20px extra padding
                    behavior: 'smooth'
                });
            }

            if (closeMenu) {
                const mobileMenu = document.getElementById('mobileMenu');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                const hamburgerIcon = document.getElementById('hamburgerIcon');
                const closeIcon = document.getElementById('closeIcon');

                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                hamburgerIcon.style.display = 'inline';
                closeIcon.style.display = 'none';
            }
        }

        /**
         * Displays a toast notification with the given message.
         * @param {string} message The message to display.
         */
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // --- Event Listeners and Setup ---

        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('navigation');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
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
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simulate form submission success
                const name = document.getElementById('name').value;
                
                showToast(`Thank you, ${name}! Your enquiry has been sent. Jonese will be in touch soon.`);
                
                // Clear the form fields
                contactForm.reset();
            });
        });
