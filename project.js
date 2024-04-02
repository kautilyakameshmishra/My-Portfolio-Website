document.getElementById('reload-link').addEventListener('click', function() {
    window.location.href = './index.html'; // Replace 'project.html' with the actual path to your project.html file
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
