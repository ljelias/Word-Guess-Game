
//CREATE an array of words with their image and hint
const words = [
    { image: "assets/images/rose.jpg", word: "rose", clue: "CLUE: Some smell sweet, some have no smell.", info: "ROSE: Some rose petals are bitter, others are sweet." },
    { image: "assets/images/peony.jpg", word: "peony", clue: "CLUE: Very sweet smell, blooms in early summer, attracts ants.", info: "PEONY: Some have a mellow flavor, others taste bitter." },
    { image: "assets/images/violets.jpg", word: "violet", clue: "CLUE: Small, purple, blooms in early spring.", info: "VIOLET: No particular flavor but looks nice on a cake or salad." },
    { image: "assets/images/cornflower.jpg", word: "cornflower", clue: "CLUE: Also called Bachelor-Button.", info: "CORNFLOWER: Blossoms have no flavor. There are many colors, which can make a festive salad." },
    { image: "assets/images/begonia3.jpg", word: "begonia", clue: "CLUE: Leaves are slightly succulent.", info: "BEGONIA: The petals have a slight tangy, lemony flavor." },
    { image: "assets/images/daylily.jpg", word: "daylily", clue: "CLUE: The blooms last for a single day.", info: "DAYLILY: A mellow flavor raw. Buds can be cooked." },
    { image: "assets/images/nasturtium.jpg", word: "nasturtium", clue: "CLUE: A vining plant. Bright yellow and orange flowers.", info: "NASTURTIUM: A very sweet smell, and a spicy flavor." },
    { image: "assets/images/chives.jpg", word: "chive", clue: "CLUE: Blooms in spring. Lavender color, oniony flavor.", info: "CHIVE: Taste great on salads or with scrambled eggs." },
    { image: "assets/images/pansy2.jpg", word: "pansy", clue: "CLUE: Many bright colors. Prefers cooler weather.", info: "PANSY: Sweet smelling, no real flavor, lots of colors." },
    { image: "assets/images/cucumber.jpg", word: "cucumber", clue: "CLUE: Yellow flowers with 5 points, on a vining plant.", info: "CUCUMBER: The blossoms have a light cucumber flavor." },
    { image: "assets/images/dandelions.jpg", word: "dandelion", clue: "CLUE: Bright yellow flowers. Sometimes used to make wine.", info: "DANDELION: More delicious cooked than raw." }
];

let letterBlanks = [];
let usedLetters = [];
let letterGuess = "";
let guessesLeft = 12;
let wins = 0;
let losses = 0;
let randNum = 0;
let nextWord = "";
let gameInProgress = 0;
let keyPushed;


document.onkeyup = function(event) {
    keyPushed = event.key;
    if (gameInProgress === 0 && keyPushed === "p") {
        gameRestart();
    } 
    else if (gameInProgress === 1) { 
        letterCheck(keyPushed); 
    }
}

function gameRestart() {
    guessesLeft = 12;
    document.getElementById("guessesremaining").innerHTML = guessesLeft;
    document.getElementById("underscore").innerHTML = ".";
    document.getElementById("used").innerHTML = usedLetters;
    document.getElementById("picture").src = "assets/images/whichflower.jpg";
    document.getElementById("info").innerHTML = "A WIN will reveal a photo plus some additional info here.";

    // CHOOSE random word
    randNum = Math.floor(Math.random() * words.length);
    nextWord = words[randNum].word;
    console.log(nextWord);
    generateBlanks();
}

//GENERATE blanks for each letter of the new word and show clue
function generateBlanks() {
    for (let i = 0; i < nextWord.length; i++) {
        letterBlanks.push('_');
    }
    document.getElementById("underscore").innerHTML = letterBlanks.join(" ");
    document.getElementById("clue").innerHTML = words[randNum].clue;
    gameInProgress = 1;
}

function letterCheck() {    //check if guess is inside of word
    if (nextWord.indexOf(keyPushed) > -1) {
        for (var j = 0; j < nextWord.length; j++) {
            if (nextWord[j] === keyPushed) {
                letterBlanks[j] = keyPushed;
                document.getElementById("underscore").innerHTML = letterBlanks.join(" ");
                }
        }
    } else {
        usedLetters.push(" " + keyPushed);
        document.getElementById("used").innerHTML = usedLetters;
        guessesLeft--;
        document.getElementById("guessesremaining").innerHTML = guessesLeft;
    }
    winOrLose();
}

function winOrLose() {
    if (letterBlanks.join("") === nextWord.toString()) {
        gameInProgress = 0;
        wins++;
        document.getElementById("wintotal").innerHTML = wins;
        document.getElementById("clue").innerHTML = "YOU WIN! <br> Press 'p' to play again.";
        document.getElementById("picture").src = words[randNum].image;
        document.getElementById("info").innerHTML = words[randNum].info;
        resetArrays();

    } else if (guessesLeft === 0) {
        gameInProgress = 0;
        losses++;
        document.getElementById("losstotal").innerHTML = losses;
        document.getElementById("underscore").innerHTML = "---";
        document.getElementById("clue").innerHTML = "SORRY - YOU LOSE! <br> Press P to play again.";
        resetArrays();
      }
}

function resetArrays() {
    letterBlanks.length = 0;
    usedLetters.length = 0;
}


