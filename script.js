let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newButton = document.querySelector("#new-button");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; //player O ki turn hai 

const winPattern = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");

        if(turnO === true) {
           if(box.innerText = "O") {
            box.style.color = "#bebbbb";
           }
            turnO = false;
        } else {
            if(box.innerText = "X") {
                box.style.color = "#db8a74";
            }
            turnO = true;
        }

        box.disabled = true;
        let isWinner = checkWinner();
        count ++;

        if(count === 9 && !isWinner) {
            gameDraw();
        }


    })
})

const gameDraw = () => {
    msg.innerText = `Game was a draw.`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enabledBtn();
    msgContainer.classList.add("hide");
};

const disabledBtn = () => {
    for(let box of boxes) {
    box.disabled = true;
    }
};

const enabledBtn = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    }
};

const showWinner = (winner) => {

    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

const checkWinner = () => {

    for(let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
    if(pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 === pos3) {
            console.log("winner");
            showWinner(pos1);
        }
    }
  }
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
