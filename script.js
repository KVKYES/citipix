// Define function (on.submit) 
// Define variable (input city). 
// Reteive input value.(adds matching city background)
// Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
// When the user changes the input of the drop-down, update the background image based on what they selected
// Use $.append() in your iteration on the drop-down menu
// Use the $.attr() function to update html classes
// Look up and use the $.change event handler to capture user actions
// Get the value of user input using $.val()
// Use  if/else conditionals to control the flow of your application
// Display your pseudocode as Javascript comments


// <!-- adding a slect dropdown menu

// 1. use an array with city names.
// 2. from that array , we are going to use a for loop 
// to insert the city options
// 3. right now, we are to consol.log the string. 
// we need to append <option val="cityname">cityname</option>

// we will use .html instead of .append because .html is going 
// to insert it into each id or element. 
// it will replace entire thing. 
// .apppend would only add to it. 
// we need to append the option tags into the cityname. 
// all we have to do is concactinate and append.

$(document).ready(function() {

//create array of cities
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
// console.log(cities[2]);
// set up a "for" loop as instructions for the computer to find the matching city.

for (var i = 0; i < cities.length; i++){
	console.log(cities[i]);
$('.city-options').append('<option val=" '+cities[1]+'">cities[i]</option>');
+};
//on entering "city, the goal is for the background to change to that matching city
$('#enter-city').on('change', function(e){
	e.preventionDefault();
//the id "city-type" appears as the user types "SF" or "NYC"...or whichever city
	$('#city-type').val();
});


if (city === 'nyc' || city === 'new york city' || city === 'New York') {
$('body').addClass('nyc');
}
else if (city === 'sf' || city === 'San Francisco' || city === 'Bay Area') {
$('body').addClass('sf');
}
else if (city === 'syd' || city === 'Sydney') {
$('body').addClass('sydney');
}
else if (city === 'austin' || city === 'Austin') {
$('body').addClass('austin');
}
else if (city === 'la' || city === 'LAX' || city === 'Los Angeles') {
$('body').addClass('la');
}
});
