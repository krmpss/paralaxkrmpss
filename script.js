const character = document.getElementById('customCharacter');
const scoreElem = document.getElementById('score');
let score = 0;

character.addEventListener('click', () => {
    score++;
    scoreElem.textContent = 'Score: ' + score;
    hideCharacter();
    setTimeout(showCharacter, Math.random() * 2000);
});

function showCharacter() {
    const x = Math.random() * (150 - 40);  // Adjust based on game area width and character width
    const y = Math.random() * (150 - 40);  // Adjust based on game area height and character height

    character.style.left = x + 'px';
    character.style.top = y + 'px';
    character.style.display = 'block';
}

function hideCharacter() {
    character.style.display = 'none';
}

// Start the game by showing the character for the first time
setTimeout(showCharacter, 1000);
