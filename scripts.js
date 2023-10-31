document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid');
    const resetBtn = document.getElementById('reset');
    const appearBtn = document.getElementById('appear'); 

    const traps = ["Armadilha de urso: dano +1", "Sonífero: parado (1x)", "Arpão: ataque +3 (1x)",
    "Tranquilizante: ataque e esquiva -2", "Empalamento: dano +3", "Praga: reduz tudo em -2 (2x)",
    "Hipnose: ataque amigo (1x)", "Sange-suga: dano +1", "Soco glês de prata: ataque +1",
    "Semente dos deuses: +2 de vida", "Semente dos deuses: +2 de vida", "Semente dos deuses: +2 de vida",
    "Semente dos deuses: +2 de vida", "Semente dos deuses: +2 de vida"];

    function createButton(id) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.dataset.id = id;
        return button;
    }

    function generateRandomTraps() {
        const randomTraps = Array(49).fill(null).map((_, index) => index + 1);
        return randomTraps.sort(() => Math.random() - 0.5).slice(0, traps.length);
    }

    function resetGrid() {
        grid.innerHTML = '';
        const randomTraps = generateRandomTraps();
        for (let i = 1; i <= 49; i++) {
            const button = createButton(i);
            button.innerText = i;
            button.addEventListener('click', function() {
                const buttonNumber = parseInt(this.innerText);
                if (randomTraps.includes(buttonNumber)) {
                    alert(`${traps[randomTraps.indexOf(buttonNumber)]}`);
                    this.classList.add('red');
                }
            });
            grid.appendChild(button);
        }
    }

    function appearRandomButton() {
        const randomButtonNumber = Math.floor(Math.random() * 49) + 1; 
        const selectedButton = document.querySelector(`[data-id="${randomButtonNumber}"]`);
        
        if (selectedButton.classList.contains('blue')) {
            selectedButton.classList.remove('blue');
            selectedButton.classList.add('green');
        } else if (selectedButton.classList.contains('green')) {
            selectedButton.classList.remove('green');
            selectedButton.classList.add('blue');
        } else if (selectedButton.classList.contains('red')) {
            selectedButton.classList.remove('red');
            selectedButton.classList.add('purple');
        } else if (selectedButton.classList.contains('purple')) {
            selectedButton.classList.remove('purple');
            selectedButton.classList.add('red');
        } else {
            selectedButton.classList.add('blue'); 
        }
    }

    resetBtn.addEventListener('click', resetGrid);
    appearBtn.addEventListener('click', appearRandomButton); 

    resetGrid();
});
