
    const cards=document.querySelectorAll("innerCard");

    function flip(){
        this.classlist.cards.add('flip'); 
    }
    cards.forEach(card=> card.addEventListener('click', flip));

    let cardOne;
    let cardTwo;    
    function matchCards(){
        const cards = document.querySelectorAll('#value')
       // let img = setAttribute('src', './assets/underwater.jpeg');
        if(cardOne[0] === cardTwo[0]){
            alert('matched');
           firstCard.removeEventListener("click", flip);
           secondCard.removeEventListener("click", flip);
        }
           else if(cardOne[0] !== cardTwo[0]);{
            alert('NOT A MATCH');
            cards(flipback); 
           }
}


