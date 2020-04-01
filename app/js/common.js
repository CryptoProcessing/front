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

		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
		
		var id = $(this).attr('href');
		$(id).addClass('open');
		$('.modal-overlay').addClass('open-overlay');
	});

	$('.modal-close, .modal-overlay').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
	});

});