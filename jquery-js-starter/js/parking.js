RATE = 0.05
LEVEL = 3

$(document).ready(function(){
	registerEventHandler();
});


function registerEventHandler(){
	$('button').click(function(){
		$('#lblRes').text(totalPrice($('#base').val(),
									$('#years').val()));	
	});
}

function yearPrice(base,years) {
	
	return base * Math.pow( 1.0 + RATE, Math.floor(years / LEVEL) ) 

}

function totalPrice(base,years) {
	var sum = 0;
	var i;
	for(i=0; i<years; i++){
		sum+=yearPrice(base,years);
	}
	return sum;
}
