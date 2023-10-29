document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid');
    const resetBtn = document.getElementById('reset');
    const traps = ["Armadilha de urso: dano +1", "Sonífero: não joga (1x)",
    "Tranquilizante: ataque e esquiva pela metade", "Empalamento: no +3", "Praga: reduz tudo em -2 (2x)",
    "Hipnose: ataque amigo", "Sange-suga: dano +1", "Arpão: ataque +3 (1x)",
    "Soco glês de prata: ataque +1", "Semente dos deuses: +2 de vida", "Semente dos deuses: +2 de vida",
    "Semente dos deuses: +2 de da", "Semente dos deuses: +2 de vida", "Semente dos deuses: +2 de vida"];

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

    resetBtn.addEventListener('click', resetGrid);

    resetGrid();
});
