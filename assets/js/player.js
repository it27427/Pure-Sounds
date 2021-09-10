let soundtrack = Array.from(document.querySelectorAll('.soundtrack'));

soundtrack.forEach((singleValue, index) => {
    let params = {
        container: '#soundtrack'+(index+1),
        waveColor: '#d7d7d7',
        progressColor: '#52d9a0',
        barWidth: 2,
        height: 44,
        cursorColor: '#d5d5d5',
        responsive: true
    }

    let playlists = WaveSurfer.create(params);
    playlists.load(singleValue.getAttribute('data-url'));

    const play = Array.from(document.querySelectorAll('.play-btn'));

    let singlePlay = play[index];

    singlePlay.addEventListener('click', (e) => {
        if(e.currentTarget === singlePlay) {
            playlists.playPause();
        } else {
            playlists.stop();
        }

        playlists.on('finish', () => {
            singlePlay.classList.remove('playing');
            playlists.stop();
        });

        if(playlists.isPlaying()) {
            singlePlay.classList.add('playing');
        } else {
            singlePlay.classList.remove('playing');
        }
    });
});
