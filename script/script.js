let words = {
    nag:"шкапа",
    elbow: "лікоть",
    magician:"волхв",
    acorn:"жолуд",
    coccyx:"куприк",
    hammock:"гамак",
    perch:"жердинка",
    cast:"зліпок",
    australopithecine:"австралопитек",
    wineglass:"келих"
};
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(words);
document.getElementById("Card").textContent = words[0];