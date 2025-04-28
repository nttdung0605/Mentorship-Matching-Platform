// Function to toggle the dropdown menu visibility
function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Function to close the dropdown menu when clicking user icon
function toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function discoverAlert() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        loadDiscoveryPage()
    }
    else {
        alert("Please log in to access the discover page.");
    }
    
}