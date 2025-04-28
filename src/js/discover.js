function searchName() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase(); // Get the search input value in lowercase
    const userCards = document.querySelectorAll('.user-info-1, .user-info-2'); // Select all user cards

    userCards.forEach(card => {
        const userName = card.querySelector('.user-name').textContent.toLowerCase(); // Get the user's name in lowercase
        if (userName.includes(searchValue)) {
            card.style.display = 'block'; // Show the card if it matches the search
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}

function filterBoxOpen() {
    const filterBox = document.querySelector('.filter-box');
    if (filterBox.style.display === 'none' || filterBox.style.display === '') {
        filterBox.style.display = 'flex'; // Show the filter box
    } else {
        filterBox.style.display = 'none'; // Hide the filter box if it's already visible
    }
}

function filterBoxClose() {
    const filterBox = document.querySelector('.filter-box');
    filterBox.style.display = 'none'; // Hide the filter box
}

function applyFilters() {
    const roleFilter = document.getElementById('filter-select').value.toLowerCase(); // Get selected role
    const interestFilter = Array.from(document.getElementById('interest-filter').selectedOptions).map(option => option.value.toLowerCase()); // Get selected interests

    const userCards = document.querySelectorAll('.user-info-1, .user-info-2'); // Select all user cards

    userCards.forEach(card => {
        const userRole = card.querySelector('.user-role').textContent.toLowerCase().replace('role: ', '').trim(); // Get the user's role
        const userInterests = card.querySelector('.user-interests').textContent.toLowerCase(); // Get the user's interests

        // Check if the card matches the selected role and interests
        const matchesRole = roleFilter === 'all' || userRole === roleFilter;
        const matchesInterests = interestFilter.length === 0 || interestFilter.some(interest => userInterests.includes(interest));

        if (matchesRole && matchesInterests) {
            card.style.display = 'block'; // Show the card if it matches the filters
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}
