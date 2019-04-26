
//CREATE an array of words with their image and hint
const words = [
    { image: "assets/images/rose.jpg",      word: "rose",        clue: "Some smell sweet, some do not.", info: "Some rose petals are bitter, others are sweet."},
    { image: "assets/images/peony.jpg",     word: "peony",       clue: "Fragrant, early summer, attracts ants.", info: "Some have a mellow flavor, others taste bitter."},
    { image: "assets/images/violets.jpg",   word: "violet",      clue: "Small, purple, early spring.", info: "No particular flavor but looks nice on a cake or salad."},
    { image: "assets/images/cornflower.jpg", word: "cornflower",  clue: "Also called Bachelor Button.", info: "No real flavor, but many colors. Can make a festive salad."},
    { image: "assets/images/begonia.jpg",   word: "begonia",     clue: "Leaves are slightly succulent.", info: "The petals have a slight tangy, lemony flavor."},
    { image: "assets/images/daylily.jpg",   word: "daylily",     clue: "The blooms last for a single day.", info: "A mellow flavor raw. Buds can be cooked."},
    { image: "assets/images/nasturtium.jpg", word: "nasturtium",  clue: "A vining plant. Bright yellow and orange.", info: "A very sweet smell, and a spicy flavor."},
    { image: "assets/images/chives.jpg",     word: "chive",       clue: "Blooms in spring. Lavender color, oniony flavor.", info: "Taste great on salads or with scrambled eggs."},
    { image: "assets/images/pansy.jpg",     word: "pansy",       clue: "Smaller plants that prefer cooler weather.", info: "Sweet smelling, no real flavor, lots of colors."},
    { image: "assets/images/dandelions.jpg", word: "dandelion",   clue: "Bright yellow. Sometimes used to make wine.", info: "More delicious cooked than raw." }
  ];
  

  // CHOOSE random word
  let randNum = Math.floor(Math.random() * words.length); 
  
  let newWord = words["word", ]; 
  let wordLength = newWord.length;
  let underLine = [];
  let usedLetters = [];
  let attemptsLeft = 12;

  //DOM manipulation
  let screenUnderLine = document.getElementsById('underscore');
  let showUsedLetters = document.getElementsById('used');
  

  //GIVE blanks for the number of letters
  let renderBlanks = () => {
      for (let i = 0; i < newWord.length; i++) {
          underLine.push('_ ');
      }
      return underLine;
  }

  //ENTER guess
  document.addEventListener('keyup', (event) => {
      let keyword = String.fromCharCode(event.keyCode);
  //if guess is right
      if (newWord.indexOf(keyword) > -1) {
        underLine[newWord.indexOf(keyword)] = keyword; //replace underline with letter
        screenUnderLine[0].innerHTML = underLine.join(' ');

        if (underLine.join(' ') == newWord) {   //checks guess
            alert('You Got It!');
        }
    }
    else {
        usedLetters.push(showUsedLetters);
        showUsedLetters[0].innerHTML = used.join(' ');

    }

    });

  
  startGame();
  
  //this is a special function that continues to execute event when other code is running
  document.onkeyup(event => {
    let letter = event.key.toUpperCase();
    guess(letter);
  });
  
    
  
  
  
  
  
  
  