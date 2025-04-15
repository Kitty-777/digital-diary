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