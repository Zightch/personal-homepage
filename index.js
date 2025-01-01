document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
        links[i].setAttribute('rel', 'noopener noreferrer');
    }
});

window.onload = function() {
    var images = [
        'img/background-1.jpg',
        'img/background-2.jpg',
        'img/background-3.jpg',
        'img/background-4.jpg',
        'img/background-5.jpg',
        'img/background-6.jpg',
        'img/background-7.jpg'
    ];
    var currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;
    }
    changeBackground();
    setInterval(changeBackground, 5000);
}
