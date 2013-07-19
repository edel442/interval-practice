'use strict';



// alle Eventhandler initialisieren ("der Mannschaft ihre Aufgaben geben")
// wird unten bei $(document).ready() als Parameter übergeben

var initialisieren = function() {
	$(".weiter").click(geheZurNaechstenAufgabe);
	$(".intervalname").change();
	$(".pruefe").click(pruefeAntwort);
	$("form").submit(disableSubmit);
	fragestellung();
	updateStats();

};


var disableSubmit = function() {
	return false;
};

var fragestellung = function() {
	$(".frage").text("Wie heißt das Intervall von " + qas[aktuelleFragennummer].frage).show();
	$(".intervalname").focus();
	$(".pruefe").show();
	$(".weiter").hide();
	

};

var pruefeAntwort = function() {

	var nutzerAntwort = $(".intervalname").val().toLowerCase();

	if (nutzerAntwort === qas[aktuelleFragennummer].antwort) {
		$(".richtigeAntwort").show();
		$(".falscheAntwort").hide();
		$(".weiter").show();
		$(".pruefe").hide();
		var percent = (aktuelleFragennummer + 1) / qas.length * 100;
		$(".bar").css("width", percent + "%");
		
	} else {
		$(".falscheAntwort").show();
		$(".richtigeAntwort").hide();
	}

};

var feldLeeren = function() {
	$(".intervalname").val('');
};



var updateStats = function(){
	$(".counter").text("Frage " + (aktuelleFragennummer + 1) + " von " + qas.length).show();
	
	
};


var geheZurNaechstenAufgabe = function() {
	aktuelleFragennummer++;
	fragestellung();
	feldLeeren();
	updateStats();
};

var aktuelleFragennummer = 0;

var qas = [ {
	frage : "c' nach c'?",
	antwort : "prime",
}, {
	frage : "c' nach d'?",
	antwort : "sekunde",
}, {
	frage : "c' nach e'?",
	antwort : "terz",
}, {
	frage : "c' nach f'?",
	antwort : "quarte",
}, {
	frage : "c' nach g'?",
	antwort : "quinte",
}, {
	frage : "c' nach a'?",
	antwort : "sexte",
}, {
	frage : "c' nach h'?",
	antwort : "septime",
}, {
	frage : "c' nach c''?",
	antwort : "oktave",
}, ];


