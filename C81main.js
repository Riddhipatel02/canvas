canvas=document.getElementById("my_canvas");
CCtxt=canvas.getContext("2d");
color="green";
CCtxt.beginPath();
CCtxt.strokeStyle=color;
CCtxt.lineWidth=2;
CCtxt.arc(200,200,50,0,2*Math.PI);
CCtxt.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    CCtxt.beginPath();
    CCtxt.strokeStyle=color;
    CCtxt.lineWidth=2;
    CCtxt.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    CCtxt.stroke();
}