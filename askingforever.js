var stem ={
	students: 18,
  classroom: "f103",
};

var userInput =prompt ("classroom or students");
var lowercase =userInput.toLowerCase();

if ((lowercase === "classroom") || (lowercase === "students"))
{
	window.alert(stem[lowercase]);
}

else {
	for (i =0; i <3; i++) {
  
  }
	 askAgain();
 }
 
function askAgain() {
	var userInput =prompt ("classroom or students");
	var lowercase =userInput.toLowerCase();

if ((lowercase === "classroom") || (lowercase === "students")) {
	window.alert(stem[lowercase]);
 }
 else {
	 askAgain();
 }
 }