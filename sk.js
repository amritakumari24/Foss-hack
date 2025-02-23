let audio = new Audio(); // Create an audio object
let playPauseBtn = document.getElementById('playPause');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let songs = document.querySelectorAll('.song');

let currentSongIndex = 0;

// Load the first song
function loadSong(index) {
    let selectedSong = songs[index].getAttribute('data-src');
    audio.src = selectedSong;
    audio.play();
    playPauseBtn.textContent = '⏸'; // Show pause button when playing
}

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸'; // Change to pause symbol
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️'; // Change to play symbol
    }
});

// Next Song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Previous Song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Clicking a song in the playlist should play it
songs.forEach((song, index) => {
    song.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
    });
});

let audioPlayer = document.getElementById('audioPlayer');
let currentSongTitle = document.getElementById('currentSongTitle');
let currentSongPoster = document.getElementById('currentSongPoster');

function playSong(songSrc, posterSrc, songTitle) {
    audioPlayer.src = songSrc;
    audioPlayer.play();
    currentSongTitle.innerText = "Now Playing: " + songTitle;
    currentSongPoster.src = posterSrc;
}


