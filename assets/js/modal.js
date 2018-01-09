document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(item){
	console.log(item)
	if(document.querySelector(item)){
		document.querySelector(item).toggle('hide');
	}else{
		console.log(item+ 'is not a selector in document');
	}
}