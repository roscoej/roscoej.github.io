$(document).ready(function(){
	
	//open the lateral panel
	$('.wrapper .dot').on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$(hash).addClass('is-visible');
			$(hash).parents().find('body').addClass('open');
		}
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			$('body').removeClass('open');
			event.preventDefault();
		}
	});

	$('[data-toggle="tooltip"]').tooltip();

});


$(window).resize(function(){
	center();
})

$(window).load(function(){
	center();
});

function center() {
	var parentHeight = $(window).outerHeight();
	var childHeight = $('.data-center-main').outerHeight();
	$('.data-center-main').css('margin-top', (parentHeight - childHeight) / 2);
}