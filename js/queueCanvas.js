$(document).ready(function () {
    var canvas = document.getElementById("queue-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 50);
    ctx.lineTo(370, 50);
    ctx.moveTo(30, 150);
    ctx.lineTo(370, 150);
    ctx.stroke();

    var currNum = 0;
    const MAX_SIZE = 10;
    var i = 0;
    var pop_done = false;
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    $("#queue-push").click(function () {
        if (currNum < MAX_SIZE) {
            currX = currNum * 34 + 30;
            currY = 50;
            drawRoundRect(currX, currY, currNum);
            currNum++;
        }
    });

    $("#queue-pop").click(function () {
        if (currNum > 0) {
            document.getElementById("queue-pop").disabled = true;
            i = 0;
            clearRoundRect(30, 50);
            // Prevent deleting nothing and add one in redraw function
            if (currNum > 1)
                requestAnimationFrame(redraw);
            else
                document.getElementById("queue-pop").disabled = false;
            currNum--;
        }
    });

    function drawRoundRect(x, y, index) {
        var r = 10;
        ctx.beginPath();
        ctx.arc(x + 4 + r, y + 2 + r, r, 1 * Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(x + 34 - r - 4, y + 2);
        ctx.arc(x + 34 - r - 4, y + r + 2, r, 1.5 * Math.PI, 0, false);
        ctx.lineTo(x + 34 - 4, y + 100 - r - 2);
        ctx.arc(x + 34 - r - 4, y + 100 - r - 2, r, 0, 0.5 * Math.PI, false);
        ctx.lineTo(x + r + 4, y + 100 - 2);
        ctx.arc(x + r + 4, y + 100 - r - 2, r, 0.5 * Math.PI, 1 * Math.PI, false);
        ctx.lineTo(x + 4, y + r + 2);
        ctx.closePath();
        ctx.fillStyle = "#ff8800";
        ctx.fill();
        ctx.font = "12px Arial";
        ctx.fillStyle = "#000";
        if (index >= 9)
            ctx.fillText(index + 1, x + 12, y + 50);
        else
            ctx.fillText(index + 1, x + 15, y + 50);
    }

    var counter = 0;
    function redraw() {
        if (++counter % 10 == 0) {
            clearRoundRect(30 + (i + 1) * 34, 50);
            drawRoundRect(30 + i * 34, 50, i);
            i++;
            if (i < currNum)
                requestAnimationFrame(redraw);
            else
                document.getElementById("queue-pop").disabled = false;
        }
        else
            requestAnimationFrame(redraw);
    }

    function clearRoundRect(x, y) {
        var r = 10;
        ctx.beginPath();
        ctx.arc(x + 3 + r, y + 1 + r, r, 1 * Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(x + 34 - r - 3, y + 1);
        ctx.arc(x + 34 - r - 3, y + r + 1, r, 1.5 * Math.PI, 0, false);
        ctx.lineTo(x + 34 - 3, y + 100 - r - 1);
        ctx.arc(x + 34 - r - 3, y + 100 - r - 1, r, 0, 0.5 * Math.PI, false);
        ctx.lineTo(x + r + 3, y + 100 - 1);
        ctx.arc(x + r + 3, y + 100 - r - 1, r, 0.5 * Math.PI, 1 * Math.PI, false);
        ctx.lineTo(x + 3, y + r + 1);
        ctx.closePath();
        ctx.fillStyle = "#fff";
        ctx.fill();
    }
});