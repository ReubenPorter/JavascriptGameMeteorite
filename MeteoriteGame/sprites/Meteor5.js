//create the constructor for the class square
function Meteor5() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 700,
        y = -930

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Meteor5.prototype.draw = function (context) {
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
    Meteor5.prototype.move = function () {
        //change the value of the y axis for the shape
        y++;
    }
}