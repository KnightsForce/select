jQuery.fn.jqSelectPlug=function(){
(function($){ // на случай noConfict

$(document).ready(function(){

var select = $('.jquery-select-plug');
var lis = select.children('li');
var heightSelect=select.height();
var firstLiHeight = lis.eq(0).outerHeight(true);
var count=false;
var list;

select.css('height', firstLiHeight+'px');

addHover(lis);

//$(e.target).parent()!=select
$(document.body).click(function(e){

	if($(e.target).closest(select).length<1) { /* если не li. closest вместо parent 
												  для возможности дополнительного оборачивания неизвестно зачем.*/
		if(!count) return;
	
		select.stop().animate({'height': firstLiHeight+'px'}, {'duration': 500});
		count=false;
		return;
	};

	if(!count) {
		select.stop().animate({'height': heightSelect+'px'}, {'duration': 500});
		count=true;
		return;
	}
	
	select.stop().animate({'height': firstLiHeight+'px'}, {'duration': 500});
	count=false;

	select.append(lis).prepend(e.target);

	list = select.children('li');

	list.removeClass('hoverAfterFirst');

	firstLiHeight = list.eq(0).outerHeight(true); // если разная высота строк.

	addHover(list);


}); // конец click


function addHover(lis) {
	lis.not(':first').addClass('hoverAfterFirst'); // добавление класса всем кроме первого для hover
}

}); // конец ready

})(jQuery); // конец вызова на месте с псевдонимом

}; // конец fn
$('#select').jqSelectPlug();