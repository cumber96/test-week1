const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// 저장된 테마 불러오기
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', next);
});

generateBtn.addEventListener('click', () => {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        numberDiv.style.animationDelay = `${index * 0.1}s`;
        lottoNumbersContainer.appendChild(numberDiv);
    });
}

generateLottoNumbers();
