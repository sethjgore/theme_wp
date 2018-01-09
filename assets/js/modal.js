document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(item){
	console.log(item)
	if(document.querySelector(item)){
		document.querySelector(item).classList.toggle('hide');
		let animation = document.querySelector('[visible]').getAttribute('visible');
		document.querySelector('[visible]').classList.toggle('animation');
		debugger;
	}else{
		console.log(item+ 'is not a selector in document');
	}
}
