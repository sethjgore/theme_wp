document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(item){
	if(typeof item == boolean){
		item = !item;
	}else{
		console.log('toggle() only accepts boolean values');
	}
}