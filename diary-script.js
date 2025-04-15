 // Check if the user is logged in
if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
}

// Get references to the form and entries container
const diaryForm = document.getElementById('diaryForm');
const entriesContainer = document.getElementById('entries');

// Load saved entries from localStorage on page load
document.addEventListener('DOMContentLoaded', loadEntries);

// Event listener for form submission
diaryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = diaryForm.elements[0].value;
    const content = diaryForm.elements[1].value;

    const entryData = { title, content };
    addEntry(entryData);

    saveEntry(entryData);
    diaryForm.reset();
});

// Function to create and display an entry
function addEntry(entryData) {
    const entry = document.createElement('div');
    entry.className = 'entry';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        entry.remove();
        deleteEntry(entryData);
    };

    entry.innerHTML = `<h3>${entryData.title}</h3><p>${entryData.content}</p>`;
    entry.appendChild(deleteButton);
    entriesContainer.appendChild(entry);
}

// Function to save an entry in localStorage
function saveEntry(entryData) {
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.push(entryData);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
}

function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.forEach(entryData => {
        addEntry(entryData);
    });
}

function deleteEntry(entryData) {
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries = entries.filter(entry => entry.title !== entryData.title || entry.content !== entryData.content);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
}
  
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

  
 