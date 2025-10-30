let progress = document.getElementById('progressBar');
let song = document.getElementById('song');
let playButton = document.getElementById('playSong');
let totalTime = document.getElementById('totalTime');


song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration; // duration in seconds
    progress.value = song.currentTime;
});

function playPause() {
    if (song.paused) {
        song.play();
        playButton.innerHTML = '⏸';
    } else {
        song.pause();
        playButton.innerHTML = '▶';
    }
}

function previousSong() {
    song.currentTime = 0;
}

function nextSong() {
    song.currentTime = song.duration;
}

if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play;
    song.currentTime = progress.value;
    playButton.innerHTML = '⏸';
}
