// BRING IN CARD 1
let cards = document.querySelectorAll('.card')

for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (e) => {
    cards[i].classList.toggle('card-hover')
  })
}

// cards.addEventListener('click', (e) => {
//   cards.classList.toggle('card-hover')
// })