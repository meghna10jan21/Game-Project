window.onload= ()=>{

const cardsList = [
    { name: 'collectionfish', img: 'assets/collectionfish.jpeg', },
    { name: 'collectionfish', img: 'assets/collectionfish.jpeg', },
    { name: 'coralreff', img: 'assets/coralreff.jpeg', },
    { name: 'coralreff', img: 'assets/coralreff.jpeg', },
    { name: 'Dolphines', img: 'assets/Dolphines.jpeg',},
    { name: 'Dolphines', img: 'assets/Dolphines.jpeg',},
    { name: 'Jellyfish', img: 'assets/Jellyfish.jpeg', },
    { name: 'Jellyfish', img: 'assets/Jellyfish.jpeg', },
    { name: 'Tropicalfish', img: 'assets/Tropicalfish.jpeg',},
    { name: 'Tropicalfish', img: 'assets/Tropicalfish.jpeg',},
    { name: 'Turtle', img: 'assets/Turtle.jpeg',},
    { name: 'Turtle', img: 'assets/Turtle.jpeg',},
];
    let result = 0;
    let cardsclick = 0;
    let firstcard= [];
    let secondcard = [];
    
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
    const selection = this.information.id;
    let firstcard = document.getElementsByClassName(".value")
    cardsSelect.push(cardsList[selection].name)

}

function Matchcards(){
    const cards = document.querySelectorAll('img')
    if(firstcard[0] === secondcard[0]){
        alert('matched');
        removeEventListener.firstcard && secondcard;
    }
       else (firstcard[0] !== secondcard[0]);{
        alert('NOT A MATCH');
        cards(flipback); 
       }
    
       }
       
    
    



function Shufflecards(){
   cardsList.sort(() => random()) 
}


