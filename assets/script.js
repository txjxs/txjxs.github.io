function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeIcon.src = 'assets/moon.svg';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeIcon.src = 'assets/sun.svg';
    }
}
