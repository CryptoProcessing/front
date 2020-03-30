$(document).ready(function(){

	//header mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	$(document).on('click', function (e){
		var block = $(".header");
		if (!block.is(e.target) && block.has(e.target).length === 0)
			$('.header').removeClass('header-active');
	});

	//modal
	var modalCont = $('.modal');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(modalCont).removeClass('open');
		$(id).addClass('open');
	  $('#info-form').val(hiddenValue);
	});

	$('.cancel, .modal-overlay').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
	});

});