
    const cards=document.querySelectorAll("innerCard");

    function flip(card){
        const image = card.querySelector('img').style.opacity = 1;
       image.style.opacity = 1;
       if (!cardOne){
           cardOne= image;
           
       }
       else {
           cardTwo = image;
           if(cardOne.src === cardTwo.src){
            alert('matched');
           cardOne.removeEventListener("click", flip);
           cardTwo.removeEventListener("click", flip);
        }
           else if(cardOne.src !== cardTwo.src){
            alert('NOT A MATCH');
        }
        }

        //let img = setAttribute('src', './assets/underwater.jpeg');
    }
    //cards.forEach(card=> card.addEventListener('click', flip));

    let cardOne=null;
    let cardTwo=null; 

    function gameStart(){
        const cards = document.querySelectorAll('.innerCard')
        cards.forEach(card=> card.addEventListener('click', ()=>flip(card)));
    }
    function endGame(){
    const endGame = document.getElementsByClassName("click", value);
    if(cardOne && cardTwo === "null"); 
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


