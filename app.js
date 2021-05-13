// BRING IN CARD 1
let cards = document.querySelectorAll('.card')
let cardFront = document.querySelectorAll('.card-front')
let cardBack = document.querySelectorAll('.card-back')
let cardsSection = document.querySelector('.cards')
let correctMatches = document.querySelector('.correctMatches')
let matchesLeft = document.querySelector('.matchesLeft')

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

// Empty array for the cardHandler Func to be able to push the index of the card that was selected
let cardArr = []
let matchArr = []

//==========================================================================================================
//==========================================================================================================
// Match Function
//==========================================================================================================
//==========================================================================================================
let matches = 0
let gameWon = false 
let matchesLeftAmount = 10

cardBackMatchFunc = (e, i) => {
  console.log(`This is ${e}`)
  if (matchArr[0].firstElementChild.children[1].innerText === matchArr[1].firstElementChild.children[1].innerText) {
    console.log(`Yay you got a match`)
    value = 0
    matches++
    console.log(`The number of matches is ${matches}`)
    correctMatches.innerText = `Correct Matches: ${matches}`
    matchesLeft.innerText = `Matches Left: ${matchesLeftAmount - matches}`
    setTimeout(() => {
      // matchArr.map(card => {
      //   return card.classList.add('vis-hidden')
      // })
      matchArr[0].classList.add('vis-hidden')
      matchArr[1].classList.add('vis-hidden')
      matchArr.shift()
      matchArr.shift()
    }, 3000)
    clearTimeout()

    if (matches === 2) {
      gameWon = true
      // console.log(cardsSection.innerHTML) 
      setTimeout(() => {
        cardsSection.innerHTML = ''
      
        let gameWonDiv = document.createElement('div')
        let gameWonText = document.createElement('p')
        gameWonText.innerText = `YAY 🎉 You've won the game!!`
        gameWonDiv.append(gameWonText)
        cardsSection.classList.remove('cards')
        cardsSection.classList.add('gameWon')
        cardsSection.append(gameWonDiv)
      }, 3000)
    }
    
  } else {
    console.log(`Sorry not a match`)
    cards[i].classList.remove('card-hover')
  }
}

//==========================================================================================================
//==========================================================================================================
// GAME WON FUNCTION
//==========================================================================================================
//==========================================================================================================




//==========================================================================================================
//==========================================================================================================
// The function that goes on the event listener for the cards
//==========================================================================================================
//==========================================================================================================

cardHandler = (i) => {
  
      // Variable to tell the browser if a card is allowed to flip over 
      let cardHover = true 

      // Checks the cardHover
      if (cardHover === true) {
  
        // Checks the value
        if (value === 0) {
          cards[i].classList.add('card-hover')
          addValue()
          // console.log(cards[i])
          // Pushes the index of the card onto the array
          cardArr.push(i)
          console.log(`This is the card array: ${cardArr}`)
          // Pushes the text of the back of the card to the array
          // cardBackFunc(i)
          matchArr.push(cards[i])
          console.log(`This is the match array: ${matchArr}`)

        } else if (value === 1){
          
          for (let j = 0; j < cardArr.length; j++) {
            if (cardArr[j] === cards[i]) {
              console.log(`You cannot hover this card because it has already been hovered or you just hovered it`)
              cardArr = []
            } else {
              cards[i].classList.add('card-hover') 
              // Pushes the index of the card onto the array
              cardArr.push(i)
              console.log(cardArr)
              addValue()
              // Pushes the text of the back of the card to the array
              // cardBackFunc(i)
              matchArr.push(cards[i])
              console.log(`This is the length of the match array: ${matchArr.length}`)
              
              // if (matchArr.length > 2) {
              //   matchArr.length = 0
              //   console.log(`This should be clearing the match array`)
              // } 
              //else {
            //     matchArr.push(cards[i])
            //   console.log(`This is the match array: ${matchArr}`)
            //   }
              
              // Sees if the cards are a match
              cardBackMatchFunc(i)
              cardArr = []
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
  // showCards(i)
  // clearTimeout()
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