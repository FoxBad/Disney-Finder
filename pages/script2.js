function play(x,y) {

    if (y.paused) {
        y.play();
    }
    else{
        y.pause();
    }
    x.classList.toggle('fa-pause');
}



