const apiBaseUrl = 'http://18.231.42.102:3000/api/produtos/';
const Product = {
	/**
	 * Adds a product on calling the API
	 * @param {Object} data 
	 */
	add: function (data) {
		$.ajax({
			url: apiBaseUrl,
			method: 'POST',
			data: data,
			dataType: 'json',
			success: (res) => {
				console.log(res);
				if (res._id.length) {
					promptMessage('Produto cadastrado com sucesso', true);
					this.findAll();

				} else {
					promptMessage('Falha ao cadastrar o produt', false);
				}
			}
		});
	},

	/**
	 * 
	 * @param {String} productId 
	 * @param {Object} data 
	 */
	update: function (productId, data) {
		const updateApiUrl = apiBaseUrl + productId;

		$.ajax({
			url: updateApiUrl,
			method: 'PUT',
			data: data,
			dataType: 'json',
			success: (res) => {
				console.log(res);
				if (res._id.length) {
					promptMessage('Produto alterado com sucesso', true);
					this.findAll();

				} else {
					promptMessage('Falha ao alterar o produto', false);
				}
			}
		});
	},

	/**
	 * Fetches a specific product information by ID
	 * @param {String} productId 
	 */
	findById: function (productId) {
		const getApiUrl = apiBaseUrl + productId;

		$.ajax({
			url: getApiUrl,
			method: 'GET',
			dataType: 'json',
			success: (res) => {
				$('#product_id').val(res._id);
				$('#product_name').val(res.descricao);

				toggleLightbox(true);
			}
		});
	},

	/**
	 * List all the products
	 */
	findAll: function () {
		$.ajax({
			url: apiBaseUrl,
			method: 'GET',
			dataType: 'json',
			success: (res) => {
				Display.list(res);
			}
		});
	},

	/**
	 * Delete a product
	 * @param {String} productId 
	 */
	delete: function (productId) {
		const deleteBaseUrl = apiBaseUrl + productId;
		if (confirm('Tem certeza que deseja deletar?')) {
			$.ajax({
				url: deleteBaseUrl,
				method: 'DELETE',
				dataType: 'json',
				success: () => {
					this.findAll();
				},
				error: () => {
				}
			});
		}
	}
};