$(document).ready(function () {
    var canvas = document.getElementById("stack-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 370);
    ctx.lineTo(170, 370);
    ctx.lineTo(170, 30);
    ctx.stroke();
    ctx.font="20px Arial";
    ctx.fillText("Buttom", 180, 370);

    var currNum = 0;
    const MAX_SIZE = 10;
    $("#stack-pop").click(function () {
        if (currNum > 0) {
            var currX = 30;
            var currY = (MAX_SIZE - currNum) * 34 + 30;
            drawRoundRect(currX, currY, 3, 1, 140, 34, 10, "#fff", "#fff");
            currNum--;
        }
    });

    $("#stack-push").click(function () {
        if (currNum < MAX_SIZE) {
            var currX = 30;
            var currY = (MAX_SIZE - currNum - 1) * 34 + 30;
            drawRoundRect(currX, currY, 4, 2, 140, 34, 10, "#ff88ff");
            currNum++;
        }
    });

    function drawRoundRect(x,y, mx, my, width, height, r, color, fontColor="#000", font="12px Arial"){
        ctx.beginPath();
        ctx.arc(x + mx + r, y + my + r, r, 1 * Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(width - r - mx, y + my);
        ctx.arc(x + width - r - mx, y + r + my, r, 1.5 * Math.PI, 0, false);
        ctx.lineTo(x + width - mx, y + height - r - my);
        ctx.arc(x + width - r - mx, y + height - r - my, r, 0, 0.5 * Math.PI, false);
        ctx.lineTo(x + r + mx, y + height - my);
        ctx.arc(x + r + mx, y + height - r - my, r, 0.5 * Math.PI, 1 * Math.PI, false);
        ctx.lineTo(x + mx, y + r + my);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.font = font;
        ctx.fillStyle = fontColor;
        if (currNum >= 9)
            ctx.fillText(currNum + 1, x + width/2-5, y + height/2+2);
        else
            ctx.fillText(currNum + 1, x + width/2-2, y + height/2+2);
    }

    function fadeIn() {

    }

    function fadeOut() {

    }
});