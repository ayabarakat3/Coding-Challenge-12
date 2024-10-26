// Task 2: Configure the JavaScript for Drawing Context
let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');
// Code meant to show where exactly the canvas is. 
let isDrawing = false;
// Code is meant to determine if the canvas is being drawn on or not.
let startX, startY;
// Code determines starting point of the shape. 
function getMousePosition(event) {
let canvasRect = canvas.getBoundingClientRect();
let mouseX = event.clientX - canvasRect.left; 
let mouseY = event.clientY - canvasRect.top;  
return { x: mouseX, y: mouseY };}
// Code determines the position of the mouse on the canvas and in the last line of code, return the postion of the mouse.

canvas.addEventListener('mousedown', function(event) {
isDrawing = true; 
// Code shows that if infact the canvas is being drawn on, it should proceed.
let pos = getMousePosition(event); 
startX = pos.x; 
startY = pos.y;});
// Code set to get the position of the mouse and set the starting postions of the x and y coordinates. 
canvas.addEventListener('mousemove', function(event) {
if (isDrawing) { 
let pos = getMousePosition(event); 
// Code set to get the position of the mouse and only draw when the canvas is meant to be drawn on.
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Code meant to show how the canvas should be cleared when instructed. 
ctx.strokeStyle = '#C71585'; 
// Drawing color set. I set it as dark pink as it would contrast and stand out with the light pink canvas. 
let shape = document.querySelector('input[name="shape"]:checked').value;
// Code determines what shape is intended to be used. 

if (shape === 'line') {
ctx.beginPath(); 
ctx.moveTo(startX, startY); 
// 
ctx.lineTo(pos.x, pos.y); 
//
ctx.stroke(); 
// Code meant to reveal the line drawn on the canvas. 
} else if (shape === 'rectangle') {
ctx.beginPath(); 
//
ctx.strokeRect(startX, startY, pos.x - startX, pos.y - startY); 
// 
} else if (shape === 'circle') {
let radius = Math.sqrt((pos.x - startX) ** 2 + (pos.y - startY) ** 2); 
ctx.beginPath(); 
// 
ctx.arc(startX, startY, radius, 0, Math.PI * 2); 
// 
ctx.stroke();}}}); 
// Code meant to reveal the circle on the canvas. 