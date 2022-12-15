function TabulateF() {
    // y = ln ( x^2 + e^|x| + 1)
    // m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1);
    let h = document.getElementById("MyCanvas").clientHeight,
    w = document.getElementById("MyCanvas").clientWidth; // Height and width of canvas
    let from = Number(document.getElementById("IntervalFrom").value);
    if (from == null || from == '') {
        from = 1;
    }
    let to = Number(document.getElementById("IntervalTo").value);
    if (to == null || to == '') {
        to = 10;
    }
    let step = Number(document.getElementById("Step").value);
    if (step == null || step == '') {
        step = 0.5;
    }
    let m = Math, scX = w/10, scY = h/10;
    /* While loop */
    let x = from;
    console.log("While loop");
    while (to >= x) {
<<<<<<< HEAD
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
=======
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
>>>>>>> 721e20c7c69fd749af25e406df8797256ed9116f
        x += step;
    }
    /* DoWhile loop */
    x = from;
    console.log("DoWhile loop");
    do {
<<<<<<< HEAD
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
=======
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
>>>>>>> 721e20c7c69fd749af25e406df8797256ed9116f
        x += step;
    } while (to >= x);
    /* For loop */
    console.log("For loop");
    for (x = from; to >= x; x += step) {
<<<<<<< HEAD
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
=======
        console.log(`${x}:${m.log(m.pow(x, 2) + m.exp(m.abs(x)) + 1)}`);
>>>>>>> 721e20c7c69fd749af25e406df8797256ed9116f
    }
    // Axises
    let ctx = document.getElementById("MyCanvas").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.moveTo(m.round(w / scX / 2) * scX, 0);
    ctx.lineTo(m.round(w / scX / 2) * scX, h);
    ctx.moveTo(0, m.round(h / scY /2) * scY);
    ctx.lineTo(w, m.round(h / scY /2) * scY);
    ctx.stroke();
    ctx.closePath();
    // Graph
    for (let i = 0; i <= w; i++) {
        ctx.fillRect(((i - m.round(w / scX / 2) * scX) / scX) * scX +
        m.round(w / scX / 2) * scX, m.round(h / scY /2) * scY - scY *
        m.log(m.pow(((i - m.round(w / scX / 2) * scX) / scX), 2) +
        m.exp(m.abs(((i - m.round(w / scX / 2) * scX) / scX))) + 1), 4, 4);
    }
}