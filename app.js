(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("GalleryController", function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
        };
    });

	app.controller("ReviewController", function(){
		this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
	});

    app.directive('productDescription', function(){
        return {
          restrict: 'E',
          templateUrl: 'product-description.html'
        };
      });

    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel',
        };
    });
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
