window.onload = () => {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "DeepSkyBlue ";
    ctx.fillRect(0, 0, 1000, 1000);

    drawLandscape(ctx);

    drawTree(ctx, 50, 500, 100, 300);
    drawTree(ctx, 650, 500, 100, 300);
    drawTree(ctx, 850, 650, 80, 250);

    drawFlower(ctx, 80, 870, 15, 60, "red");
    drawFlower(ctx, 130, 900, 15, 60, "orange");
    drawFlower(ctx, 825, 800, 15, 50, "red");
    drawFlower(ctx, 780, 820, 15, 55, "orange");

    drawHouse(ctx, 300, 500, 400, 400);

    drawSun(ctx, 300, 130, 80);

    drawCloud(ctx, 500, 40);
    drawCloud(ctx, 500, 240);
    drawCloud(ctx, -50, 250);

    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    document.getElementById('hours').innerHTML = new Date().getHours().toString().padStart(2, "0");
    document.getElementById('minutes').innerHTML = new Date().getMinutes().toString().padStart(2, "0");
}

function drawLandscape(ctx) {
    ctx.fillStyle = "darkgreen";
    var path = new Path2D();
    path.moveTo(0, 800);
    path.lineTo(1000, 800);
    path.lineTo(1000, 1000);
    path.lineTo(0, 1000);
    ctx.fill(path);
}

function drawHouse(ctx, x, y, w, h) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, w, h);

    ctx.fillStyle = "red";
    var path = new Path2D();
    path.moveTo(x-20, y);
    path.lineTo(y, y-w/2);
    path.lineTo(y+w/2 +20, y);
    ctx.fill(path);

    drawWindow(ctx, x +w/2 -25, y-100, 50, 50);

    drawWindow(ctx, x + 65, y + 60, 125, 125);
    drawWindow(ctx, x + 220, y + 60, 125, 125);
    drawWindow(ctx, x + 65, y + 200, 125, 125);


    drawDoor(ctx, x + w -180 , y + h -195, 150, 195);


}

function drawWindow(ctx, x, y, w, h){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(x, y, w, h);
      var path = new Path2D();
    ctx.fillStyle = "black";
    ctx.fillRect(x, y + h/2, w, 6)
    ctx.fillStyle = "black";
    ctx.fillRect(x + w/2 -3, y, 6, h)
}

function drawDoor(ctx, x, y, w, h){
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect(x, y, w, h);
        ctx.fillStyle = "black";
    var path = new Path2D();
    path.arc(x + w -30, y + h/2, 7, 0, 2 * Math.PI);
    ctx.fill(path);
}

function drawTree(ctx, x, y, w, h) {
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect(x + w / 4, y + w, w / 2, h - w);
    ctx.fillStyle = "green";
    var path = new Path2D();
    path.arc(x + w / 2, y + w / 2, w, 0, 2 * Math.PI);
    ctx.fill(path);
}

function drawFlower(ctx, x, y, w, h, color) {
    ctx.fillStyle = "green";
    ctx.fillRect(x+w*0.3, y+w/2, w*0.4, h-w/2)
    ctx.fillStyle = color;
    var path = new Path2D();
    path.arc(x + w / 2, y + w / 2, w, 0, 2 * Math.PI);
    ctx.fill(path);
    ctx.fillStyle = "yellow";
    var path = new Path2D();
    path.arc(x + w / 2, y + w / 2, w/2, 0, 2 * Math.PI);
    ctx.fill(path);
}

function drawSun(ctx, x, y, r) {
    shine = ctx.createRadialGradient(x, y, r, x, y, r*2);
    shine.addColorStop(0, "rgba(255,255,100,1)");
    shine.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = shine;
    ctx.fillRect(0, 0, 1000, 1000);
    var path = new Path2D();
    path.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill(path);
}

function drawCloud(ctx, x, y) {
    var path = new Path2D();
    path.moveTo(x +170, y +80);
    path.bezierCurveTo(x, y + 100, x + 130, y + 150, x + 230, y + 150);
    path.bezierCurveTo(x + 250, y + 180, x + 320, y + 180, x + 340, y + 150);
    path.bezierCurveTo(x + 420, y + 150, x + 420, y + 120, x + 390, y + 100);
    path.bezierCurveTo(x + 430, y + 40, x + 370, y + 30, x + 340, y + 50);
    path.bezierCurveTo(x + 320, y + 10, x + 250, y + 30, x + 250, y + 50);
    path.bezierCurveTo(x + 200, y + 10, x + 150, y + 70, x + 170, y + 90);
    ctx.fillStyle = '#8ED6FF';
    ctx.strokeStyle = '#0000ff';
    ctx.fill(path);
}