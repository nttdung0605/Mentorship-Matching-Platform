// Fetch navbar.html and insert it into the body
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Dynamically load the navbar.js script after the navbar is loaded
        const script = document.createElement('script');
        script.src = 'js/navbar.js';
        document.body.appendChild(script);

        // Check if the user is logged in
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser) {
            // Show navbar-user and hide navbar-view
            document.getElementById('navbar-user').style.display = 'flex';
            document.getElementById('navbar-view').style.display = 'none';

            // Update the navbar with the user's name
            const userNameSpan = document.querySelector('.user-menu span.user-name');
            if (userNameSpan) {
                userNameSpan.textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
            }
        } else {
            // Show navbar-view and hide navbar-user
            document.getElementById('navbar-view').style.display = 'flex';
            document.getElementById('navbar-user').style.display = 'none';
        }
    })
    .catch(error => console.error('Error loading navbar:', error));

// Function to load profile.html into the container
function loadProfilePage() {
    fetch('components/profile.html')
        .then(response => response.text())
        .then(data => {
            // Dynamically load the profile.js script after the navbar is loaded
            const script = document.createElement('script');
            script.src = 'js/profile.js';
            document.body.appendChild(script);

            // Hide the banner
            const banner = document.querySelector('.banner');
            if (banner) {
                banner.style.display = 'none';
            }

            // Load profile.html content into the container
            const container = document.querySelector('.container');
            if (container) {
                container.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading profile page:', error));
}

// Function to load discover.html into the container
function loadDiscoveryPage() {
    fetch('components/discover.html')
        .then(response => response.text())
        .then(data => {
            // Dynamically load the discover.js script after the navbar is loaded
            const script = document.createElement('script');
            script.src = 'js/discover.js';
            document.body.appendChild(script);
            
            // Hide the banner
            const banner = document.querySelector('.banner');
            if (banner) {
                banner.style.display = 'none';
            }

            // Load discover.html content into the container
            const container = document.querySelector('.container');
            if (container) {
                container.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading discovery page:', error));
}

// Function logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Clear logged-in user
    alert('You have been logged out.');
    location.href = '/mainpage.html'; 
}