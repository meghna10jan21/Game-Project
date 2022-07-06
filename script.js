window.onload= ()=>{

const cardsList = [
    { name: 'collectionfish', img: 'assets/collectionfish' },
    { name: 'coralreff', img: 'assets/coralreff.jpeg' },
    { name: 'Dolphines', img: 'assets/Dolphines.jpeg'},
    { name: 'Jellyfish', img: 'assets/Jellyfish.jpeg' },
    { name: 'Tropicalfish', img: 'assets/Tropicalfish.jpeg'},
    { name: 'Turtle', img: 'assets/Turtle.jpeg'},
]

   const cards= document.querySelectorAll(".innercards")
for (let i=0; i<cardsList.length; i++){
    let card = cards[i]
    const frontcards = document.createElement('img');
    frontcards.src = "./assets/underwater.jpeg"
    card.addEventListener('click', flip)
    card.append(frontcards)

}
    
}

function flip(){
    const backcard = document.querySelectoAll(i)
    cardsSelect.push(cardsList[cardsList[backcard].name])

}


