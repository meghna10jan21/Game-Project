window.onload= ()=>{

const cardsList = [
    { name: 'collectionfish', img: 'assets/collectionfish' },
    { name: 'collectionfish', img: 'assets/collectionfish' },
    { name: 'coralreff', img: 'assets/coralreff.jpeg' },
    { name: 'coralreff', img: 'assets/coralreff.jpeg' },
    { name: 'Dolphines', img: 'assets/Dolphines.jpeg'},
    { name: 'Dolphines', img: 'assets/Dolphines.jpeg'},
    { name: 'Jellyfish', img: 'assets/Jellyfish.jpeg' },
    { name: 'Jellyfish', img: 'assets/Jellyfish.jpeg' },
    { name: 'Tropicalfish', img: 'assets/Tropicalfish.jpeg'},
    { name: 'Tropicalfish', img: 'assets/Tropicalfish.jpeg'},
    { name: 'Turtle', img: 'assets/Turtle.jpeg'},
    { name: 'Turtle', img: 'assets/Turtle.jpeg'},
]
    let result = 0;
    let cardsclick = 0;
    let Firstcardselection = [];
    let secondcardselection = [];
    
   const cards= document.querySelectorAll(".innercards")
for (let i=0; i<cardsList.length; i++){
    let card = cards[i]
    const frontcards = document.createElement('img');
    frontcards.src = "./assets/underwater.jpeg"
    card.addEventListener('click', flip)
    card.append(frontcards)
}
    
}

function gamestart(){
    const selection = document.querySelectoAll(i)
    cardsSelect.push(cardsList[selection].name)

}


function Shufflecards(){
   cardsList.sort(() => random()) 
}


