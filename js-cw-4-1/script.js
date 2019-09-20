const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = 'blue';
context.stroke();
context.fillStyle = "blue";
context.fill();

context.beginPath();
context.rect(500,70,150,150);
context.closePath();
context.fillStyle = "purple";
context.fill();
context.lineWidth = 1;
context.strokeStyle ="black";
context.stroke();

context.beginPath();
context.arc(575, 130, 50, 2*Math.PI, 3*Math.PI)
context.closePath();
context.fillStyle = "brown";
context.fill();
context.lineWidth = 1;
context.strokeStyle ="black";
context.stroke();

context.beginPath();
context.rect(700,70,150,150);
context.closePath();
context.fillStyle = "blue";
context.fill();
context.lineWidth = 1;
context.strokeStyle ="black";
context.stroke();

context.beginPath();
context.rect(725,95,100,100);
context.closePath();
context.fillStyle = "green";
context.fill();
context.lineWidth = 1;
context.strokeStyle ="black";
context.stroke();

context.fillStyle="blue";
context.clearRect(740,110,70,70);



let x=10,y=200,length = 100;

context.beginPath();
context.rect(0,190,100,120);
context.closePath();
context.fillStyle = "#D5F5E3";
context.fill();

for (x,y;x<=100;x+=20) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + length);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
}

for (x=0,y=210;y<=300;y+=20) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+ length, y );
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
}


function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };

}

canvas.addEventListener('mousemove', function(evt) {
    let mousePos = getMousePos(canvas, evt);
    let message = mousePos.x + ',' + mousePos.y;
    context.clearRect(0,0,100,150);
    context.font = 'italic 20pt Calibri';
    context.fillText(message, 10, 100);
}, false);