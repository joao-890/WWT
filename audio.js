let index = new Audio('audios/index.mp3');
let newyork = new Audio('audios/newyork.mp3');
let paris = new Audio('audios/paris.mp3');
let china = new Audio('audios/china.mp3');
let egypt = new Audio('audios/egypt.mp3');
let portugal = new Audio('audios/portugal.mp3');

function startAudio(audio){
    if (audio.currentTime === 0){
       audio.play();

    }else{
        
        audio.pause();
        audio.currentTime = 0;

    }
}