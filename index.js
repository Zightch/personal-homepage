document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
        links[i].setAttribute('rel', 'noopener noreferrer');
    }
});

window.onload = function() {
    var images = [
        'img/八云紫1.jpg',
        'img/八云紫八云蓝1.jpg',
        'img/八云紫幽幽子1.jpg',
        'img/十六夜1.png',
        'img/天子皇带鱼1.jpg',
        'img/灵梦1.jpg',
        'img/灵梦2.jpg',
        'img/芙兰朵露1.jpg',
    ];
    var currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;
    }
    changeBackground();
    setInterval(changeBackground, 5000);
}
