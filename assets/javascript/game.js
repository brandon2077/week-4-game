// Game begins

// Game begin
// Declare variables for the score and random numbers

var access = 0;
var denied = 0;

var output = 0;

// Random number is generated
var code = Math.floor((Math.random()* 100) + 19);

// Four variables are assigned random number values 1-12
var one = Math.floor((Math.random()* 12) + 1);
var two = Math.floor((Math.random()* 12) + 1);
var three = Math.floor((Math.random()* 12) + 1);
var four = Math.floor((Math.random()* 12) + 1);

// Function for wins and losses
var configoutput = function(){
	$('#access').empty();
	$('#access').append(access);
	$('#denied').empty();
	$('#denied').append(denied);
	$('.output').empty();
	$('.output').append(output);
	
}

// Scores are reseet to 0 upon restarting
var reset = function(){
	output = 0;
    code = Math.floor((Math.random()* 100) + 19);

	$('.code').empty();
	$('.code').append(code);

	one = Math.floor((Math.random()* 12) + 1);
    two = Math.floor((Math.random()* 12) + 1);
    three = Math.floor((Math.random()* 12) + 1);
    four = Math.floor((Math.random()* 12) + 1);
    configoutput();
}

// If score is equal to the random number, add +1 win
// else, add + loss
var config = function (){
	if (output == code) {
		access = access + 1;
		reset();
}
	else if(output > code){
		denied = denied + 1;
		reset();
}
	else{
		configoutput();
}}
// Click events to add the value of the numbers to the score
	$('.output').append(output);
	$('.code').append(code);

	$(document).ready(function(){
	$('#one').click(function(){
		output = output + two;
		config();
	})
	$('#two').click(function(){
		output  = output  + one;
		config();
	})
	$('#three').click(function(){
		output  = output  + three;
		config();
	})
	$('#four').click(function(){
		output  = output  + four;
		config();
	})
});