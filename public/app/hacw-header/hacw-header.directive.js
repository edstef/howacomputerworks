(function() {
	'use strict';

	/**
	* @desc hacw-header directive that contains custom header elements
	* @example <hacw-header></hacw-header>
	*/

	angular.module('hacw-header', [])
	.directive('hacwHeader', hacwHeader);

	function hacwHeader() {
		return {
			restrict: 'E',
			templateUrl: '/public/app/hacw-header/hacw-header.html'
		};
	}

}());
