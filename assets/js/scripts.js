/**
 * Prompts a success or error message
 */
function promptMessage(msg, success) {
	alert(msg);
}

/**
 * Toggle the lightbox
 */
function toggleLightbox(state) {
	if (state) {
		$('#lightbox').fadeIn(400).css('display', 'flex');
	} else {
		$('#lightbox').fadeOut(400);
		formReset();
	}
}

$('#bto-add-product').on('click', function() {
	toggleLightbox(true);
});

$('#bto-lightbox-close').on('click', function() {
	toggleLightbox(false);
});

/**
 * Reset the form data
 */
function formReset() {
	$('#product-form')
		.not(':button, :submit, :reset, :hidden')
		.val('')
		.removeAttr('checked')
		.removeAttr('selected');
}