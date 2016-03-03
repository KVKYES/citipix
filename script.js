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
//append here for the drop-down menu
	$('.#city-type').append('<option>Select A City</option>');
// set up a "for" loop as instructions for the computer to find the matching city.
	for (var i = 0; i < cities.length; i++){
	// console.log(cities[i]);
	$('#city-type').append('<option val=' +cities[i]+ '>'+ cities[i] + '</option>');
	$('#city-type').append('<option>'+cities[i]+'</option>');
}
//on entering "city, the goal is for the background to change to that matching city
$('#enter_city').on('change', function(e){
	e.preventDefault();
	//the id "city-type" appears as the user types "SF" or "NYC"...(or whichever city), from the image url.
	var city = $('#city-type').val().toLowerCase();
	$('body').removeClass();


if (city === 'NYC' || city === 'new york city' || city === 'new york') {
$('body').addClass('nyc');
}
else if (city === 'SF' || city === 'san francisco' || city === 'bay area') {
$('body').addClass('sf');
}
else if (city === 'SYD' || city === 'sydney') {
$('body').addClass('sydney');
}
else if (city === 'ATX' || city === 'austin') {
$('body').addClass('austin');
}
else if (city === 'LA' || city === 'LAX' || city === 'los angeles') {
$('body').addClass('la');
}
});
