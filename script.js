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

document.getElementById('findMatchButton').addEventListener('click', () => {
    const category = document.getElementById('matchCategory').value;
    const maxPrice = parseFloat(document.getElementById('matchMaxPrice').value);
    const userNeeds = { category: category, maxPrice: maxPrice };
    const matches = matchSkillsToUser(userNeeds, skills);
    const resultsDiv = document.getElementById('matchResults');

    if (matches.length === 0) {
        resultsDiv.innerHTML = '<p class="no-matches">No matching skills found.</p>';
    } else {
        resultsDiv.innerHTML = matches.map(skill =>
            '<div class="match-card">' +
                '<h3>' + skill.title + '</h3>' +
                '<span class="match-category">' + skill.category + '</span>' +
                '<span class="match-price">$' + skill.price + ' / hr</span>' +
            '</div>'
        ).join('');
    }
});
