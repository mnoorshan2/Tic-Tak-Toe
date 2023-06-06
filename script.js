let bgmusic = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let musicGameOver = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

const changeTurn = ()=>{
    return turn === "X" ? "0" : "X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameOver = true;
        }

    })

}



let box = document.getElementsByClassName("box")
Array.from(box).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    console.log(box)
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
        }
    })
    // console.log(box);

    
});