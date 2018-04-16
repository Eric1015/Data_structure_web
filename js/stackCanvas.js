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
    $("#stack-pop").onclick(function(){
        if (currNum > 0){

        }
    });

    $("#stack-push").onclick(function(){
        if (currNum < MAX_SIZE){
            
        }
    });
});