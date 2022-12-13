let userName = prompt("Enter your name");
if (userName != null && userName != "")
   document.getElementById("UserName").innerHTML = userName;
document.getElementById("Generate").addEventListener("click", Generate);
let roundCnt = 1, maxRnd = 3;
let symbols = [
    `<img alt="apple" src="images/apple.png">`,
    `<img alt="cherry" src="images/cherry.png">`,
    `<img alt="grape" src="images/grape.png">`,
    `<img alt="orange" src="images/orange.png">`,
    `<img alt="plum" src="images/plum.png">`,
    `<img alt="seven" src="images/seven.png">`,
    `<img alt="strawberry" src="images/strawberry.png">`,
    `<img alt="watermelon" src="images/watermelon.png">`
];

function Victory() {
    for (let i = 0; i < 3; i++) {
        if (RowTest(i)) {
            return true;
        }
    }
    return false;
}

function RowTest(currentRow) {
    for (let j = 0; j < 2; j++)
        if(document.getElementById(`${currentRow}${j}`).innerHTML !=
        document.getElementById(`${currentRow}${j+1}`).innerHTML)
            return false;
    return true;
}

function Randomizer() {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            document.getElementById(`${i}${j}`).innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
}

function Generate() {
    if (Victory()) {
        alert("YOU WON!!!");
        roundCnt = 1, maxRnd = 3;
        document.getElementById("RoundCnt").innerHTML = `Спроба ${roundCnt} з ${maxRnd}`;
        Randomizer();
        return;
    } else if (roundCnt == maxRnd) {
        alert("You lose. Better luck next time!");
        roundCnt = 1, maxRnd = 3;
        document.getElementById("RoundCnt").innerHTML = `Спроба ${roundCnt} з ${maxRnd}`;
        Randomizer();
        return;
    }
    Randomizer();
    document.getElementById("RoundCnt").innerHTML = `Спроба ${++roundCnt} з ${maxRnd}`;
}
