'use strict';

var init = function() {
	console.log('Hello World!');
};



var intervals = ["Prime", "Sekunde", "kleine Terz", "große Terz", "Quarte", "Quinte", "Sexte", "Septime", "Oktave"];


var userAnswer = prompt("Nenne das Intervall von c' nach c'");

	if (userAnswer === "Prime") {
		console.log("Richtig, es ist die Prime");
	}
	else {
		console.log ("Das ist leider nicht richtig. Versuchen Sie es noch einmal.");
	}