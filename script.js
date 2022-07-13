// array of words 
const words = ['hello', 'welcome', 'sell', 'welldone', 'town', 'country', 'city', 'test', 'moscow']

// setting levels
const lvls = {
    "easy": 5,
    "normal": 3,
    "hard": 2
}

// default level
let defaultLevelName = "easy" // change level from here
let defaultLevelSec = lvls[defaultLevelName]

// catch Selectores 
let startButton = document.querySelector('.start')
let lvlNameSpan = document.querySelector('.message .lvl')
let secondsSpan = document.querySelector('.message .seconds')
let theWord = document.querySelector('.the-word')

let upcomingWords = document.querySelector('.upcoming-words')
let input = document.querySelector('.input')
let timeLeftSpan = document.querySelector('.time span')
let scoreGot = document.querySelector('.score .got')
let scoreTotal = document.querySelector('.score .total')
let finishMessage = document.querySelector('.finish')

//setting level name + sec + score
lvlNameSpan.innerHTML = defaultLevelName
secondsSpan.innerHTML = defaultLevelSec
timeLeftSpan.innerHTML = defaultLevelSec
scoreTotal.innerHTML = words.length

// disable paste event
input.onpaste = function() {
    return false
}

// start game 
startButton.onclick = function(){
    this.remove()
    input.focus()
    // generate word function 
    genWords();
}

function genWords(){
    // get random word from array 
    let randomWord = words[Math.floor(Math.random()*words.length)]
    // get word index 
    let wordIndex = words.indexOf(randomWord)
    // remove word from array
    words.splice(wordIndex, 1)
    // show random word
    theWord.innerHTML = randomWord
    // empty upcoming words
    upcomingWords.innerHTML = ''
    // generate upcoming words
    for(let i = 0; i < words.length; i++){
        // create div element
        let div = document.createElement('div')
        let txt = document.createTextNode(words[i])
        div.appendChild(txt)
        upcomingWords.append(div)
    }
    // call start play function
    startPlay()
}

function startPlay(){
    timeLeftSpan.innerHTML = defaultLevelSec
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if(timeLeftSpan.innerHTML === '0'){
            // stop timer
            clearInterval(start)
            // compare words
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                // empty input field
                input.value = '';
                // increase score
                scoreGot.innerHTML++;
                if(words.length > 0){
                    // call generate function
                    genWords();
                }else{
                    let span = document.createElement('span')
                    span.className = 'good'
                    let spanText = document.createTextNode("congrats")
                    span.appendChild(spanText)
                    finishMessage.appendChild(span)
                    upcomingWords.remove()
                }
            }else{
                let span = document.createElement('span')
                span.className = 'bad'
                let spanText = document.createTextNode('Game Over')
                span.appendChild(spanText)
                finishMessage.appendChild(span)
            }
        }
    }, 1000)
}
const date = new Date()


function saveInlocalStorage(){
}
