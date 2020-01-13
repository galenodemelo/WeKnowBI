/**
 * Orchestrate all the items
 */

//  List all the products
Product.findAll();

// Attributes a function to every element
function assignUpdateDeleteFunction() {
	$('.bto-product-update').on('click', function() {
		const productId = $(this).attr('data-product-id');

		Product.findById(productId);
	});

	$('.bto-product-delete').on('click', function() {
		const productId = $(this).attr('data-product-id');
		Product.delete(productId);
	});
}

// On form submit, saves the data
$('#product-form').on('submit', function(e) {
	e.preventDefault();

	const productName = $('#product_name').val() || '';
	const productId = $('#product_id').val() || '';

	// If it's a request to add a product
	if (!productId.length) {
		Product.add({
			descricao: productName
		});
	} else {
		Product.update(productId, {
			descricao: productName
		})
	}

	toggleLightbox(false);

	return false;
});