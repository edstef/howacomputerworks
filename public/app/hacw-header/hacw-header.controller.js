(function() {
	'use strict';

	angular.module('headerController', [])
	.controller('HeaderController', HeaderController);

	HeaderController.$inject = [];

	function HeaderController() {
		var vm = this;

		vm.searchActive = false;
		
		vm.searchStyle = {
			width: '0px', 
			color: 'white', 
			fontSize: '17px',
			visibility: 'hidden',
			'-webkit-transition': 'width 0.3s, margin-left 0.3s, visibility 0.3s'
		};

		vm.searchBarToggle = function(stateOfSearch) {
			if (stateOfSearch === false) {
				vm.searchActive = true;
				vm.searchStyle.visibility = 'visible';
				vm.searchStyle.width = '350px';
				vm.searchStyle.marginLeft = '-350px';
			}
			else {
				vm.searchActive = false;
				vm.searchStyle.width = '0px';
				vm.searchStyle.marginLeft = '0px';
				vm.searchStyle.visibility = 'hidden';
			}
			
		};
	}
}());
