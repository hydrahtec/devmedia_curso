//pegar todas as teclas
const keys = document.querySelectorAll(".key");

//play notes
function playNote (event) {
    //keyCode
    let audiokeyCode = getKeyCode(event);
    
    //type key
    const key = document.querySelectorAll(`.key[data-key="${audiokeyCode}"]`);
    console.log(key.class)
    //if key exist
    const iskeyExist = key;
    if (iskeyExist.length == 0) {
        return;
    }
    addplayingClass(key)
    //play audio
    playaudio(audiokeyCode)
};

function playaudio (audiokeyCode) {
    const audio = document.querySelectorAll(`audio[data-key="${audiokeyCode}"]`);
    audio.currentTime = 0;
    //audio.forEach( audio => audio.play());
    audio[0].play()
}
function getKeyCode (event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }; 
    return keyCode; 
}
function addplayingClass (key) {//adiciona uma nova class de transição
    key[0].classList.add('playing')
}
function removePlayingClass (event) {// retira a class adicionada
    event.target.classList.remove('playing')
}

//click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
});

//keyboard type
window.addEventListener("keydown", playNote); 