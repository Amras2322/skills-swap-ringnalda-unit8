const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.skill-title').textContent;
        alert(title + ' clicked');
    });
});

categoryFilter.addEventListener('change', () => {
    const filteredSkills = filterSkillsByCategory(skills, categoryFilter.value);
    const filteredTitles = filteredSkills.map(s => s.title);

    cards.forEach(card => {
        const title = card.querySelector('.skill-title').textContent.trim();
        if (filteredTitles.includes(title)) {
            card.style.display = ''; // visible
        } else {
            card.style.display = 'none'; // hidden
        }
    });
});

document.getElementById('calculateCostButton').addEventListener('click', () => {
    const rate = parseFloat(document.getElementById('hourlyRate').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const totalCost = calculateTotalCosts(rate, hours);
    document.getElementById('totalCost').textContent = 'Total Cost: $' + totalCost;
});
