const loginForm = document.getElementById('loginForm');

// Event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the saved ones
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'Diary.html'; // Redirect to the main diary page
    } else {
        alert('Invalid username or password. Please try again.');
    }
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
