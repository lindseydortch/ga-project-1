// BRING IN CARD 1
let cards = document.querySelectorAll('.card')

for(let i = 0; i < cards.length; i++) {
  let card = cards[i]
  cards.addEventListener('click', (e) => {
    card.classList.toggle('card-hover')
  })
}

