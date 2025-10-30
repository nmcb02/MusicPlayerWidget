let progress = document.getElementById('progressBar');
let song = document.getElementById('song');
let playButton = document.getElementById('playSong');
let totalTime = document.getElementById('totalTime');
let currentTimeEl = document.getElementById('currentTime');
let songName = document.getElementById('songName');
let artistName = document.getElementById('artistName');

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration; // duration in seconds
    progress.value = song.currentTime;
    totalTime.textContent = formatTime(song.duration);

    // Extract filename without extension
    let rawName = song.currentSrc.split('/').pop().split('.').slice(0, -1).join('.');
    songName.textContent = decodeURIComponent(rawName);

    artistName.textContent = "Square Enix"; // Static for now, could be dynamic later
});

// update both slider + current time as song plays
song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
    currentTimeEl.textContent = formatTime(song.currentTime);
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
