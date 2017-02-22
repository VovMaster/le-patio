$(document).ready(function(){

	$('.modal-link').click(function(){
		var thisHref = $(this).attr("href");
		
	   	open_modal(thisHref);
	    return false
	}); 
	$('.close-modal').click(function(){
	   	close_modal();
	});
});
$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".modal-window").length) return;
   	close_modal();
    event.stopPropagation();
  });
});
function open_modal(idModal) {
	$(idModal).addClass("open");
} 
function close_modal() {
	$('.wrap-modal-window').removeClass("open");
}

