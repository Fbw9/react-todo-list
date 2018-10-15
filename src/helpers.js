export function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomTagline() {
    const taglines = ['This is my bucket list', 'This is my shopping list', 'This is my travel list'];
    return randomArrayItem(taglines);
}
