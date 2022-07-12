
    const cards=document.querySelectorAll("innerCard");
    cards.forEach(card=> card.addEventListener('click', flip));

    let firstCard;
    let secondCard;    
    function matchCards(){
        const cards = document.querySelectorAll('img')
       // let img = setAttribute('src', './assets/underwater.jpeg');
        if(firstCard[0] === secondCard[0]){
            alert('matched');
           firstCard.removeEventListener("click", flip);
           secondCard.removeEventListener("click", flip);
        }
           else if(firstCard[0] !== secondCard[0]);{
            alert('NOT A MATCH');
            cards(flipback); 
           }
  

           
}
