document.getElementById('reload-link').addEventListener('click', function() {
    window.location.href = './project.html'; // Replace 'project.html' with the actual path to your project.html file
  });

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        modeToggle.src = modeToggle.getAttribute('src-dark');
    } else {
        modeToggle.src = modeToggle.getAttribute('src-light');
    }
});
