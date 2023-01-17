var should;

function loop() {
    if(!should) return; // ignore this loop iteration if said so

    // print something to screen
}

should = true;
var timer = setInterval(loop, 30); // I guess you meant 'loop' without '()'

canvas.onkeypress = function (event) {
    should = false; // announce that loop really should stop
    clearInterval(timer);
    // print something else to screen
}