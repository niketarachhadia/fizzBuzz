
$(document).ready(function(){
	var result = [];
	for(var i=1;i<=100;i++){

		if(i%3==0 && i%5==0){
				result.push('fizzbuzz');
			}else if(i%3==0){
				result.push('fizz');
			}else if(i%5==0){
				result.push('buzz');
			}else{
				result.push(i);
			}	
	}
	$('p').html(result.toString().replace(/,/g,'<br>'));
});