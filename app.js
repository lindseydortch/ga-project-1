// BRING IN CARD 1
let cards = document.querySelectorAll('.card')
let cardFront = document.querySelector('.card-front')

// for (let i = 0; i < cardFront.length; i++) {
//   console.log(cardFront[i])
// }

let value = 0

addValue = () => {
  value++
  console.log(value)
}

subtractValue = () => {
  value--
  console.log(value)
}

// let canHover = true 

// canHoverTrue = () => {
//   canHover = true
// }

// canHoverFalse = () => {
//   canHover = false
// }

// cardHoveredFunc = () => {
  
// }

// Loops through all of the cards
for (let i = 0; i < cards.length; i++) {

  cards[i].addEventListener('click', (e) => {
    let cardHover = true 
    // When you click on a card the .card-hover class needs to be turned on or off 
    if (cardHover === true && value === 0) {
      cards[i].classList.add('card-hover')
      addValue()
    } else if (cardHover === false && value === 1) {
      cards[i].classList.add('card-hover')
      addValue()
    } else if (cardHover === true && value >= 2) {
      console.log(`You can only hover two cards at a time`)
      cardHover = false
    } else {
      cards[i].classList.remove('card-hover')
    }

    // If the value of the card is greater than or equal to 2, you can not turn that card over 
  })
}

// let alreadyHovered = false

// alreadyHoveredFunc = () => {
//   alreadyHovered = true
//   console.log(`This card has been turned`)
// }

// hasntBeenHoveredFunc = () => {
//   alreadyHovered = false
//   console.log(`This card has NOT been turned yet`)
// }

// hoverCard = () => {
//   card.classList.toggle('.card-hover')
// }

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', hoverCard())
// }


// for(let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', (e) => {
//     // let cardHover = cards[i].classList.toggle('card-hover') 

//     let cardHover = true

//     //console.log(cardHover)
//     if (cardHover === true) {

//       if (value === 0) {
//         cards[i].classList.add('card-hover')
//         addValue()          
//       } 
//       // else if (value === 1){
//       //   addValue()
//       //   // console.log('Sorry you can only hover two cards at a time')
//       //   cards[i].classList.add('card-hover') 
//       // } else {
//       //   console.log(`Can't hover`)
//       // }
//     } 
//     // else if (cardHover === false) {
//     //   console.log('Card has been turned around')
//     //   subtractValue()
//     //   // return cardHover
//     // } 
//   })
// }

// cards.addEventListener('click', (e) => {
//   cards.classList.toggle('card-hover')
// })