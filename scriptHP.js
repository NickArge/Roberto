window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 100) {
        logo.style.width = '80px'; // Smaller logo when the user scrolls down
    } else {
        logo.style.width = '120px'; // Larger logo when at the top of the page
    }
});
