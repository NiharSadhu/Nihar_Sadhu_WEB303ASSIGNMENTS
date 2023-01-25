/*
	WEB 303 Assignment 1 - jQuery
	{Nihar Rajanikant Sadhu}
*/

$(document).ready(function () {

	let $salary = $("#yearly-salary");
	let $percent = $("#percent");
	let $input = $("input");
	let $span = $("#amount")

	$input.keyup(function () {

		let sal = $salary.val();
		let salN = parseInt(sal);
		console.log(salN);

		let per = $percent.val();
		let perN = parseInt(per);
		console.log(perN);

		let arithmetic = salN * perN / 100;
		let aD = parseFloat(arithmetic);
		console.log(arithmetic);

		$span.text("$" + aD.toFixed(2));

	});
});

