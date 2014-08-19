jQuery.fn.jqSelectPlug=function(){
(function($){ // на случай noConfict

$(document).ready(function(){

var select = $('#select');
var lis = select.children('li');
var count=false;


function addHover(lis) {
lis.not(':first').addClass('afterFirst');
}

addHover(lis);



$(document.body).click(function(e){

if(e.target.tagName != "LI") {
if(!count) return;
select.animate({'height': '40px'}, {'duration': 500});
count=false;
return;
};
	if(!count) {
		select.animate({'height': '220px'}, {'duration': 500});
		count=true;
		return;
	}
	select.animate({'height': '40px'}, {'duration': 500});
	count=false;

	select.append(lis).prepend(e.target);

list = select.children('li');

list.removeClass('afterFirst');

addHover(list)

}); // конец click
  



}); // конец ready

})(jQuery); // конец вызова на месте с псевдонимом

}; // конец fn
$('#select').jqSelectPlug();