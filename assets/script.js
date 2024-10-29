document.addEventListener('DOMContentLoaded', () => {
    // Select theme toggle button
    const themeToggle = document.getElementById('theme-toggle');

    // Check for saved theme in local storage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Set initial theme icon
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
});