function draw(x, y, color) {
    x = x + 400;
    y = y + 150;
    $(document.body).append('<div style="position:absolute;top:' + y + 'px;left:' + x + 'px;color:' + color + '">·</div>')
}

function drawp(coordinate, color) {
    draw(coordinate.x, coordinate.y, color);
}
var start = { x: 0, y: 0 }
var t = 0;
var e = 200;
var a = -0.01;
var b = 0;
var c = 100;

function paowuxian() {
    var p = {};
    var x = t - e / 2;
    var y = x * x * a + b * x + c;
    p.x = start.x + x;
    p.y = start.y + y;
    if (t >= e) return console.log({ x, y });
    t++;
    drawp(p, 'red')
    setTimeout(paowuxian, 1)
}

var p1 = { x: -100, y: 0 };
var p2 = { x: 0, y: 200 }
var p3 = { x: 100, y: 0 }

function besar() {
    var p = {};
    var tt = t / e;
    var x1 = (1 - tt) * p1.x + tt * p2.x;
    var y1 = (1 - tt) * p1.y + tt * p2.y;
    var x2 = (1 - tt) * p2.x + tt * p3.x;
    var y2 = (1 - tt) * p2.y + tt * p3.y;
    var x = (1 - tt) * x1 + tt * x2;
    var y = (1 - tt) * y1 + tt * y2;
    p.x = start.x + x;
    p.y = start.y + y;
    if (t >= e) return;
    t++;
    drawp(p, 'green')
    setTimeout(besar, 1)
}
paowuxian();
t = 0;
besar()