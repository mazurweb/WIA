/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/


if(Modernizr.canvas) {

    var rectangle = document.getElementById("rectangle");
    var rtx = rectangle.getContext("2d");

    var circles = document.getElementById("circles");
    var ctx = circles.getContext("2d");

    var path = document.getElementById("path");
    var ptx = path.getContext("2d");

    var bezier = document.getElementById("bezier");
    var btx = bezier.getContext("2d");

    var text = document.getElementById("text");
    var ttx = text.getContext("2d");

    var image = document.getElementById("image");
    var itx = image.getContext("2d");

    var combo = document.getElementById("combo");
    var cotx = combo.getContext("2d");
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/


//Draw Rectangle here


    rtx.fillStyle = "#0030DD";
    rtx.strokeStyle = "#000";
    rtx.fillRect(0,0,50,100);
    rtx.strokeRect(0,0,50,100);
    rtx.lineWidth = 2;

    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/



//Draw Circle here

    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(50,50,30,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();


    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/

    ptx.fillStyle =  "#e5e600";
    ptx.strokeStyle = "#000";

    ptx.beginPath();
    ptx.moveTo(100, 100);
    ptx.lineTo(115, 130);
    ptx.lineTo(153, 133);
    ptx.lineTo(120, 158);
    ptx.lineTo(130, 198);
    ptx.lineTo(100, 178);
    ptx.lineTo(70, 198);
    ptx.lineTo(80,158);
    ptx.lineTo(47, 133);
    ptx.lineTo(85, 130);
    ptx.closePath();
    ptx.fill();
    ptx.stroke();

//Draw Star here


    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

    btx.fillStyle = "#cb2022";
    btx.strokeStyle = "#000";

    btx.beginPath();
    btx.moveTo(100, 100);
    btx.bezierCurveTo(100, 50, 200, 50, 200, 100);
    btx.bezierCurveTo(200, 90, 167, 90, 167, 100);
    btx.bezierCurveTo(167, 90, 134, 90, 134, 100);
    btx.bezierCurveTo(134, 90, 100, 90, 100, 100);
    btx.fill();
    btx.stroke();

//Draw Umbrella top here

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

    var type = "This is canvas text :O";
    ttx.font = "22px Arial"
    ttx.fillText(type, 50,50);

//Draw text here

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/


    var img = document.querySelector("img");
    itx.width = 3300;
    itx.height = 1088;
    itx.drawImage(img,0,0);
    itx.drawImage(img,0,0,1650,544);
    itx.drawImage(img,200,380,450,430,700,689,450,300);

//Draw images here


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here


} else {
    var canvases = document.getElementById("canvases");
    canvases.innerHTML = "Your Browser does not support canvas";
}

