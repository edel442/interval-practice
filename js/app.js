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
	$(".erstesIntervall").click(fragestellung);
	$(".weiteresIntervall").click(fragestellung);
	pruefeAntwort();
};

var erstesIntervall = function() {
	$("legend div").click(fragestellung);
};



var fragestellung = function() {
	$(".frage").text("Wie heißt das Intervall von " + qas[aktuelleFragennummer].frage).show();
	$(".counter").text("Frage " + qas[aktuelleFragennummer].nummer + " von " + qas.length).show();
	$(".intervalname").focus();
	

};




var pruefeAntwort = function() {

	$(".intervalname").change(function() {
		var nutzerAntwort = $(".intervalname").val();
		if (nutzerAntwort === qas[aktuelleFragennummer].antwort) {
			$(".richtigeAntwort").show();
			aktuelleFragennummer++;
			fragestellung();
			
			
			
			$(".falscheAntwort").hide();
		} else {
			$(".falscheAntwort").show();
			$(".richtigeAntwort").hide();
		}
	});

};

var aktuelleFragennummer = 0;

var qas = [ {
	frage : "c' nach c'?",
	antwort : "Prime",
	nummer : 1
}, {
	frage : "c' nach d'?",
	antwort : "Sekunde",
	nummer : 2
}, {
	frage : "c' nach e'?",
	antwort : "Terz",
	nummer : 3
}, {
	frage : "c' nach f'?",
	antwort : "Quarte",
	nummer : 4
}, {
	frage : "c' nach g'?",
	antwort : "Quinte",
	nummer : 5
}, {
	frage : "c' nach h'?",
	antwort : "Sexte",
	nummer : 6
}, {
	frage : "c' nach a'?",
	antwort : "Septime",
	nummer : 7
}, {
	frage : "c' nach c''?",
	antwort : "Oktave",
	nummer : 8
}, ];

$(document).ready(whenReady);
