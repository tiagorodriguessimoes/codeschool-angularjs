(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
        {
    		name: 'Dodecahedron',
    		price: 2.95,
    		description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: './images/dodecahedron/dodecahedron-01-full.jpg',
                    thumb: './imagesdodecahedron/dodecahedron-01-thumb.jpg'
                }
            ]
    	},
        {
            name: 'Pentagonal Gem',
    		price: 5.95,
    		description: '. . .',
            canPurchase: true,
            soldOut: false,
        }
    ]

})();
