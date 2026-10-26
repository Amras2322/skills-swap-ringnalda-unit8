const { filterSkillsByCategory, calculateTotalCosts, matchSkillsToUser } = require('../skillswap-functions.js');

const exampleSkills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

describe("filterSkillsByCategory", () => {

    test('filters skills by a specific category', () => {
        const result = filterSkillsByCategory(exampleSkills, 'Programming');
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test('returns all skills when category is "All"', () => {
        const result = filterSkillsByCategory(exampleSkills, 'All');
        expect(result).toEqual(exampleSkills);
    });

    test('returns an empty array when category has no matching skills', () => {
        const result = filterSkillsByCategory(exampleSkills, 'Cooking');
        expect(result).toEqual([]);
    });
});


describe('calculateTotalCosts', () => {
    test('returns the correct value for different hours and rates', () => {
        expect(calculateTotalCosts(20, 2)).toBe(40);
    });

    test('handles decimal hours', () => {
        expect(calculateTotalCosts(25, 1.5)).toBe(37.5);
    });

    test('handles zero hours', () => {
        expect(calculateTotalCosts(20, 0)).toBe(0);
    });

    test('handles zero cost', () => {
        expect(calculateTotalCosts(0, 3)).toBe(0);
    });
});


describe('matchSkillsToUser', () => {
    test('Matches by category and price', () => {
        const userNeeds = { category: 'Programming', maxPrice: 30 };
        const result = matchSkillsToUser(userNeeds, exampleSkills);
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test('Filters by max price', () => {
        const userNeeds = { category: 'Programming', maxPrice: 20 };
        const result = matchSkillsToUser(userNeeds, exampleSkills);
        expect(result).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 }
        ]);
    });

    test('Returns empty array for no matches', () => {
        const userNeeds = { category: 'Cooking', maxPrice: 100 };
        const result = matchSkillsToUser(userNeeds, exampleSkills);
        expect(result).toEqual([]);
    });

    test('Includes free skills', () => {
        const userNeeds = { category: 'Career', maxPrice: 0 };
        const result = matchSkillsToUser(userNeeds, exampleSkills);
        expect(result).toEqual([
            { title: 'Resume Review', category: 'Career', price: 0 }
        ]);
    });
});
