// script.js
const toggleSwitch = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode') || 'light';

document.body.classList.add(`${currentMode}-mode`);
toggleSwitch.textContent = currentMode === 'dark' ? '🌞' : '🌙';

toggleSwitch.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('mode', 'dark');
        toggleSwitch.textContent = '🌞';
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('mode', 'light');
        toggleSwitch.textContent = '🌙';
    }
});
