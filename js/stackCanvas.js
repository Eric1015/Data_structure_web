$(document).ready(function(){
    var canvas=document.getElementById("stack-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 370);
    ctx.lineTo(270, 370);
    ctx.lineTo(270, 30);
    ctx.stroke();

    var currNum = 0;
    const MAX_SIZE = 10;
    $("#stack-pop").click(function(){
        if (currNum > 0){
            var currX = 30;
            var currY = (MAX_SIZE - currNum) * 34 + 34;
            ctx.clearRect(currX, currY, 240, 34);
            ctx.stroke();
            currNum--;
        }
    });

    $("#stack-push").click(function(){
        if (currNum < MAX_SIZE){
            var currX = 30;
            var currY = (MAX_SIZE - currNum - 1) * 34 + 30;
            ctx.fillStyle="#ff0000";
            ctx.strokeStyle="#000";
            drawRoundRect(currX, currY);
            ctx.stroke();
            currNum++;
        }
    });

    function drawRoundRect(x, y){
        var r = 10;
        ctx.beginPath();
        ctx.arc(x+4+r, y+2+r, r, 1*Math.PI, 1.5*Math.PI, false);
        ctx.lineTo(240-r-4, y+2);
        ctx.arc(x+240-r-4, y+r+2, r, 1.5*Math.PI, 0, false);
        ctx.lineTo(x+240-4, y+34-r-2);
        ctx.arc(x+240-r-4, y+34-r-2, r, 0, 0.5*Math.PI, false);
        ctx.lineTo(x+r+4, y+34-2);
        ctx.arc(x+r+4, y+34-r-2, r, 0.5*Math.PI, 1*Math.PI, false);
        ctx.lineTo(x+4, y+r+2);
        ctx.closePath();
        ctx.fillStyle="red";
        ctx.fill();
    }
    
    function fadeIn(){

    }

    function fadeOut(){

    }
});