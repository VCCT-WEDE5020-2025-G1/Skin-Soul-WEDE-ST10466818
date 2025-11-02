// Pricing Data
const pricingData = [
    {
        category: 'Nails',
        treatments: [
            { name: 'Manicure', price: 'R130' },
            { name: 'Pedicure', price: 'R150' },
            { name: 'File & Paint', price: 'R70' }
        ]
    },
    {
        category: 'Massage',
        treatments: [
            { name: 'Swedish Full Body', price: 'R300' },
            { name: 'Swedish Back & Neck', price: 'R200' },
            { name: 'Hot Stone Full Body', price: 'R350' },
            { name: 'Hot Stone Back & Neck', price: 'R250' },
            { name: 'Indian Head Massage', price: 'R150' },
            { name: 'Head, Back & Neck', price: 'R250' },
            { name: 'Leg Massage', price: 'R200' }
        ]
    },
    {
        category: 'Facial',
        treatments: [
            { name: 'Cleansing Facial', price: 'R200' },
            { name: 'Back & Neck Exfoliation', price: 'R200' }
        ]
    },
    {
        category: 'Wax',
        treatments: [
            { name: 'Brow Shape', price: 'R70' },
            { name: 'Brow & Lip', price: 'R100' },
            { name: 'Brow, Lip, Chin', price: 'R120' },
            { name: 'Full Face', price: 'R140' },
            { name: 'Underarm', price: 'R90' },
            { name: 'Half Arm', price: 'R90' },
            { name: 'Full Arm', price: 'R150' },
            { name: 'Half Leg', price: 'R150' },
            { name: 'Full Leg', price: 'R200' },
            { name: 'Bikini', price: 'R100' },
            { name: 'Brazilian', price: 'R150' },
            { name: 'Back/Chest (from)', price: 'R200' }
        ]
    },
    {
        category: 'Tint',
        treatments: [
            { name: 'Brow Tint', price: 'R50' }
        ]
    }
];

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

//  Function for Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    }
}

// Render Pricing Cards
function renderPricingCards() {
    const pricingCardsContainer = document.getElementById('pricingCards');
    
    pricingData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        
        const header = document.createElement('div');
        header.className = 'pricing-card-header';
        
        const title = document.createElement('h3');
        title.className = 'pricing-card-title';
        title.textContent = category.category;
        header.appendChild(title);
        
        const content = document.createElement('div');
        content.className = 'pricing-card-content';
        
        const items = document.createElement('div');
        items.className = 'pricing-items';
        
        category.treatments.forEach(treatment => {
            const item = document.createElement('div');
            item.className = 'pricing-item';
            
            const name = document.createElement('div');
            name.className = 'pricing-item-name';
            name.textContent = treatment.name;
            
            const price = document.createElement('div');
            price.className = 'pricing-item-price';
            price.textContent = treatment.price;
            
            item.appendChild(name);
            item.appendChild(price);
            items.appendChild(item);
        });
        
        content.appendChild(items);
        card.appendChild(header);
        card.appendChild(content);
        pricingCardsContainer.appendChild(card);
    });
}