document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid');
    const resetBtn = document.getElementById('reset');
    const traps = ["38: ataque +2 (6x)", "Armadilha de urso: dano +1", "Calabouço: dano +2",
    "Sonífero: 1 rodada parado", "Tranquilizante: ataque e esquiva pela metade", "Arpão: ataque +3 (1x)",
    "Empalamento: dano +3"];

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
