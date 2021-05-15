// BRING IN CARD 1
let cards = document.querySelectorAll('.card')
let cardFront = document.querySelectorAll('.card-front')
let cardBack = document.querySelectorAll('.card-back')
let cardsContainer = document.querySelector('.cards-container')
let cardsSection = document.querySelector('.cards')
let correctMatches = document.querySelector('.correctMatches')
let matchesLeft = document.querySelector('.matchesLeft')
let gameWonPopup = document.querySelector('#gameWonPopup')
let videoForPopup = document.querySelector('.videoForPopup')
let closePopupBtn = document.querySelector('#closePopup')
let btnNewGame = document.querySelector('.btnNewGame')
let btnHint = document.querySelector('.btnHint')

let matches = 0
let gameWon = false 
let matchesLeftAmount = 10
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
  // console.log(value)
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
    }, 3000)
  }, 1000)
}

showCardsNode = (node) => {
  setTimeout(() => {
    node.classList.add('card-hover')
    setTimeout(() => {
      node.classList.remove('card-hover')
    }, 3000)
  }, 1000)
}

//==========================================================================================================
//==========================================================================================================
// SHUFFLE THE CARDS and resets the game
// FISCHER - YATES ALGO
//==========================================================================================================
//==========================================================================================================
let btnShuffle = document.querySelector('.btnShuffle')
// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let deckOfCards = Array.from(cards)
console.log(deckOfCards)

shuffleCards = () => {
  // console.log('shuffle')
  // Need to remove inner.HTML 
  cardsContainer.innerHTML = ``
  // console.log(deckOfCards)
  
  // FISCHER - YATES METHOD 
  let newPos
  let temp

  for (let l = deckOfCards.length - 1; l > 0; l--) {
    newPos = Math.floor(Math.random() * (l + 1))
    temp = deckOfCards[l]
    deckOfCards[l] = deckOfCards[newPos]
    deckOfCards[newPos] = temp
  }

  // console.log(deckOfCards)

  // END OF FISCHER-YATES METHOD

  // appends the rest of the shuffled cards back into the game 
  deckOfCards.forEach((node) => {
    cardsContainer.appendChild(node)
    node.classList.remove('vis-hidden')
    node.classList.remove('card-hover')
    showCardsNode(node)
  })
  // console.log(cardsSection)
  correctMatches.innerText = `Correct Matches: 0`
  matchesLeft.innerText = `Matches Left: 10`
  gameWonPopup.classList.add('none')
  videoForPopup.removeAttribute('allow', 'autoplay')
  videoForPopup.src = ''
  matches = 0
  matchesLeftAmount = 10
  btnHint.classList.remove('disable-pointer')  
  btnHint.innerText = 'Hint'
}

//cardSection.appendChild.forEach((unshuffled) => shuffled.classList.appendChild().shuffleCards())
shuffleCards()

//console.log(unshuffled)

// let newArray = shuffleCards(arry)
// console.log(newArray)

btnShuffle.addEventListener('click', shuffleCards)


//addShuffleToCards(i)



// Empty array for the cardHandler Func to be able to push the index of the card that was selected
let cardArr = []
let matchArr = []

//==========================================================================================================
//==========================================================================================================
// Match Function
//==========================================================================================================
//==========================================================================================================


cardBackMatchFunc = () => {
  if (matchArr[0].firstElementChild.children[1].innerHTML === matchArr[1].firstElementChild.children[1].innerHTML) {
    // console.log(`Yay you got a match`)
    value = 0
    matches++
    // console.log(`The number of matches is ${matches}`)
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

    if (matches === 10) {
      gameWon = true
      // // console.log(cardsSection.innerHTML) 
      // setTimeout(() => {
      //   cardsSection.innerHTML = ''
      
      //   let gameWonDiv = document.createElement('div')
      //   let gameWonText = document.createElement('p')
      //   gameWonText.innerText = `YAY 🎉 You've won the game!!`
      //   gameWonDiv.append(gameWonText)
      //   cardsSection.classList.remove('cards')
      //   cardsSection.classList.add('gameWon')
      //   cardsSection.append(gameWonDiv)
      // }, 3000)
      setTimeout(() => {
        gameWonPopup.classList.remove('none')
        videoForPopup.setAttribute('allow', 'autoplay')
        videoForPopup.src = 'https://www.youtube.com/embed/I1188GO4p1E?autoplay=1'
      }, 5000)
    }
    
  } else {
    // console.log(`Sorry not a match`)
    value = 0

    setTimeout(() => {
      matchArr[0].classList.remove('card-hover')
      matchArr[1].classList.remove('card-hover')
      matchArr.shift()
      matchArr.shift()
    }, 2000)
    
  }
}

//==========================================================================================================
//==========================================================================================================
// Hint Function
//==========================================================================================================
//==========================================================================================================


let hintsLeft = 1

