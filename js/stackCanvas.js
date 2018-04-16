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
            currNum--;
        }
    });

    $("#stack-push").click(function(){
        if (currNum < MAX_SIZE){
            var currX = 30;
            var currY = (MAX_SIZE - currNum - 1) * 34 + 34;
            ctx.fillStyle="#ff0000";
            ctx.fillRect(currX, currY, 240, 34);
            currNum++;
        }
    });
});