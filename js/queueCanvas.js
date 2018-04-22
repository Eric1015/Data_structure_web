$(document).ready(function () {
    var canvas = document.getElementById("queue-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 50);
    ctx.lineTo(370, 50);
    ctx.moveTo(30, 150);
    ctx.lineTo(370, 150);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.fillText("Front", 30, 170);

    var currNum = 0;
    const MAX_SIZE = 10;
    var i = 0;
    var beforePush = 0;
    var counter = 0;
    var speed = 5;
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    $("#queue-push").click(function () {
        if (currNum < MAX_SIZE) {
            document.getElementById("queue-push").disabled = true;
            i = MAX_SIZE;
            beforePush = currNum;
            counter = 0;
            requestAnimationFrame(pushRectAnimation);
            currNum++;
        }
    });

    $("#queue-pop").click(function () {
        if (currNum > 0) {
            document.getElementById("queue-pop").disabled = true;
            i = 0;
            drawRoundRect(30, 50, 0, 3, 1, 34, 100, 10, "#fff", "#fff");
            // Prevent deleting nothing and add one in redraw function
            if (currNum > 1) {
                counter = 0;
                requestAnimationFrame(redraw);
            }
            else
                document.getElementById("queue-pop").disabled = false;
            currNum--;
        }
    });

    $("#queue-up").click(function () {
        if (speed > 1) {
            speed--;
        }
    });

    $("#queue-down").click(function () {
        if (speed < 15) {
            speed++;
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

    function redraw() {
        if (++counter % speed == 0) {
            drawRoundRect(30 + (i + 1) * 34, 50, 0, 3, 1, 34, 100, 10, "#fff", "#fff");
            drawRoundRect(30 + i * 34, 50, i, 4, 2, 34, 100, 10, "#ff8800");
            i++;
            if (i < currNum)
                requestAnimationFrame(redraw);
            else
                document.getElementById("queue-pop").disabled = false;
        }
        else
            requestAnimationFrame(redraw);
    }

    function pushRectAnimation() {
        if (++counter % speed == 0) {
            if (i >= beforePush) {
                drawRoundRect(30 + (i + 1) * 34, 50, 0, 3, 1, 34, 100, 10, "#fff", "#fff");
                drawRoundRect(30 + i * 34, 50, beforePush, 4, 2, 34, 100, 10, "#ff8800");
                i--;
                requestAnimationFrame(pushRectAnimation);
            }
            else
                document.getElementById("queue-push").disabled = false;
        }
        else
            requestAnimationFrame(pushRectAnimation);
    }
});