document.addEventListener("DOMContentLoaded", function (event) {
    cloneCircle();
    deleteLastLine();

});

function cloneCircle() {
    var circle = document.querySelector('.circle');
    var cloneCircle = circle.cloneNode(false);
    var body = document.querySelector("body");
    body.insertBefore(cloneCircle, circle);
}

function deleteLastLine() {
    var p = document.querySelector('p:nth-of-type(6)');
    p.remove();
}