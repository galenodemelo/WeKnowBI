/**
 * Class with all the methods to display the results
 */
const Display = {
	/**
	 * Remove all the items on the list
	 */
	clearList: function () {
		$('#products_list_table').html('');
	},

	/**
	 * List all the products on the table
	 * @param {Object} items 
	 */
	list: function (items) {
		this.clearList();
		
		const listElement = $('#products_list_table');

		// Iterates over each item and create a 
		items.forEach((item) => {
			const listItem = listItemHtml.replace(/{{productName}}/g, item.descricao).replace(/{{productId}}/g, item._id);

			$(listItem).appendTo(listElement);
		})

		assignUpdateDeleteFunction();
	}
};

// Template for list item
const listItemHtml = (
	`<tr>
		<td class="mdl-data-table__cell--non-numeric">
			{{productId}}
		</td>

		<td class="mdl-data-table__cell--non-numeric">
			{{productName}}
		</td>
		<td>
		<button class="bto-product-update mdl-button mdl-js-button mdl-button--icon" data-product-id="{{productId}}">
			<i class="material-icons mdl-list__item-icon">edit</i>
		</button>

		<button class="bto-product-delete mdl-button mdl-js-button mdl-button--icon" data-product-id="{{productId}}">
			<i class="material-icons mdl-list__item-icon">delete</i>
		</button>
		</td>
	</tr>`);