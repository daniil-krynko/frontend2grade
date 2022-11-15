$('input[name="diff"][value="0"]').prop('checked', true);
$(`input[name="diff"]`).checkboxradio({});
$(`input[name="diff"]`).change(restart);
$("#Modal").hide();
$(".modalWindow button").click(restart);
$("body>button").click(next);
let eng = [[
  'salmon',
  'whip',
  'bridle',
  'adapter',
  'shawl',
  'corrosion',
  'sled',
  'bean',
  'vineyard',
  'squirrel'
], [
  'first aid kit',
  'hyperbole',
  'bouquet',
  'lamp',
  'stuffing',
  'lantern',
  'bilirubin',
  'martyr',
  'pigtail',
  'crematorium'
], [
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
]];
let ukr = [[
  'лосось',
  'батог',
  'вуздечка',
  'адаптер',
  'хустка',
  'корозія',
  'санки',
  'біб',
  'виноградник',
  'білка',
], [
  'аптечка',
  'гіпербола',
  'букет',
  'світильник',
  'фарш',
  'ліхтар',
  'білірубін',
  'мученик',
  'кіска',
  'крематорій'
], [
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
]];
let scTrue = 0, scFalse = 0, counter = 0, diff = $('input[name="diff"]:checked').val();
function shuffle(eng, ukr) {
  for (let i = eng.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [eng[i], eng[j]] = [eng[j], eng[i]];
    [ukr[i], ukr[j]] = [ukr[j], ukr[i]];
  }
}
function next() {
  if ($('input[type="text"]')[0].value.toLowerCase() == ukr[diff][counter].toLowerCase()) {
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
      $("#Message").text(`Ви вгадали ${scTrue} з ${eng[diff].length}`);
      $("#Message").css("color", "red");
    }
    return;
  }
  $("#Card").text(eng[diff][++counter]);
  $("#Counter").text(`${counter+1}/${eng[diff].length}`);
  $('input[type="text"]')[0].value = null;
}
function restart() {
  shuffle(eng[diff], ukr[diff]);
  counter = scTrue = scFalse = 0;
  diff = $('input[name="diff"]:checked').val();
  $("#Counter").text(`${counter+1}/10`);
  $("#True").text(scTrue);
  $("#False").text(scFalse);
  $("#Card").text(eng[diff][counter]);
  $("#Modal").hide();
}
shuffle(eng[diff], ukr[diff]);
$("#Card").text(eng[diff][counter]);
