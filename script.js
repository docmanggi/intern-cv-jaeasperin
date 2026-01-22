alert("Welcome to John Alphonsus E. Asperin's CV!");

const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})