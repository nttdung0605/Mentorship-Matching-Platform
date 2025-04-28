// Profile page JavaScript
// Load user information from localStorage and display it
function loadUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Populate the profile info fields
    document.getElementById('user-name').textContent = userInfo.name || '';
    document.getElementById('user-mail').textContent = userInfo.mail || '';
    document.getElementById('user-phone').textContent = userInfo.phone || '';
    document.getElementById('user-role').textContent = userInfo.role || '';
    document.getElementById('user-skill').textContent = userInfo.skills || '';
    document.getElementById('user-interest').textContent = userInfo.interests || '';
    document.getElementById('bio-textarea').value = userInfo.bio || '';
}
// Call loadUserInfo when the page loads
document.addEventListener('DOMContentLoaded', loadUserInfo());

// Function to open the edit profile window
function editProfile() {
    const overlay = document.getElementById('overlay');
    const editWindow = document.getElementById('edit-window');

    // Get current profile information
    const name = document.getElementById('user-name').textContent;
    const mail = document.getElementById('user-mail').textContent;
    const phone = document.getElementById('user-phone').textContent;
    const role = document.getElementById('user-role').textContent;
    const skills = document.getElementById('user-skill').textContent;
    const interests = document.getElementById('user-interest').textContent;

    // Populate the edit window fields with the current information
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-mail').value = mail;
    document.getElementById('edit-phone').value = phone;
    document.getElementById('edit-role').value = role;
    document.getElementById('edit-skill').value = skills;
    document.getElementById('user-interest').textContent = interests;
    
    // Show the overlay and the edit window
    overlay.style.display = 'block';
    editWindow.style.display = 'block';
}

function closeEditWindow() {
    const overlay = document.getElementById('overlay');
    const editWindow = document.getElementById('edit-window');

    // Hide the overlay and the edit window
    overlay.style.display = 'none';
    editWindow.style.display = 'none';
}

// Function change bio
function editBio() {
    const bioTextarea = document.getElementById('bio-textarea');
    const editButton = document.getElementById('edit-bio-btn');
    const saveButton = document.getElementById('save-bio-btn');
    const cancelButton = document.getElementById('cancel-bio-btn');

    // Enable the textarea for editing
    bioTextarea.removeAttribute('readonly');

    // Hide the "Change" button and show "Save" and "Cancel" buttons
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
    cancelButton.style.display = 'inline-block';
}

function saveBio() {
    const bioTextarea = document.getElementById('bio-textarea');
    const editButton = document.getElementById('edit-bio-btn');
    const saveButton = document.getElementById('save-bio-btn');
    const cancelButton = document.getElementById('cancel-bio-btn');

    // Save the bio content
    const bioContent = bioTextarea.value;

    // Retrieve the existing userInfo from localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

    // Update the bio in userInfo
    userInfo.bio = bioContent;

    // Save the updated userInfo back to localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Disable the textarea
    bioTextarea.setAttribute('readonly', true);

    // Show the "Change" button and hide "Save" and "Cancel" buttons
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    cancelButton.style.display = 'none';
}

function cancelBio() {
    const bioTextarea = document.getElementById('bio-textarea');
    const editButton = document.getElementById('edit-bio-btn');
    const saveButton = document.getElementById('save-bio-btn');
    const cancelButton = document.getElementById('cancel-bio-btn');

    // Reset the textarea content (optional: reset to the last saved value)
    bioTextarea.value = ''; // Replace with the last saved value if needed

    // Disable the textarea
    bioTextarea.setAttribute('readonly', true);

    // Show the "Change" button and hide "Save" and "Cancel" buttons
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    cancelButton.style.display = 'none';
}

// Function to open the interest selector
function openInterestSelector() {
    const interestOverlay = document.getElementById('interest-overlay');
    const interestSelector = document.getElementById('interest-selector');

    // Show the overlay and the interest selector
    interestOverlay.style.display = 'block';
    interestSelector.style.display = 'block';
}

function closeInterestSelector() {
    const interestOverlay = document.getElementById('interest-overlay');
    const interestSelector = document.getElementById('interest-selector');

    // Hide the overlay and the interest selector
    interestOverlay.style.display = 'none';
    interestSelector.style.display = 'none';
}

function toggleInterest(button) {
    // Toggle the selected state of the button
    if (button.classList.contains('selected')) {
        button.classList.remove('selected'); // Deselect the button
    } else {
        button.classList.add('selected'); // Select the button
    }
}

function saveSelectedInterests() {
    const selectedButtons = document.querySelectorAll('.interest-btn.selected');
    const selectedInterests = Array.from(selectedButtons).map(button => button.dataset.value);

    // Display the selected interests in the user-interest span
    document.getElementById('user-interest').textContent = selectedInterests.join(', ');

    // Hide the interest selector
    closeInterestSelector();
}


// Function to save changes made in the edit window
function saveChanges() {
    // Get updated values from the edit window inputs
    const name = document.getElementById('edit-name').value;
    const mail = document.getElementById('edit-mail').value;
    const phone = document.getElementById('edit-phone').value;
    const role = document.getElementById('edit-role').value;
    const skills = document.getElementById('edit-skill').value;
    const interests = document.getElementById('user-interest').textContent; 

    // Save the updated information to localStorage
    const userInfo = { name, mail, phone, role, skills, interests };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Update the profile info section
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-mail').textContent = mail;
    document.getElementById('user-phone').textContent = phone;
    document.getElementById('user-role').textContent = role;
    document.getElementById('user-skill').textContent = skills;

    // Hide the edit window and overlay
    closeEditWindow();
}

function cancelChanges() {
    // Simply close the edit window without saving changes
    closeEditWindow();
}
