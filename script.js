document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const volumeIcon = document.getElementById('volume');
    const volumeUpIcon = document.querySelector('.fa-volume-up');
    const volumeMuteIcon = document.querySelector('.fa-volume-mute');
    const pokedexModal = document.getElementById('pokedexModal');
    const pokedexIcon = document.querySelector('.pokedex');
    const homeScreen = document.getElementById('home-screen');
    const startButton = document.getElementById('start-btn');
    const duelArea = document.getElementById('duel-area');
    let currentScreen = 'home';
    let previousScreen = 'home';
    let playerScore = 0;
    let computerScore = 0;

    duelArea.style.display = 'none';
    pokedexModal.style.display = 'none';
    volumeMuteIcon.style.display = 'none';

    backgroundMusic.play();

    volumeIcon.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            volumeUpIcon.style.display = 'inline';
            volumeMuteIcon.style.display = 'none';
        } else {
            backgroundMusic.pause();
            volumeUpIcon.style.display = 'none';
            volumeMuteIcon.style.display = 'inline';
        }
    });

    pokedexIcon.addEventListener('click', function () {
        if (currentScreen === 'home') {
            pokedexModal.style.display = 'block';
            homeScreen.style.display = 'none';
            duelArea.style.display = 'none';
            currentScreen = 'pokedex';
        } else if (currentScreen === 'duel') {
            pokedexModal.style.display = 'block';
            homeScreen.style.display = 'none';
            duelArea.style.display = 'none';
            currentScreen = 'pokedex';
        } else if (currentScreen === 'pokedex') {
            pokedexModal.style.display = 'none';
            if (previousScreen === 'home') {
                homeScreen.style.display = 'block';
                duelArea.style.display = 'none';
            } else if (previousScreen === 'duel') {
                duelArea.style.display = 'block';
                homeScreen.style.display = 'none';
            }
            currentScreen = previousScreen;
        }
    });

    startButton.addEventListener('click', function (event) {
        event.preventDefault();
        const playerName = document.getElementById('player-name').value.trim();
        if (playerName !== '') {
            homeScreen.style.display = 'none';
            duelArea.style.display = 'block';
            previousScreen = 'duel';
            currentScreen = 'duel';
        }
    });

    function selectRandomPokemon() {
        const waterPokemons = [
            'assets/images/water_pokemon_1.png',
            'assets/images/water_pokemon_2.png',
            'assets/images/water_pokemon_3.png',
            'assets/images/water_pokemon_4.png',
            'assets/images/water_pokemon_5.png',
            'assets/images/water_pokemon_6.png',
            'assets/images/water_pokemon_7.png',
            'assets/images/water_pokemon_8.png',
            'assets/images/water_pokemon_9.png',
            'assets/images/water_pokemon_10.png',
        ];

        const firePokemons = [
            'assets/images/fire_pokemon_1.png',
            'assets/images/fire_pokemon_2.png',
            'assets/images/fire_pokemon_3.png',
            'assets/images/fire_pokemon_4.png',
            'assets/images/fire_pokemon_5.png',
            'assets/images/fire_pokemon_6.png',
            'assets/images/fire_pokemon_7.png',
            'assets/images/fire_pokemon_8.png',
            'assets/images/fire_pokemon_9.png',
            'assets/images/fire_pokemon_10.png',
        ];

        const grassPokemons = [
            'assets/images/grass_pokemon_1.png',
            'assets/images/grass_pokemon_2.png',
            'assets/images/grass_pokemon_3.png',
            'assets/images/grass_pokemon_4.png',
            'assets/images/grass_pokemon_5.png',
            'assets/images/grass_pokemon_6.png',
            'assets/images/grass_pokemon_7.png',
            'assets/images/grass_pokemon_8.png',
            'assets/images/grass_pokemon_9.png',
            'assets/images/grass_pokemon_10.png',
        ];

        const waterPokemon = waterPokemons[Math.floor(Math.random() * waterPokemons.length)];
        const firePokemon = firePokemons[Math.floor(Math.random() * firePokemons.length)];
        const grassPokemon = grassPokemons[Math.floor(Math.random() * grassPokemons.length)];

        document.getElementById('water').innerHTML = `<img src="${waterPokemon}" alt="Water Pokemon" class="pokemon-image" />`;
        document.getElementById('fire').innerHTML = `<img src="${firePokemon}" alt="Fire Pokemon" class="pokemon-image" />`;
        document.getElementById('grass').innerHTML = `<img src="${grassPokemon}" alt="Grass Pokemon" class="pokemon-image" />`;
    }

    selectRandomPokemon();

    // Function to compare pokemons and determine who wins
    function comparePokemons(playerPokemon) {
        const pokemons = ['water', 'fire', 'grass'];
        const computerPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

        if (playerPokemon === computerPokemon) {
            displayOutcome('It\'s a tie!', playerPokemon, computerPokemon);
        } else if (
            (playerPokemon === 'water' && computerPokemon === 'fire') ||
            (playerPokemon === 'fire' && computerPokemon === 'grass') ||
            (playerPokemon === 'grass' && computerPokemon === 'water')
        ) {
            displayOutcome('You win!', playerPokemon, computerPokemon);
            playerScore++;
        } else {
            displayOutcome('You lost...', playerPokemon, computerPokemon);
            computerScore++;
        }

        updateScore();
        checkWinner();
    }

    // Function to display outcomes
    function displayOutcome(outcome, playerPokemon, computerPokemon) {
        const outcomeContainer = document.getElementById('outcomes-container');

        // Clear previous outcomes
        outcomeContainer.innerHTML = '';

        const outcomeParagraph = document.createElement('p');
        outcomeParagraph.classList.add('outcome');

        const outcomeText = outcome === 'You win!' ? 'You win!' : outcome === 'You lost...' ? 'You lost...' : 'It\'s a tie!';
        const computerPokemonText = ` Computer chose ${computerPokemon}.`;

        outcomeParagraph.innerText = `${outcomeText} ${computerPokemonText}`;
        outcomeParagraph.classList.add(outcome === 'You win!' ? 'win' : outcome === 'You lost...' ? 'loss' : 'tie');

        outcomeContainer.appendChild(outcomeParagraph);
    }

    // Function to update scores
    function updateScore() {
        const playerScoreElement = document.getElementById('player-score');
        const computerScoreElement = document.getElementById('computer-score');

        playerScoreElement.innerText = playerScore;
        computerScoreElement.innerText = computerScore;
    }

    // Function to check for the winner
    function checkWinner() {
        if (playerScore === 10) {
            alert('Congratulations! You are the winner!');
            resetGame();
        } else if (computerScore === 10) {
            alert('Game over! The computer is the winner. Better luck next time!');
            resetGame();
        }
    }

    // Function to reset the game
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScore();

        const outcomeContainer = document.getElementById('outcomes-container');
        outcomeContainer.innerHTML = '';
    }

    // Event listeners for player choices
    document.getElementById('water').addEventListener('click', function () {
        comparePokemons('water');
    });

    document.getElementById('fire').addEventListener('click', function () {
        comparePokemons('fire');
    });

    document.getElementById('grass').addEventListener('click', function () {
        comparePokemons('grass');
    });
});