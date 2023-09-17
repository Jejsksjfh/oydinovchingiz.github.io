// Интерактивность для кнопки "Показать/Скрыть"
const toggleButton = document.getElementById('toggleContent');
const contentSection = document.getElementById('основная-часть');

toggleButton.addEventListener('click', () => {
    contentSection.classList.toggle('hidden');
    if (toggleButton.textContent === 'Показать') {
        toggleButton.textContent = 'Скрыть';
    } else {
        toggleButton.textContent = 'Показать';
    }
});
