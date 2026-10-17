const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.skill-title').textContent;
        alert(title + ' clicked');
    });
});