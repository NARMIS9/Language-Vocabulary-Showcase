document.addEventListener('DOMContentLoaded', function() {
    const words = [
        { language: 'Spanish', word: 'Hola', meaning: 'Hello', example: 'Hola, ¿cómo estás?' },
        { language: 'French', word: 'Bonjour', meaning: 'Good morning', example: 'Bonjour, mon ami.' },
        { language: 'German', word: 'Danke', meaning: 'Thank you', example: 'Danke für deine Hilfe.' }
        // Add more words as needed
    ];

    const wordList = document.getElementById('word-list');

    words.forEach(word => {
        const card = document.createElement('div');
        card.className = 'col-md-4 word-card';
        
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${word.language}</h5>
                    <p class="card-text"><strong>${word.word}</strong>: ${word.meaning}</p>
                    <p class="card-text"><em>${word.example}</em></p>
                </div>
            </div>
        `;
        
        wordList.appendChild(card);
    });
});
