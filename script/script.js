let userName = prompt("Enter your name");
if (userName != null && userName != "") {
   document.getElementById("UserName").textContent = userName;
}
let roundCnt = 0, maxRnd = 3;
let slots = [3][3];
let symbols = [
    `<img src="images/apple.png">`,
    `<img src="images/cherry.png">`,
    `<img src="images/grape.png">`,
    `<img src="images/orange.png">`,
    `<img src="images/plum.png">`,
    `<img src="images/seven.png">`,
    `<img src="images/strawberry.png">`,
    `<img src="images/watermelon.png">`
];
function RowTest(el, index, arr) {
    if (index === 0) {
        return true;
    } else {
        return (el.answer === arr[index - 1].answer);
    }
}
function ColumnTest() {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            if (slots[i][j]) {
                
            }
        }
    }
    return true;
}
function Randomizer() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

        }
        if(!ColumnTest()){
            i--;
        }
    }
    if (row[0].every(RowTest) || row[1].every(RowTest) || row[2].every(RowTest)) {
        alert("YOU WON!!!");
        roundCnt = 0, maxRnd = 3;
    }
}
function Generate() {
    if (roundCnt == maxRnd) {
        alert(`You lose. Better luck next time!`);
        roundCnt = 0, maxRnd = 3;
    }
    Randomizer();
    document.getElementById("RoundCnt").innerText = `Спроба ${++roundCnt} з ${maxRnd}`;
}
