document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('main');
    main.style.opacity = 0;
    setTimeout(function() {
        main.style.opacity = 1;
        main.style.transition = "opacity 2s";
    }, 100);
});