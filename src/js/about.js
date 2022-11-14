// Секция ABOUT / Кнопка "Read more"

const buttonEl = document.querySelector('.js-read-btn');
const textEl = document.querySelector('.js-read-more'); 
const btnTextEl = document.querySelector('.js-btn-text'); 
console.log(buttonEl);
console.log(textEl);
// if (!textEl.classList.contains('is-hidden')) {
//    btnTextEl.textContent = 'Read less'
//    }
buttonEl.addEventListener('click', () => {
   textEl.classList.toggle('is-hidden');   


})