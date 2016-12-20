	
	angular.module('hallOfIdeas').directive("filterOptions", function() {

		return {

			templateUrl: "_views/filtering-options.html",
			replace: false,
			restrict: "AE"

		}

	});