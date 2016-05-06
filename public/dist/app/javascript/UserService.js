(function() {
	'use strict';

	angular.module('UserService', [])
	.factory('User', User);

	User.$inject = ['$http'];

	function User($http) {
		var service = {
			all: all,
			get: get,
			create: create,
			update: update,
			delete: delete
		};

		function all() {
			return $http.get('/api/users/')
		}

		function get(id) {
			return $http.get('/api/users/' + id);
		}

		function create(userData) {
			return $http.post('/api/users/', userData);
		}

		function update(id, userData) {
			return $http.put('/api/users/' + id, userData);
		}

		function delete(id) {
			return $http.delete('/api/users/' + id);
		}	
	}

}());
