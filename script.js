/* --- Mock Data --- */
const destinationsData = [
    { id: 1, name: "Goa", type: "India", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80", desc: "Sun, sand, and spices." },
    { id: 2, name: "Manali", type: "India", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80", desc: "Snow-capped mountains." },
    { id: 3, name: "Paris", type: "International", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80", desc: "City of Love." },
    { id: 4, name: "Dubai", type: "International", img: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80", desc: "Luxury and skyscrapers." },
    { id: 5, name: "Kerala", type: "India", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80", desc: "God's own country." },
    { id: 6, name: "Bali", type: "International", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", desc: "Tropical paradise." },
    { id: 7, name: "Tokyo", type: "International", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80", desc: "Blending tradition and future." },
    { id: 8, name: "Santorini", type: "International", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", desc: "Stunning blue domes and sunsets." },
    { id: 9, name: "Rome", type: "International", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", desc: "Eternal city of history and pasta." }
];

const hotelsData = [
    { id: 1, name: "Grand Hyatt", location: "Goa", price: 150, rating: 5, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Mountain View", location: "Manali", price: 50, rating: 3, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Eiffel Stay", location: "Paris", price: 200, rating: 4, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Tokyo Sun", location: "Tokyo", price: 180, rating: 5, img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Caldera View", location: "Santorini", price: 300, rating: 5, img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Roma Suites", location: "Rome", price: 120, rating: 4, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" }
];

const packagesData = [
    { id: 1, name: "Himalayan Trek", type: "Adventure", price: 300, duration: "5 Days", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Scuba Diving", type: "Adventure", price: 150, duration: "1 Day", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Spa Retreat", type: "Relaxation", price: 200, duration: "3 Days", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Skydiving", type: "Adventure", price: 400, duration: "1 Day", img: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Mountain Biking", type: "Adventure", price: 120, duration: "2 Days", img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Desert Safari", type: "Adventure", price: 100, duration: "1 Day", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" }
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
