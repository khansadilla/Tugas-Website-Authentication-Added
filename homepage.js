// Simple alert when clicking explore button
const exploreButtons = document.querySelectorAll('.btn-explore');

exploreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Coming soon! Stay tuned for more experiments.');
    });
});

document.getElementById('btn-ph-measurement').addEventListener('click', () => {
    window.location.href = 'home.html';
});
