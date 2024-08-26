const playPauseBtn = document.querySelectorAll('.play-pause-btn-audio');
playPauseBtn.forEach(playBtn => {
    playBtn.addEventListener('click', function() {
        
        const audioParent = this.closest(".feet-thumbnails-audio");
        const audio = audioParent.querySelector(".audio");
        const playIcon = audioParent.querySelector(".play-icon-audio"); 
        const waveProgress = audioParent.querySelector('.wave-progress');

        // // Play/Pause functionality
          if (audio.paused) {
            audio.play();
            playIcon.src = 'https://cdn.shopify.com/s/files/1/0658/9733/2918/files/Pause.svg?v=1724334216'; // Update with your pause icon path
          } else {
            audio.pause();
            playIcon.src = 'https://cdn.shopify.com/s/files/1/0658/9733/2918/files/play-icon-audio.png?v=1724336383'; // Update with your play icon path
          }
        // // Update progress bar as audio plays
        if(audio){
          audio.addEventListener('timeupdate', function() {
                const progressPercentage = (audio.currentTime / audio.duration) * 100;
                waveProgress.style.width = progressPercentage + '%';
              });
        }
    })
})