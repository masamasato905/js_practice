const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const reset = document.getElementById("reset");

let mouse = {x: 0, y: 0};


function setting(){
let mouse = {x: 0, y: 0};
context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = "#000";
context.fill();

context.lineWidth = 5;
context.strokeStyle = "#fff";
}

setting();

canvas.addEventListener("mousemove", function(e) {
	mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
});

canvas.addEventListener("mousedown", function(e) {
	context.beginPath();
  context.moveTo(mouse.x, mouse.y);

  canvas.addEventListener("mousemove", onPaint);
});

canvas.addEventListener("mouseup", function() {
	canvas.removeEventListener("mousemove", onPaint);
});


const onPaint = function() {
	context.lineTo(mouse.x, mouse.y);
  context.stroke();
}

reset.addEventListener("click", function(e){
  context.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
  setting();
  setting();
});
