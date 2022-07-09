let cardsList = '';
window.onload= ()=> { 
    const cards= document.querySelectorAll(".cards")
for (let i=0; i<cardsList.length; i++){
    let card = cards[i]
    card.addEventListener('click', flip);
    card.append(frontcards)
}

}    

function flip(){
    
}

let firstcard='';
let secondcard='';

function Matchcards(){
    const cards = document.querySelectorAll('img')
    let img = setAttribute('src', './assets/underwater.jpeg');
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


