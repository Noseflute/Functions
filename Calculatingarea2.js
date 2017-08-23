function calculateArea(width,height) {
var area=width*height;
//Multiplying width and height
return area;
//returns the solution, which in this case is the area
}
var askwidth = prompt ("What is the width");
var askheight = prompt ("What is the height");
var wallOne=calculateArea(askwidth,askheight);
//activating calculateArea, 3 matches with width, and 5 matches the height
window.alert(wallOne);
//showcases that result of wallOne