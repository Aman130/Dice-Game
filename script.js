const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');

const score1=document.querySelector('#score--0');
const score2=document.querySelector('#score--1');
const current1=document.querySelector('#current--0');
const current2=document.querySelector('#current--1');

const newGame=document.querySelector('.btn--new');
const rollDice=document.querySelector('.btn--roll');
const hold=document.querySelector('.btn--hold');

const dice=document.querySelector('.dice');
let activePlayer=0,winningScore=20,winner=0;

const intialise=function(){
    score1.innerText='0';
    score2.innerText='0';
    current1.innerText='0';
    current2.innerText='0';
    const dice=document.querySelector('.dice');
    dice.classList.add('hidden');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    winner=0;
}
intialise();
newGame.addEventListener("click",intialise);

rollDice.addEventListener('click',()=>{
    if(winner==0){
        
        let randomDice=Math.trunc(Math.random() * 6) + 1;
        const diceimg=`dice-${randomDice}.png`;
        dice.src=`${diceimg}`;
        dice.classList.remove('hidden');

        if(randomDice==1){
            current1.innerText='0';
            current2.innerText='0';
            activePlayer=(activePlayer+1)%2;
            player1.classList.toggle('player--active');
            player2.classList.toggle('player--active');
        }
        else{
            if(activePlayer==0){
                let cscore=parseInt(current1.textContent);
                cscore+=randomDice;
                current1.innerText=cscore;
            }
            else{
                let cscore=parseInt(current2.textContent);
                cscore+=randomDice;
                current2.innerText=cscore;
            }
        }
    }
});
hold.addEventListener('click',function(){
    if(winner==0){
        score1.innerText=parseInt(score1.innerText)+parseInt(current1.textContent);
        score2.innerText=parseInt(score2.innerText)+parseInt(current2.textContent);
        if(parseInt(score1.innerText)>=winningScore){
            player1.classList.add('player--winner');
            
            winner=1;
        }
        else if(parseInt(score2.innerText)>=winningScore){
            player2.classList.add('player--winner');
            winner=1;
        }
        current1.innerText='0';
        current2.innerText='0';
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
        dice.classList.add('hidden');
        activePlayer=(activePlayer+1)%2;
    }
});

