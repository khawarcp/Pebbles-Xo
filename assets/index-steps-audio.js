const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const waveProgress = document.querySelector('.wave-progress');

// Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playIcon.src = 'https://cdn.shopify.com/s/files/1/0658/9733/2918/files/Pause.svg?v=1724334216'; // Update with your pause icon path
  } else {
    audio.pause();
    playIcon.src = 'https://cdn.shopify.com/s/files/1/0658/9733/2918/files/play-icon-audio.png?v=1724336383'; // Update with your play icon path
  }
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', function() {
  const progressPercentage = (audio.currentTime / audio.duration) * 100;
  waveProgress.style.width = progressPercentage + '%';
});