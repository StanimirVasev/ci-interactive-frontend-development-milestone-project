document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const volumeIcon = document.getElementById('volume');
    const volumeUpIcon = document.querySelector('.fa-volume-up');
    const volumeMuteIcon = document.querySelector('.fa-volume-mute');

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
});
