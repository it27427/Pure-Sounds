let playList = [
    "assets/audio/track1.mp3",
    "assets/audio/track2.mp3",
    "assets/audio/track3.mp3",
    "assets/audio/track4.wav"
];

for(let i = 0; i < playList.length; i++){
    let params = {
        container: '#soundtrack'+(i+1),
        waveColor: '#d7d7d7',
        progressColor: '#52d9a0',
        barWidth: 2,
        height: 44,
        cursorColor: '#d5d5d5',
        responsive: true
    }

    let playlists = WaveSurfer.create(params);
    playlists.load(playList[i]);

    const play = Array.from(document.querySelectorAll('.play-btn'));

    let singlePlay = play[i];

    singlePlay.addEventListener('click', (e) => {
        if(e.currentTarget) {
            playlists.playPause();
        } else {
            playlists.stop();
        }

        console.log(singlePlay);
        console.log(e.currentTarget);

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
}
