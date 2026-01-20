/* --- Mock Data --- */
const destinationsData = [
    { id: 1, name: "Goa", type: "India", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2", desc: "Sun, sand, and spices." },
    { id: 2, name: "Manali", type: "India", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23", desc: "Snow-capped mountains." },
    { id: 3, name: "Paris", type: "International", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", desc: "City of Love." },
<<<<<<< HEAD
    { id: 4, name: "Dubai", type: "International", img: "https://3brotherstourism.com/wp-content/uploads/2025/06/Top-10-Must-Visit-Dubai-Attractions-for-First-Timers-scaled.webp", desc: "Luxury and skyscrapers." },
=======
    { id: 4, name: "Dubai", type: "International", img: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605", desc: "Luxury and skyscrapers." },
>>>>>>> 86cc1b07719237ed34b0dd11e7c90edc8ab24937
    { id: 5, name: "Kerala", type: "India", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944", desc: "God's own country." },
    { id: 6, name: "Bali", type: "International", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", desc: "Tropical paradise." }
];

const hotelsData = [
    { id: 1, name: "Grand Hyatt", location: "Goa", price: 150, rating: 5, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    { id: 2, name: "Mountain View", location: "Manali", price: 50, rating: 3, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd" },
    { id: 3, name: "Eiffel Stay", location: "Paris", price: 200, rating: 4, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" }
];

const packagesData = [
    { id: 1, name: "Himalayan Trek", type: "Adventure", price: 300, duration: "5 Days", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
    { id: 2, name: "Scuba Diving", type: "Adventure", price: 150, duration: "1 Day", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5" },
    { id: 3, name: "Spa Retreat", type: "Relaxation", price: 200, duration: "3 Days", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef" }
];

/* --- DOM Elements & Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dark Mode Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Determine current page and load specific logic
    const path = window.location.pathname;

    if (path.includes('destinations.html')) {
        initDestinations();
    } else if (path.includes('hotels.html')) {
        initHotels();
    } else if (path.includes('packages.html')) {
        initPackages();
    } else if (path.includes('booking.html')) {
        initBooking();
    }
});

/* --- Destinations Logic --- */
function initDestinations() {
    const container = document.getElementById('destinations-grid');
    const searchInput = document.getElementById('search-dest');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function render(data) {
        container.innerHTML = data.map((dest, index) => `
            <div class="card" style="animation: fadeIn 0.5s ease forwards ${index * 0.1}s; opacity: 0;">
                <img src="${dest.img}" alt="${dest.name}">
                <div class="card-content">
                    <h3 class="card-title">${dest.name}</h3>
                    <p class="card-desc">${dest.desc}</p>
                    <a href="hotels.html" class="btn btn-primary">View Hotels</a>
                </div>
            </div>
        `).join('');
    }

    // Initial Render
    render(destinationsData);

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = destinationsData.filter(d => d.name.toLowerCase().includes(term));
        render(filtered);
    });

    // Filter Functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            
            const type = btn.dataset.filter;
            if (type === 'all') render(destinationsData);
            else render(destinationsData.filter(d => d.type === type));
        });
    });
}

/* --- Hotels Logic --- */
function initHotels() {
    const container = document.getElementById('hotels-grid');
    
    // Simple render for demo
    container.innerHTML = hotelsData.map((hotel, index) => `
        <div class="card" style="animation: fadeIn 0.5s ease forwards ${index * 0.1}s; opacity: 0;">
            <img src="${hotel.img}" alt="${hotel.name}">
            <div class="card-content">
                <h3 class="card-title">${hotel.name}</h3>
                <span class="card-price">$${hotel.price} / night</span>
                <p>Rating: ${'⭐'.repeat(hotel.rating)}</p>
                <button class="btn btn-primary" onclick="openBookingModal('${hotel.name}')">Book Hotel</button>
            </div>
        </div>
    `).join('');
}

/* --- Packages Logic --- */
function initPackages() {
    const container = document.getElementById('packages-grid');
    
    container.innerHTML = packagesData.map((pkg, index) => `
        <div class="card" style="animation: fadeIn 0.5s ease forwards ${index * 0.1}s; opacity: 0;">
            <img src="${pkg.img}" alt="${pkg.name}">
            <div class="card-content">
                <h3 class="card-title">${pkg.name}</h3>
                <span class="card-price">$${pkg.price}</span>
                <p>Duration: ${pkg.duration}</p>
                <button class="btn btn-primary" onclick="openBookingModal('${pkg.name}')">Book Package</button>
            </div>
        </div>
    `).join('');
}

/* --- Booking Logic --- */
function initBooking() {
    const form = document.getElementById('booking-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;
        
        // Basic Validation
        if(name.length < 3) {
            alert("Name must be at least 3 characters.");
            return;
        }
        if(!email.includes('@')) {
            alert("Please enter a valid email.");
            return;
        }

        // Success Message
        alert(`Thank you, ${name}! Your trip to ${destination} has been booked. Confirmation sent to ${email}.`);
        form.reset();
    });
}

/* --- Global Modal Logic --- */
function openBookingModal(itemName) {
    // In a real app, this would open a modal. 
    // For this demo, we redirect to booking page with a query param (optional enhancement)
    // or simply alert.
    const confirmAction = confirm(`Do you want to proceed to book ${itemName}?`);
    if(confirmAction) {
        window.location.href = "booking.html";
    }
}
