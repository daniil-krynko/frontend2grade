$("#Modal").hide();
$(".modalWindow button").click(restart);
$("body>button").click(next);
let eng = [
  'nag',
  'elbow',
  'magician',
  'acorn',
  'coccyx',
  'hammock',
  'perch',
  'cast',
  'australopithecine',
  'wineglass'
];
let ukr = [
  "шкапа",
  "лікоть",
  "волхв",
  "жолуд",
  "куприк",
  "гамак",
  "жердинка",
  "зліпок",
  "австралопитек",
  "келих"
];
let scTrue = 0, scFalse = 0, counter = 0;
function shuffle(eng, ukr) {
  for (let i = eng.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [eng[i], eng[j]] = [eng[j], eng[i]];
    [ukr[i], ukr[j]] = [ukr[j], ukr[i]];
  }
}
function next() {
  if ($('input')[0].value.toLowerCase() == ukr[counter].toLowerCase()) {
    $('#True').text(++scTrue);
  } else {
    $('#False').text(++scFalse);
  }
  if (counter == 9) {
    $("#Modal").show();
    if(scTrue == 10) {
      $("#Message").text("Вітаємо! Ви вгадали всі слова")
      $("#Message").css("color", "green");
    } else {
      $("#Message").text(`Ви вгадали ${scTrue} з ${eng.length}`);
      $("#Message").css("color", "red");
    }
    return;
  }
  $("#Card").text(eng[++counter]);
  $("#Counter").text(`${counter+1}/10`);
  $('input')[0].value = null;
}
function restart() {
  shuffle(eng, ukr);
  counter = scTrue = scFalse = 0;
  $("#Counter").text(`${counter+1}/10`);
  $("#True").text(scTrue);
  $("#False").text(scFalse);
  $("#Card").text(eng[counter]);
  $("#Modal").hide();
}
shuffle(eng, ukr);
$("#Card").text(eng[counter]);
