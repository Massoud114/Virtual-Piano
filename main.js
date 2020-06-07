document.addEventListener('keypress', function (e) {
    if (e.code === 'KeyS' ||
        e.code === 'KeyQ' ||
        e.code === 'KeyD' ||
        e.code === 'KeyF' ||
        e.code === 'KeyG' ||
        e.code === 'KeyH' ||
        e.code === 'KeyJ')
    {
        let audio = document.createElement('audio');
        audio.src = "white_keys/" + e.key + ".mp3";
        audio.play();
    }
    else if(
        e.code === 'KeyZ' ||
        e.code === 'KeyE' ||
        e.code === 'KeyT' ||
        e.code === 'KeyY' ||
        e.code === 'KeyU' ){
        let audio = document.createElement('audio');
        audio.src = "black_keys/" + e.key + ".mp3";
        audio.play();
    }
    else {
        console.log('Error');
    }
})