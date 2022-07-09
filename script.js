let cardsList = '';
window.onload= ()=> { 
    const cards= document.querySelectorAll(".cards")
for (let i=0; i<cardsList.length; i++){
    let card = cards[i]
    card.addEventListener('click', flip);
    card.append(frontcards)
}

}  

 let firstcard;
 let secondcard;

function Matchcards(){
    const cards = document.querySelectorAll('img')
    let img = setAttribute('src', './assets/underwater.jpeg');
    if(firstcard[0] === secondcard[0]){
        alert('matched');
       firstcard.removeEventListener("click", flip);
       secondcard.removeEventListener("click", flip);
    }
       else (firstcard[0] !== secondcard[0]);{
        alert('NOT A MATCH');
        cards(flipback); 
       }
    }

    function flip(){
        const selectedcard = document.getElementsByClassName('value')
        cardsClicked.push([i])
            
        }
    

function Shufflecards(){
   cardsList.sort(() => random()) 
}


