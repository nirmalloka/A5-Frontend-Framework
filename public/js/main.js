// Select all cards with the class 'overview-card'
const cards = document.querySelectorAll('.overview-card');

// Loop through each card and add event listeners for hover effects
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Enlarge the card
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; // Add shadow
        card.style.transition = 'transform 0.3s, box-shadow 0.3s'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Reset card size
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Reset shadow
    });
});
