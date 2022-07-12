
    const cards=document.querySelectorAll("innerCard");

    function flip(){
        this.classlist.cards.add('flip');
        //let img = setAttribute('src', './assets/underwater.jpeg');
    }
    cards.forEach(card=> card.addEventListener('click', flip));

    let cardOne='';
    let cardTwo=''; 

    function gameStart(){
        const cards = document.querySelectorAll('#value')
        if(cardOne[0] === cardTwo[0]){
            alert('matched');
           cardOne.removeEventListener("click", flip);
           cardTwo.removeEventListener("click", flip);
        }
           else if(cardOne[0] !== cardTwo[0]);{
            alert('NOT A MATCH');
            cards(flipback); 
           }
           return(value++)
}
    function endGame(){
    const endGame = document.getElementsByClassName("click", value);
    if(cardOne && cardTwo === 'null'); 
    alert('YOU WON');
    return(shuffleCards);
}

    function shuffleCards(){
    cardList.sort(()=> random());
}

    function playAgain(){
    const button = document.createElement("button");
    button.innerhtml = "playAgain";
    document.body.appendChild(button);
}


