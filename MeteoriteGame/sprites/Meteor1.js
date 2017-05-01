//create the constructor for the class square
function Meteor1() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 400,
        y = -100

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Meteor1.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //draw the meteor
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(-80, -62, 30, 0, (Math.PI * 2));
        //colour in the meteor
        context.fillStyle = "#ef6226";
        //apply the fill
        context.fill();
        //draw the meteor
        context.stroke();

   //restore the state of the context to what it was before our drawing
        context.restore();
    }

    //create the public move method by adding it to the classes prototype
    Meteor1.prototype.move = function () {
        //change the value of the y axis for the shape
        y++;
    }

    //create a public property called X (note caps!)
    Object.defineProperty(this, 'X',
    {
        //getter
        get: function () {
            //return the value of x (lower case)
            return x;
        },
        //setter
        set: function (value) {
            //ste the value of x (lower case)
            x = value;
        }
    }
    )

    //create a public property called Y (note caps!)
    Object.defineProperty(this, 'Y',
    {
        //getter
        get: function () {
            //return the value of y (lower case)
            return y;
        },
        //setter
        set: function (value) {
            //set the value of y (lower case)
            y = value;
        }
    }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the y posn less the height
            return y - 10;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the y posn plus the height
            return y + 10;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the x posn less the width
            return x - 80;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the x posn plus the width
            return x + 80;
        }
    }
    )
}