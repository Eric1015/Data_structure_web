$(document).ready(function(){
    var canvas=document.getElementById("stack-canvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 370);
    ctx.lineTo(270, 370);
    ctx.lineTo(270, 30);
    ctx.stroke();
});