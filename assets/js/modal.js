document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(item){
	if(typeof item == 'boolean'){
		document.querySelector(item).toggle('hide');
	}else{
		console.log(item+ 'is not a selector in document');
	}
}