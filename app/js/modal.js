var modal = document.getElementsByClassName("modal")[0];
var start = document.getElementsByClassName("start")[0];
var help = document.getElementsByClassName("help")[0];

start.onclick = function() {
    modal.classList.add('out');
    setTimeout ( function( ) { modal.style.display = "none"; }, 900 );
}

help.onclick = function() {
    modal.style.display = "flex";
    modal.classList.remove('out');
}
