const registerForm = document.getElementById('registerForm');

// Event listener for form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save user data to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration Successful! You can now log in.');

    // Redirect to login page
    window.location.href = 'login.html';
});

//Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Check and apply the saved mode on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.checked = isDarkMode;
});

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener('change', () => {
    const isDarkMode = darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Save the preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
});