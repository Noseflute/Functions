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
	for (i =1; i <3; i++)
  //Gives a number of inputs
  {
var userInput =prompt ("classroom or students. You have tried " + i + " time(s)");
var lowercase =userInput.toLowerCase();

if ((lowercase === "classroom") || (lowercase === "students"))
{
	i=3;
 // Gives a number of inputs
	window.alert(stem[lowercase]);

}