$(document).ready(function () {
    var canvas = document.getElementById("stack-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 370);
    ctx.lineTo(170, 370);
    ctx.lineTo(170, 30);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.fillText("Buttom", 180, 370);

    var beforePush = 0;
    var beforePop = 0;
    var currNum = 0;
    var counter = 0;
    const MAX_SIZE = 10;
    var speed = 5;
    var i = 0;
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    $("#stack-pop").click(function () {
        if (currNum > 0) {
            counter = 0;
            beforePop = currNum - 1;
            i = currNum;
            document.getElementById("stack-pop").disabled = true;
            requestAnimationFrame(popElement);
            currNum--;
        }
    });

    $("#stack-push").click(function () {
        if (currNum < MAX_SIZE) {
            counter = 0;
            i = MAX_SIZE;
            beforePush = currNum;
            document.getElementById("stack-push").disabled = true;
            requestAnimationFrame(pushElement);
            currNum++;
        }
    });

    function drawRoundRect(x, y, index, mx, my, width, height, r, color, fontColor = "#000", font = "12px Arial") {
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
        if (index >= 9)
            ctx.fillText(index + 1, x + width / 2 - 5, y + height / 2 + 2);
        else
            ctx.fillText(index + 1, x + width / 2 - 2, y + height / 2 + 2);
    }

    function pushElement() {
        if (++counter % speed == 0) {
            if (i > beforePush) {
                drawRoundRect(30, (MAX_SIZE - i - 1) * 34 + 30, beforePush, 3, 1, 140, 34, 10, "#fff", "#fff");
                drawRoundRect(30, (MAX_SIZE - i) * 34 + 30, beforePush, 4, 2, 140, 34, 10, "#ff88ff");
                i--;
                requestAnimationFrame(pushElement);
            }
            else
                document.getElementById("stack-push").disabled = false;
        }
        else
            requestAnimationFrame(pushElement);
    }

    function popElement() {
        if (++counter % speed == 0){
            if (i < MAX_SIZE){
                drawRoundRect(30, (MAX_SIZE - i)* 34 + 30, beforePop, 3, 1, 140, 34, 10, "#fff", "#fff");
                drawRoundRect(30, (MAX_SIZE - i - 1) * 34 + 30, beforePop, 4, 2, 140, 34, 10, "#ff88ff");
                i++;
                requestAnimationFrame(popElement);
            }
            else{
                drawRoundRect(30, 30, beforePop, 3, 1, 140, 34, 10, "#fff", "#fff");
                document.getElementById("stack-pop").disabled = false;
            }
        }
        else 
            requestAnimationFrame(popElement);
    }
});