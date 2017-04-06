var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Mike";
var showBoat = "3real";

if(myName.length > 3) {
    bubleShape = "circle";
}

else {
    bubbleShape = "square";
}

var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

//if(showBoat.length > 2){
    //bounceName();
//}

//else {
    bounceBubbles();
//}

if(showBoat.length < 3) {
    bubbleShape = "square";
}

else {
    bubbleShape = "circle";
}

var letterColors = [red, orange, green, blue, purple];

drawName(myName + showBoat, letterColors);
