document.addEventListener("DOMContentLoaded", function(event) { 
  let visible = false;

});

let toggle = function(item){
	console.log(item)
	if(document.querySelector(item)){
		document.querySelector(item).classList.toggle('hide');
		let animation = document.querySelector(item+' [visible]').getAttribute('visible');
		document.querySelector(item+' [visible]').classList.toggle(animation);
	}else{
		console.log(item+ 'is not a selector in document');
	}
}
