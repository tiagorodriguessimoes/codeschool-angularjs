(function() {
	var app = angular.module('store', ['store-directives']);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("ReviewController", function(){
		this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
	});

	// app.controller('StoreController', [ '$http', function($http){
	// 	var store = this;
	// 	store.products = [];
	// 	$http.get('/store-products.json').success(function(data){
	// 		store.products = data;
	// 	});
	// }]);
    //
    var gems = [{
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [
                './images/dodecahedron/dodecahedron-01-full.jpg',
				'./images/dodecahedron/dodecahedron-01-thumb.jpg'
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "this product sucks!",
                    author: "tim@hater.com"
                }
            ]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
            images: [
                './images/pentagonal/pentagonal-01-full.jpg',
                './images/pentagonal/pentagonal-01-thumb.jpg',
            ]
		}
	]

})();
