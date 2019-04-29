
//CREATE an array of words with their image and hint
const words = [
    { image: "assets/images/rose.jpg",      word: "rose",        clue: "CLUE: Some smell sweet, some have no smell.", info: "Some rose petals are bitter, others are sweet."},
    { image: "assets/images/peony.jpg",     word: "peony",       clue: "CLUE: Very sweet fragrance, blooms in early summer, attracts ants.", info: "Some have a mellow flavor, others taste bitter."},
    { image: "assets/images/violets.jpg",   word: "violet",      clue: "CLUE: Small, purple, blooms in early spring.", info: "No particular flavor but looks nice on a cake or salad."},
    { image: "assets/images/cornflower.jpg", word: "cornflower",  clue: "CLUE: Also called Bachelor-Button.", info: "No real flavor, but many colors. Can make a festive salad."},
    { image: "assets/images/begonia.jpg",   word: "begonia",     clue: "CLUE: Leaves are slightly succulent.", info: "The petals have a slight tangy, lemony flavor."},
    { image: "assets/images/daylily.jpg",   word: "daylily",     clue: "CLUE: The blooms last for a single day.", info: "A mellow flavor raw. Buds can be cooked."},
    { image: "assets/images/nasturtium.jpg", word: "nasturtium",  clue: "CLUE: A vining plant. Bright yellow and orange flowers.", info: "A very sweet smell, and a spicy flavor."},
    { image: "assets/images/chives.jpg",     word: "chive",       clue: "CLUE: Blooms in spring. Lavender color, oniony flavor.", info: "Taste great on salads or with scrambled eggs."},
    { image: "assets/images/pansy.jpg",     word: "pansy",       clue: "CLUE: Many bright colors. Prefers cooler weather.", info: "Sweet smelling, no real flavor, lots of colors."},
    { image: "assets/images/dandelions.jpg", word: "dandelion",   clue: "CLUE: Bright yellow flowers. Sometimes used to make wine.", info: "More delicious cooked than raw." }
  ];


  let letterBlanks = [];
  let usedLetters = [];
  let letterGuess = "";
  let guessesLeft = 12;
  let wins = 0;
  let losses = 0;
  let nextWord = "";
  let goodLetter = 0;
  let play = "";



  
  //start(document.onkeyup = "p");   ?? HOW TO GET BACK TO STARTING STATE AFTER PREVIOUS ROUND?????
  document.onkeyup = function(event) {
  var userInput = event.key;
  if (userInput === "p") {
  //RESET for each new game
      usedLetters = [];
      guessesLeft = 12;
  
  // CHOOSE random word
    let randNum = Math.floor(Math.random() * words.length); 
    nextWord = words[randNum].word; 
    console.log(nextWord);
    document.getElementById("clue").innerHTML = words[randNum].clue;

    }
  //GENERATE blanks for the number of letters of the new word
    for (let i = 0; i < nextWord.length; i++) {
      letterBlanks.push('_ ');
    }
    document.getElementById("underscore").innerHTML = letterBlanks.join("");



//player types a letter
    document.onkeyup = function(event) {
    letterGuess = event.key;
    console.log(letterGuess);
    //check if guess is inside of word
    if(nextWord.indexOf(letterGuess) > -1) {

        for (var j = 0; j < nextWord.length; j++) {

            if(nextWord[j] === letterGuess) {

                letterBlanks[j] = letterGuess; 

                document.getElementById("underscore").innerHTML = letterBlanks.join("");

                console.log(letterBlanks);
                goodLetter++;
                winOrLose();
            } 
        }
    }
    else {
        usedLetters.push(" " + letterGuess);
        document.getElementById("used").innerHTML = usedLetters;

        guessesLeft--;
        document.getElementById("guessesremaining").innerHTML = guessesLeft;
            winOrLose();
        }
    
    }

//win or lose
function winOrLose () {
    if (goodLetter === nextWord.length) { //*****REPEATED LETTERS ARE COUNTED!! ????????/
        wins++;
        document.getElementById("wintotal").innerHTML = wins;
        document.getElementById("clue").innerHTML = "YOU WIN!!";

    } else if (guessesLeft === 0) {
        losses++;
        document.getElementById("losstotal").innerHTML = losses;
        document.getElementById("clue").innerHTML = "SORRY - YOU LOSE!";

    }
  }
} 

  
  
  