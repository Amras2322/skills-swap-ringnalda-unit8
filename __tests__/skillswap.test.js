const { filterSkillsByCategory } = require('../skillswap-functions.js');

describe("filterSkillsByCategory", () => {
    const exampleSkills = [
        { title: 'Python Tutoring', category: 'Programming', price: 20 },
        { title: 'Guitar Lessons', category: 'Music', price: 15 },
        { title: 'Resume Review', category: 'Career', price: 0 },
        { title: 'Web Development', category: 'Programming', price: 25 }
    ];

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
