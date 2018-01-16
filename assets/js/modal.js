document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(selector){
 	console.log(selector)
	 if(document.querySelector(selector)){ 
	 	
		document.querySelector(selector).classList.toggle('hide');

		let animation = document.querySelector('[visible]').getAttribute('visible');

		document.querySelector('[visible]').classList.toggle(animation);
	}else{
		console.log(selector+ ' is not a selector in document');
	
}