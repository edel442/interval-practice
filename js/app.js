'use strict';

var init = function() {
	console.log('Hello World!');
};

var onCommandClick = function() {
	var intervalName = [ "PRIME", "SEKUNDE", "TERZ", "QUARTE", "QUINTE",
			"SEXTE", "SEPTIME", "OKTAVE" ];
	var intervalQuestion = [ "c' nach c'", "c' nach d'", "c' nach e'",
			"c' nach f'", "c' nach g'", "c' nach a'", "c' nach h'",
			"c' nach c''" ];

	for ( var i = 0; i < intervalQuestion.length; i++) {
		console.log(intervalQuestion[i]);
		console.log(intervalName[i]);

		var userAnswer = prompt(
				"Nenne das Intervall von " + intervalQuestion[i]).toUpperCase();

		if (userAnswer === intervalName[i]) {
			alert("Das ist richtig.");
		} else {
			alert("Das ist falsch.");
		}
	}
};

var whenReady = function() {
	$(".commands").click(onCommandClick);
	$('.accordion').accordion({
		collapsible : true,
		heightStyle: 'fill'
	});
};

$(document).ready(whenReady);

