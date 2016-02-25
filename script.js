// define function (on.submit) 
// define variable (input city). 
// reteive input value.(adds matching city background)


// $(document).ready(function() {
$('#enter-city').on('submit', function(e){
	e.preventionDefault();
	var city = $('#city-type').val();

	$('body').removeClass();


if (city === 'NYC' || city 'new york city' || city === 'New York') {
$('body').addClass('nyc');
}
if (city === 'SF' || city 'San Francisco' || city === 'Bay Area') {
$('body').addClass('sf');
}
if (city === 'SYD' || city ==='Sydney') {
$('body').addClass('sydney');
}
else if (city === 'Austin' || city === 'Austin') {
$('body').addClass('austin');
}
if (city === 'LA' || 'LAX' || city === 'Los Angeles') {
$('body').addClass('la');
}
});
