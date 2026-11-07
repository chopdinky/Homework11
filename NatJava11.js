//pink is main character
//purple is obstacle circle
//blue is obstacle circle
//yellow is mouse circle

//x and y for main pink character
var pinkX = 50
var pinkY = 50

//wasd codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for purple obstacle
var purpleX = 30;
var purpleY = 50;
var purpleXSpeed;
var purpleYSpeed;

//x and y for blue obstacle
var blueX = 40;
var blueY = 60;
var blueXSpeed;
var blueYSpeed;

//create yellow when mouse clicked
var mouseYellowX = -50;
var mouseYellowY = -50;

function setup()
{
    //the background
    createCanvas(500,600);
    //get random speed for purple
    purpleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    purpleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    //get random speed for blue
    blueXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    blueYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    
    //create Pink
    createPink(50,50);
}

function draw()
{
    //the background
    background(82,82,82);
    stroke(0);
    fill(0);

    //call createBorders function
    createBorders(10);

    //exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createPink(50,50);
    drawPink();
    pinkMovement();

    //purple enemy
    fill(176, 38, 255);
    circle(purpleX, purpleY, 10);

    //blue enemy
    fill(151, 193, 230)
    circle(blueX, blueY, 20);

    //move purple
    purpleX += purpleXSpeed;
    purpleY += purpleYSpeed;

    //check to see if purple has gone out of bounds
    if(purpleX > width)
    {
        purpleX = 0;
    }
    else if(purpleX < 0)
    {
        purpleX = width;
    }
    if(purpleY > height)
    {
        purpleY = 0;
    }
    else if(purpleY < 0)
    {
        purpleY = height;
    }

    //move blue
    blueX += blueXSpeed;
    blueY += blueYSpeed;

    //check to see if blue has gone out of bounds
    if(blueX > width)
    {
        blueX = 0;
    }
    else if(blueX < 0)
    {
        blueX = width;
    }
    if(blueY > height)
    {
        blueY = 0;
    }
    else if(blueY < 0)
    {
        blueY = height;
    }

    //check to see if pink has left the exit
    if(pinkX > width && pinkY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    //create yellow based on the mouse click
    fill(255, 255, 0);
    circle(mouseYellowX, mouseYellowY, 25);
}

function pinkMovement()
{
    //handle the keys
    if(keyIsDown(w))
    {
        pinkY -= 10;
    }
    if(keyIsDown(s))
    {
        pinkY += 10;
    }
    if(keyIsDown(a))
    {
        pinkX -= 10;
    }
    if(keyIsDown(d))
    {
        pinkX += 10;
    }
}

//createPink
function createPink(x,y)
{
    pinkX = x;
    pinkY= y;
}

//draw pink
function drawPink()
{
    fill(255, 105, 180);
    circle(pinkX,pinkY,25);
}

//borders
function createBorders(thickness)
{
    //top border
    rect(0,0,width,thickness);
    //left border
    rect(0,0,thickness,height);
    //bottom border
    rect(0, height-thickness,width,thickness);
    //right border
    rect(width-thickness,0,thickness,height-50);
}

//mouse clicked
function mouseClicked()
{
    mouseYellowX = mouseX;
    mouseYellowY = mouseY;
}
