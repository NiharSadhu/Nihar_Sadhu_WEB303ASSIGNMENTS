/*
	WEB 303 Assignment 1 - jQuery
	{Nihar Rajanikant Sadhu}
*/

$(document).ready(function () {

	// declaring the variables to store the values from the html DOM.
	let $salary = $("#yearly-salary");
	let $percent = $("#percent");
	let $input = $("input");
	let $span = $("#amount")

	// Creating the event function 
	$input.keyup(function () {

		// variable to store the value for salary
		let sal = $salary.val();
		// converting the string to int
		let salN = parseInt(sal);
		// experiment purpose
		console.log(salN);


		// variable to store the value for percent
		let per = $percent.val();
		let perN = parseInt(per);
		console.log(perN);

		// calculation for getting the percentage
		let arithmetic = salN * perN / 100;
		// converting int to decimal
		let aD = parseFloat(arithmetic);
		console.log(arithmetic);

		// inputting the value to the span element in html
		$span.text("$" + aD.toFixed(2));

	});
});

