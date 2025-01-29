function setPoster() {
    var animation = document.getElementById('animation');
    if (window.innerWidth <= 880 && animation.getAttribute('src') != '/assets/movie-2.mov') {
        animation.setAttribute('poster', '/assets/movie-2-cover.png');
        animation.src = '/assets/movie-2.mov'
    }else if (window.innerWidth >= 880 && animation.getAttribute('src') != '/assets/movie-1.mov'){
        animation.setAttribute('poster', '/assets/movie-1-cover.png');
        animation.src = '/assets/movie-1.mov'
    }    
}

setPoster();
window.onresize = function() {
    setPoster();
}