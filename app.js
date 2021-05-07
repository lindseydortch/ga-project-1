// BRING IN CARD 1
let cards = document.querySelectorAll('.card')
let cardFront = document.querySelector('.card-front')

// for (let i = 0; i < cardFront.length; i++) {
//   console.log(cardFront[i])
// }

for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (e) => {
    let cardHover = cards[i].classList.toggle('card-hover')
    //let value = 0 

    console.log(cardHover)
    if (cardHover === true) {
      console.log('Card has been hovered')
    } 
  })
}

// cards.addEventListener('click', (e) => {
//   cards.classList.toggle('card-hover')
// })