const topKeys = ['KeyS', 'KeyA', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ']
const bottomKeys = ['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU']

document.addEventListener('keypress', function (e) {
    if (topKeys.includes(e.code))
    {
        let audio = document.createElement('audio');
        audio.src = "./white_keys/" + e.key.toUpperCase() + ".mp3";
        audio.play();
    }
    else if(bottomKeys.includes(e.code)){
        let audio = document.createElement('audio');
        audio.src = "./black_keys/" + e.key.toUpperCase() + ".mp3";
        audio.play();
    }
    else {
        console.log('Error');
    }
})
