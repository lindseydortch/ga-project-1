// BRING IN CARD 1
let cards = document.querySelectorAll('.card')
let cardFront = document.querySelectorAll('.card-front')
let cardBack = document.querySelectorAll('.card-back')

//==========================================================================================================
//==========================================================================================================
// VALUE CODE
// This code will add or subtract a value to let the browser know that if the value is greater than or equal to 2, no more cards can be flipped
//==========================================================================================================
//==========================================================================================================
// Value variable 
let value = 0

// Adds value
addValue = () => {
  value++
  console.log(value)
}

// Subtracts value
// ** This code may not be necesarry since, you can only flip two cards and can't turn them around again until you have guessed two cards **
subtractValue = () => {
  value--
  console.log(value)
}

// Example Function to show how to log i
// functionFoo = (temp) => {
//   console.log(temp)
// }

//==========================================================================================================
//==========================================================================================================
// SHOW CARDS FUNCTIONALITY 
// This will show the cards at the beginning of the page load 
// Logged in where the cards are looped through
//==========================================================================================================
//==========================================================================================================

showCards = (i) => {
  
  setTimeout(() => {
    cards[i].classList.add('card-hover')
    setTimeout(() => {
      cards[i].classList.remove('card-hover')
    }, 5000)
  }, 3000)
}

//==========================================================================================================
//==========================================================================================================
// Compares the content in the cards - or runs through the cardBack divs for their innerText, so they can be compared in the cardHandler Func
//==========================================================================================================
//==========================================================================================================
cardBackFunc = (k) => {
  for (let k = 0; k < cardBack.length; k++) {
    // console.log(`This is ${k}`)
    //console.log(cardBack[k].innerHTML)
    let cardInner = cardBack[k]
    console.log(cardInner[k].innerText)
    //console.log(cardInner[k])
  } 
} 


// Empty array for the cardHandler Func to be able to push the index of the card that was selected
let cardArr = []

//==========================================================================================================
//==========================================================================================================
// The function that goes on the event listener for the cards
//==========================================================================================================
//==========================================================================================================

cardHandler = (i, k) => {
  
      // Variable to tell the browser if a card is allowed to flip over 
      let cardHover = true 

      // Checks the cardHover
      if (cardHover === true) {
  
        // Checks the value
        if (value === 0) {
          cards[i].classList.add('card-hover')
          addValue()
          // Pushes the index of the card onto the array
          cardArr.push(i)
          console.log(cardArr)
          //cardBackFunc()

          // for (let j = 0; j < cardArr.length; j++) {
          //   console.log(`This is j of CardArr: ${cardArr[j]}`)
          //   console.log(`This is i: ${i}`)
          // }
        } else if (value === 1){
          for (let j = 0; j < cardArr.length; j++) {
            if (cardArr[j] === i) {
              console.log(`You cannot hover this card because it has already been hovered or you just hovered it`)
            } else {
              cards[i].classList.add('card-hover') 
              // Pushes the index of the card onto the array
              cardArr.push(i)
              console.log(cardArr)
              addValue()
            }
          }
        } else {
          console.log(`You can only hover two cards at a time`)
        }
      }  
  }

//==========================================================================================================
//==========================================================================================================
// Event Listener for the cards
//==========================================================================================================
//==========================================================================================================
for(let i = 0; i < cards.length; i++) {
  showCards(i)
  cards[i].addEventListener('click', () => cardHandler(i))
}

//==========================================================================================================
//==========================================================================================================
// Popup Functionality 
//==========================================================================================================
//==========================================================================================================
let triviaPopup = document.querySelector('#triviaPopup')
let closePopupBtn = document.querySelector('#close')
let btnHint = document.querySelector('.btnHint')


// Adds or removes the class list of .none 
openModal = (e) => {
  triviaPopup.classList.remove('none')
}

closeModal = (e) => {
  triviaPopup.classList.add('none')
}

closePopupBtn.addEventListener('click', closeModal)

btnHint.addEventListener('click', openModal)