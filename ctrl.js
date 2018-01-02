(function (){
	angular
    .module('controller1',[])

    .controller("ReviewController1", function(){
		this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
	});


})();