hintFunc = (i) => {
    cards[i].classList.add('card-hover')
    setTimeout(() => {
      cards[i].classList.remove('card-hover')
    }, 3000)
    hintsLeft--
    clearTimeout()
    btnHint.classList.add('disable-pointer')  
    btnHint.innerText = 'No Hints Left'
}

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
          // console.log(`This is the card array: ${cardArr}`)
          // Pushes the text of the back of the card to the array
          matchArr.push(cards[i])
          // console.log(`This is the match array: ${matchArr}`)

        } else if (value === 1){
          
          for (let j = 0; j < cardArr.length; j++) {
            if (cardArr[j] === cards[i]) {
              // console.log(`You cannot hover this card because it has already been hovered or you just hovered it`)
              cardArr = []
            } else {
              cards[i].classList.add('card-hover') 
              // Pushes the index of the card onto the array
              cardArr.push(i)
              // console.log(cardArr)
              addValue()
              // Pushes the text of the back of the card to the array
              matchArr.push(cards[i])
              // console.log(`This is the length of the match array: ${matchArr.length}`)

              // Sees if the cards are a match
              cardBackMatchFunc(i)
              cardArr = []
            }
          }
        } 
      }  

  }

//==========================================================================================================
//==========================================================================================================
// Popup Functionality - GAME WON
//==========================================================================================================
//==========================================================================================================

// let gameWonPopup = document.querySelector('#gameWonPopup')
// let videoForPopup = document.querySelector('.videoForPopup')
// let closePopupBtn = document.querySelector('#closePopup')
// let btnNewGame = document.querySelector('.btnNewGame')

closePopupBtn.addEventListener('click', shuffleCards)
btnNewGame.addEventListener('click', shuffleCards)

//==========================================================================================================
//==========================================================================================================
// Popup Functionality - Trivia
//==========================================================================================================
//==========================================================================================================
// let triviaPopup = document.querySelector('#triviaPopup')
// let closePopupBtn = document.querySelector('#close')
// let btnHint = document.querySelector('.btnHint')


// // Adds or removes the class list of .none 
// openModal = (e) => {
//   triviaPopup.classList.remove('none')
// }

// closeModal = (e) => {
//   triviaPopup.classList.add('none')
// }

//closePopupBtn.addEventListener('click', closeModal)

//btnHint.addEventListener('click', openModal)

//==========================================================================================================
//==========================================================================================================
// TRIVIA PORTION
//==========================================================================================================
//==========================================================================================================
// let triviaForm = document.querySelector('.trivia')
// let answer1 = document.querySelector('#a1')
// let answer2 = document.querySelector('#a2')
// let submitAnswer = document.querySelector('.submit')
// let question = document.querySelector('.question')

// // console.log(answer1)
// // console.log(answer2.name)
// //console.log(answer1.checked)

// let triviaQuestions = [
//   {
//     question: 'Is Monitor Lord still alive?',
//     correctAnswer: 'true',
//   }
// ]

// let accessQuestion = triviaQuestions[0].correctAnswer

// wrongAnswerFunc = () => {
//   // Take the form and make it blank
//   triviaForm.innerHTML = ''
//   triviaForm.removeAttribute('form')
//   let triviaPopDiv = document.createElement('div')
//   triviaPopDiv.classList.add('test')
//   let triviaFormWrongText = document.createElement('p')
//   triviaFormWrongText.innerText = 'You got the wrong answer'
//   triviaPopup.append(triviaPopDiv)
//   triviaPopDiv.append(triviaFormWrongText)
//   setTimeout(() => {
//     closeModal()
//   }, 2000)
// }

// checkAnswer = (e, i) => {
//   //console.log(this)
//   //console.log(accessQuestion)
//   // console.log('Checking')
//   // console.log(i)
//   e.preventDefault()
//   // console.log(answer1.checked)
//   console.log('SUBMITTED')
//   if (answer1.checked == true) {
//     //console.log('answer has been checked')
//     //console.log('This is not the correct answer')

//     wrongAnswerFunc()
    
//     if (accessQuestion == answer1.name) {
//       console.log('you got it right')

//       closeModal()
//       //showCards(i)
//     }
//   } else if (answer2.checked == true){
//     //console.log('This is not the correct answer')
//     wrongAnswerFunc()
//     if (accessQuestion == answer2.name) {
//       console.log('you got it right')
//       closeModal()
//       //showCards(i)
//     }
//   } else {
//     console.log('You didnt make a selection')
//   }
// }

// // checkAnswer()

// checkThis = (e) => {
//   //e.preventDefault()
//   console.log(this)
//   //console.log(showCards(i))
// }

// checkThis()

//triviaForm.addEventListener('click', checkThis)


//==========================================================================================================
//==========================================================================================================
// Event Listener for the cards
//==========================================================================================================
//==========================================================================================================
for(let i = 0; i < cards.length; i++) {
  showCards(i)
  clearTimeout()
  card = cards[i]
  card.addEventListener('click', () => cardHandler(i))
  //card.classList.add('card-hover')
  // triviaForm.addEventListener('submit', checkThis)
  //shuffleCards()
    btnHint.addEventListener('click', () => hintFunc(i))

 
}