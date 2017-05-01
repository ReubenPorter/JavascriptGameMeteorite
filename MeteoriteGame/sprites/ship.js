
//create the constructor for the class ship
function Ship() {
    //initialisation code will go here

    //private variables for the x and y coordinates
    var x = 200,
        y = 200
    vx = 0,
    vy = 0,
    RedWindow = 1,
    GlobeYellow = 1;
    Sucess = false;
    Boom = false;


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Ship.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#abb0ba";
        context.moveTo(-20, 20);
        context.lineTo(-50, 0);
        context.lineTo(-20, -10);
        context.lineTo(-12, -25);
        context.lineTo(12, -25);
        context.lineTo(20, -10);
        context.lineTo(50, 0);
        context.lineTo(20, 20);
        context.lineTo(-20, 20);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();



        DrawWindows(context);
        DrawGlobes(context);

        //if the ship has landed sucessfully
        if (Sucess == true) {
            //create a new instance of an image
            var img = new Image();
            //get the source
            img.src = "images/winner.jpg";
            //draw the image on the context
            context.drawImage(img, -800, -400);
        }

        //if the ship has crashed
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the source
            img.src = "images/boom.png";
            //draw the image on the context
            context.drawImage(img, -200, -200);
        }


        //restore the state of the context to what it was before our drawing
        context.restore();
    }

    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }
        //middle landing globe
        Globe(context, -15, 20, colour);
        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }


    function DrawWindows(context, colour) {
        //var for the offset of the dinow to be drawn
        var XOffset = -10,
            //var for the loop counter to indicate which window we are drawing
            WindowNo = 1,
            //var t store the colour to use
            Colour = "";
        //loop through each window
        while (WindowNo != 3) {
            //if the red window is being drawn then set the colour to red
            if (WindowNo == RedWindow) {
                //set the colour to red
                Colour = "#ff0000";
            }
            else {
                //set colour to white
                Colour = "#ffffff";
            }
            //draw the window
            Window(context, XOffset, -15, Colour);
            //point at the next window
            WindowNo++;
            //work out the pos of next window
            XOffset = XOffset + 20;
        }
        //change the red window to the next one
        RedWindow = RedWindow + .25;
        //if the red window is 3 that's too many
        if (RedWindow == 3) {
            //set it back to 1
            RedWindow = 1;

        }
    }


    function Window(context, xposn, yposn, colour) {
        //start the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        //draw the window
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        //fill the window
        context.fill();
        //draw the window
        context.stroke();
    }

    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.quadraticCurveTo(xposn + 13, yposn + 20, xposn + 30, yposn);
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
    }

    Ship.prototype.move = function () {
        //change the x avis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

    //public method to set the vector of the ship
    Ship.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }

    //public method to set the vector of the ship
    Ship.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 20;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 30;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 30;
        }
    }
    )

    //function to display a collision image
    Ship.prototype.halt = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as winning
        if (temp > .4) {
            Sucess = true;
        }
    }

    //function to display a collision image
    Ship.prototype.halt2 = function () {
        //temp variable to store the vy
        var temp = vy;
        //kill all velocity
        vx = 0;
        vy = 0;
        //set the ship as exploding
        if (temp > .0) {
            Boom = true;
        }
    }

}
    
