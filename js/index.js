 var video = document.querySelector('#video');
 var play = document.querySelector('#play');
 var pause = document.querySelector('#pause');
 var backward = document.querySelector('#backward');
 var fordward = document.querySelector('#forward'); 
 var progress = document.querySelector('#progress');

 play.addEventListener('click', handlePlay);
 function handlePlay(){
     video.play();
     play.hidden = true;
     pause.hidden = false;
 }
 pause.addEventListener('click', handlePause);
 function handlePause(){
     video.pause();
     pause.hidden = true
     play.hidden = false
 }
 forward.addEventListener('click', handleForward);
 function handleForward(){
     video.currentTime = video.currentTime + 10;
 }
backward.addEventListener('click', handleBackward);
function handleBackward(){
    video.currentTime = video.currentTime - 10;
}

video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleUpdate);

function handleLoaded(){
    console.log(video.duration);
    progress.max = video.duration;
}
function handleUpdate(){
    progress.value = video.currentTime;
}
progress.addEventListener('input', handleinput);

function handleinput(){
    video.currentTime = progress.value;
}

