let icon = document.querySelector('.ion1')
let swiper = document.querySelector('.swiper')

icon.addEventListener('click', () => {
  swiper.classList.toggle('dis')
})
let den1 = document.querySelector('.language1')
let den2 = document.querySelector('.language2')
let den = document.querySelector('.language').addEventListener('click', () => {
  den1.classList.toggle('language1')
  den2.classList.toggle('language2')
})