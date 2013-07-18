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


//alle Eventhandler initialisieren ("der Mannschaft ihre Aufgaben geben")
//wird unten bei $(document).ready() als Parameter übergeben

var initialisieren = function() {
	$(".commands").click(onCommandClick);
	$(".weiter").click(geheZurNaechstenAufgabe);
	$(".intervalname").change();
	$(".pruefe").click(pruefeAntwort);
	fragestellung();
	
};


var fragestellung = function() {
	$(".frage").text(
			"Wie heißt das Intervall von " + qas[aktuelleFragennummer].frage)
			.show();
	$(".counter").text(
			"Frage " + qas[aktuelleFragennummer].nummer + " von " + qas.length)
			.show();
	$(".intervalname").focus();

};

var pruefeAntwort = function() {

		var nutzerAntwort = $(".intervalname").val().toLowerCase();
		
		if (nutzerAntwort === qas[aktuelleFragennummer].antwort) {
			$(".richtigeAntwort").show();

			$(".falscheAntwort").hide();
		} else {
			$(".falscheAntwort").show();
			$(".richtigeAntwort").hide();
		}

};

var feldLeeren = function(){
	$(".intervalname").val('');
};

var geheZurNaechstenAufgabe = function() {
	aktuelleFragennummer++;
	fragestellung();
	feldLeeren();
};

var aktuelleFragennummer = 0;

var qas = [ {
	frage : "c' nach c'?",
	antwort : "prime",
	nummer : 1
}, {
	frage : "c' nach d'?",
	antwort : "sekunde",
	nummer : 2
}, {
	frage : "c' nach e'?",
	antwort : "terz",
	nummer : 3
}, {
	frage : "c' nach f'?",
	antwort : "quarte",
	nummer : 4
}, {
	frage : "c' nach g'?",
	antwort : "quinte",
	nummer : 5
}, {
	frage : "c' nach a'?",
	antwort : "sexte",
	nummer : 6
}, {
	frage : "c' nach h'?",
	antwort : "septime",
	nummer : 7
}, {
	frage : "c' nach c''?",
	antwort : "oktave",
	nummer : 8
}, ];

$(document).ready(initialisieren);
