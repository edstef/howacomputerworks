(function() {
	'use strict';

	angular.module('hacw-banner', [])
	.directive('hacwBanner', hacwBanner);

	function hacwBanner() {
		return {
			restrict: 'E',
			templateUrl: 'app/hacw-banner/hacw-banner.html'
		};
	}
}());
