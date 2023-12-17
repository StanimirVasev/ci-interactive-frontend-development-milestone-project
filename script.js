document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const volumeIcon = document.getElementById('volume');
    const volumeUpIcon = document.querySelector('.fa-volume-up');
    const volumeMuteIcon = document.querySelector('.fa-volume-mute');
    const pokedexModal = document.getElementById('pokedexModal');
    const pokedexIcon = document.querySelector('.pokedex');
    const homeScreen = document.getElementById('home-screen');

    // Hide the Pokedex modal initially
    pokedexModal.style.display = 'none';
    // Hide the volume mute icon initially
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
        if (pokedexModal.style.display === 'none') {
            pokedexModal.style.display = 'block';
            homeScreen.style.display = 'none'; // Hide home-screen content
        } else {
            pokedexModal.style.display = 'none';
            homeScreen.style.display = 'block'; // Show home-screen content
        }
    });
});