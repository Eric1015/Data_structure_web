$(document).ready(function(){
    var canvas = document.getElementById("queue-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 50);
    ctx.lineTo(370, 50);
    ctx.moveTo(30, 150);
    ctx.lineTo(370, 150);
    ctx.stroke();

    var currNum = 0;
    const MAX_SIZE = 10;
    $("#queue-push").click(function(){
        if (currNum < MAX_SIZE){
            currX = currNum*34+30;
            currY = 50;
            drawRoundRect(currX, currY);
            currNum++;
        }
    });

    $("#queue-pop").click(function(){

    });

    function drawRoundRect(x, y){
        var r = 10;
        ctx.beginPath();
        ctx.arc(x + 4 + r, y + 2 + r, r, 1 * Math.PI, 1.5 * Math.PI, false);
        ctx.lineTo(x+34 - r - 4, y + 2);
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
        if (currNum >= 9)
            ctx.fillText(currNum + 1, x + 12, y + 50);
        else
            ctx.fillText(currNum + 1, x + 15, y + 50);
    }

    function redraw(x, y){

    }
});