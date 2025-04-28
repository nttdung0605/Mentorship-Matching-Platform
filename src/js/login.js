document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save logged-in user info in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        location.href = '/index.html'; // Redirect to main page
    } else {
        alert('Invalid email or password.');
    }
});