document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Combine firstName and lastName into name
            const name = `${firstName} ${lastName}`;
            
            // Save user data in localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ firstName, lastName, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            // Save userInfo for profile display
            const userInfo = { name, mail: email, phone: '', role: '', skills: '', interests: '' , bio: ''};
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            alert('Signup successful! You can now log in.');
            location.href = '../pages/login.html'; // Redirect to login page
        });
    } else {
        console.error('Signup form not found in the DOM.');
    }
});